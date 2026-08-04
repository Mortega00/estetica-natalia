document.addEventListener("DOMContentLoaded", () => {

    // =============================================================
    // 1. BASE DE DATOS Y MODAL DE SERVICIOS
    // =============================================================
    const serviciosDetalle = {
        drenaje: {
            titulo: "Drenaje Linfático Manual",
            descripcion: "Técnica suave de masajes manuales que estimula el sistema linfático para eliminar toxinas, líquidos retenidos y mejorar sensiblemente la circulación.",
            duracion: "60 minutos",
            sesiones: "Recomendado 1 o 2 veces por semana",
            target: "Embarazadas, personas en etapa post-quirúrgica, con edemas o retención de líquidos."
        },
        descontracturante: {
            titulo: "Masaje Descontracturante Profundo",
            descripcion: "Masaje enfocado en zonas de alta tensión (cuello, hombros, espalda). Utiliza presiones profundas para deshacer nudos musculares y aliviar molestias físicas.",
            duracion: "50 a 60 minutos",
            sesiones: "1 sesión semanal o según necesidad de dolor",
            target: "Personas con contracturas por estrés, mala postura o trabajo sedentario frente a computadoras."
        },
        dermapen: {
            titulo: "Dermapen & Microneedling Facial",
            descripcion: "Tratamiento de micro-punciones que estimula la producción natural de colágeno y elastina. Ayuda a atenuar cicatrices, manchas y aporta un brillo radiante.",
            duracion: "60 minutos",
            sesiones: "3 a 6 sesiones (1 por mes)",
            target: "Personas con piel cansada, secuelas de acné, manchas de sol o líneas de expresión."
        },
        piedras: {
            titulo: "Masaje con Piedras Calientes",
            descripcion: "Terapia de relajación profunda utilizando piedras volcánicas calientes que transmiten temperatura a los músculos, disolviendo el estrés y la rigidez.",
            duracion: "60 minutos",
            sesiones: "Ideal como mimo mensual o cuando sientas agotamiento",
            target: "Personas que buscan desconectar totalmente del estrés urbano y relajar tensiones profundas."
        },
        facial: {
            titulo: "Higiene Facial e Hidratación Profunda",
            descripcion: "Limpieza facial completa con exfoliación, extracción de impurezas, máscara descongestiva e hidratación con principios activos de primera calidad.",
            duracion: "60 minutos",
            sesiones: "1 vez al mes para mantenimiento",
            target: "Para todo tipo de piel que busque recuperar suavidad, pureza y luminosidad natural."
        }
    };

    const modal = document.getElementById("serviceModal");
    const closeModal = document.getElementById("closeModal");
    const modalBookBtn = document.getElementById("modalBookBtn");
    const selectServicio = document.getElementById("tratamiento");
    let selectedServiceKey = "";

    if (modal) {
        document.querySelectorAll(".service-card").forEach(card => {
            card.addEventListener("click", () => {
                const key = card.dataset.service;
                const data = serviciosDetalle[key];

                if (data) {
                    selectedServiceKey = key;
                    document.getElementById("modalTitle").textContent = data.titulo;
                    document.getElementById("modalDescription").textContent = data.descripcion;
                    document.getElementById("modalDuration").textContent = data.duracion;
                    document.getElementById("modalSessions").textContent = data.sesiones;
                    document.getElementById("modalTarget").textContent = data.target;

                    modal.classList.remove("hidden");
                }
            });
        });

        if (closeModal) {
            closeModal.addEventListener("click", () => modal.classList.add("hidden"));
        }

        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.add("hidden");
        });

        if (modalBookBtn) {
            modalBookBtn.addEventListener("click", () => {
                modal.classList.add("hidden");

                if (selectServicio && selectedServiceKey) {
                    selectServicio.value = selectedServiceKey;
                }

                const agendaSection = document.getElementById("agenda");
                if (agendaSection) {
                    agendaSection.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    }

    // =============================================================
    // 2. SELECTOR DE DÍAS PRÓXIMOS (SCROLL HORIZONTAL DE DÍAS Y HORARIOS)
    // =============================================================
    const dateScrollContainer = document.getElementById("dateScrollContainer");
    const slotsContainer = document.getElementById("slotsContainer");
    const inputFecha = document.getElementById("fecha");
    const inputHora = document.getElementById("hora");

    const diasSemana = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const meses = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    function generarDiasDisponibles(diasAvanzar = 14) {
        if (!dateScrollContainer) return;
        dateScrollContainer.innerHTML = "";

        const hoy = new Date();
        let generados = 0;
        let offsetDia = 0;

        while (generados < diasAvanzar) {
            const fechaValida = new Date();
            fechaValida.setDate(hoy.getDate() + offsetDia);
            offsetDia++;

            // Excluir domingos (0)
            if (fechaValida.getDay() === 0) continue;

            const diaNombre = diasSemana[fechaValida.getDay()];
            const diaNumero = fechaValida.getDate();
            const mesNombre = meses[fechaValida.getMonth()];

            // Formato amigable DD/MM/YYYY
            const strYear = fechaValida.getFullYear();
            const strMonth = String(fechaValida.getMonth() + 1).padStart(2, "0");
            const strDay = String(diaNumero).padStart(2, "0");
            const fechaFormateadaUI = `${strDay}/${strMonth}/${strYear}`;

            const cardBtn = document.createElement("button");
            cardBtn.type = "button";
            cardBtn.className = "date-card-btn";
            cardBtn.innerHTML = `
                <span class="day-name">${diaNombre}</span>
                <span class="day-num">${diaNumero}</span>
                <span class="month-name">${mesNombre}</span>
            `;

            cardBtn.addEventListener("click", () => {
                // Marcar día activo
                document.querySelectorAll(".date-card-btn").forEach(b => b.classList.remove("selected"));
                cardBtn.classList.add("selected");

                // Asignar valor al input hidden
                if (inputFecha) inputFecha.value = fechaFormateadaUI;

                // Limpiar hora seleccionada previa y cargar turnos
                if (inputHora) inputHora.value = "";
                cargarHorarios();
            });

            dateScrollContainer.appendChild(cardBtn);
            generados++;
        }
    }

    function cargarHorarios() {
        if (!slotsContainer) return;
        slotsContainer.innerHTML = ""; // Limpia el mensaje de "Seleccioná primero un día"

        const horarios = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

        horarios.forEach(hora => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "slot-btn";
            btn.textContent = `${hora} hs`;

            btn.addEventListener("click", () => {
                document.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("selected"));
                btn.classList.add("selected");
                if (inputHora) inputHora.value = `${hora} hs`;
            });

            slotsContainer.appendChild(btn);
        });
    }

    // Inicializar la grilla de días
    generarDiasDisponibles();

    // =============================================================
    // 3. PROCESAMIENTO DE RESERVA & PANTALLA DE CONFIRMACIÓN
    // =============================================================
    const formTurnos = document.getElementById("form-turnos");
    const pantallaConfirmacion = document.getElementById("pantalla-confirmacion");
    const btnNuevoTurno = document.getElementById("btnNuevoTurno");
    const btnSendWhatsapp = document.getElementById("btnSendWhatsapp");
    let timerInterval = null;

    if (formTurnos) {
        formTurnos.addEventListener("submit", (e) => {
            e.preventDefault();

            if (!inputFecha.value) {
                alert("Por favor, seleccioná un día en el calendario.");
                return;
            }
            if (!inputHora.value) {
                alert("Por favor, seleccioná un horario disponible.");
                return;
            }

            const servicioTxt = selectServicio ? selectServicio.options[selectServicio.selectedIndex].text : "Tratamiento";
            const fechaVal = inputFecha.value;
            const horaVal = inputHora.value;
            const nombreVal = document.getElementById("nombre").value;
            const telefonoVal = document.getElementById("telefono").value;

            // Actualizar datos en la pantalla de confirmación
            const confServicio = document.getElementById("confServicio");
            const confFecha = document.getElementById("confFecha");
            const confHora = document.getElementById("confHora");

            if (confServicio) confServicio.textContent = servicioTxt;
            if (confFecha) confFecha.textContent = fechaVal;
            if (confHora) confHora.textContent = horaVal;

            // Transición de pantallas
            formTurnos.classList.add("hidden");
            if (pantallaConfirmacion) pantallaConfirmacion.classList.remove("hidden");

            // Iniciar temporizador regresivo de 15 minutos para la seña
            iniciarTemporizador(15 * 60);

            // Configurar enlace directo a WhatsApp
            const telefonoEstetica = "5491112345678"; // Cambiar por el número de WhatsApp real
            const mensajeWA = `Hola! Realicé la reserva de un turno en la web:%0A` +
                `• *Servicio:* ${servicioTxt}%0A` +
                `• *Fecha:* ${fechaVal}%0A` +
                `• *Hora:* ${horaVal}%0A` +
                `• *Nombre:* ${nombreVal}%0A` +
                `• *Teléfono:* ${telefonoVal}%0A%0A` +
                `Adjunto comprobante de seña para terminar de confirmar la reserva.`;

            if (btnSendWhatsapp) {
                btnSendWhatsapp.href = `https://wa.me/${telefonoEstetica}?text=${mensajeWA}`;
            }
        });
    }

    // Temporizador regresivo
    function iniciarTemporizador(segundosTotales) {
        const timerElement = document.getElementById("timer");
        if (!timerElement) return;

        clearInterval(timerInterval);
        let tiempoRestante = segundosTotales;

        timerInterval = setInterval(() => {
            const minutos = Math.floor(tiempoRestante / 60);
            const segundos = tiempoRestante % 60;

            const strMin = String(minutos).padStart(2, "0");
            const strSeg = String(segundos).padStart(2, "0");

            timerElement.textContent = `${strMin}:${strSeg}`;

            if (tiempoRestante <= 0) {
                clearInterval(timerInterval);
                timerElement.textContent = "Expirado";
            }
            tiempoRestante--;
        }, 1000);
    }

    // Botón de copiar Alias al portapapeles
    const btnCopyAlias = document.getElementById("btnCopyAlias");
    if (btnCopyAlias) {
        btnCopyAlias.addEventListener("click", () => {
            const aliasText = document.getElementById("aliasText").textContent;
            navigator.clipboard.writeText(aliasText).then(() => {
                const textOriginal = btnCopyAlias.textContent;
                btnCopyAlias.textContent = "¡Copiado!";
                btnCopyAlias.style.background = "#2e7d32";

                setTimeout(() => {
                    btnCopyAlias.textContent = textOriginal;
                    btnCopyAlias.style.background = "";
                }, 2000);
            });
        });
    }

    // Resetear y solicitar un nuevo turno
    if (btnNuevoTurno) {
        btnNuevoTurno.addEventListener("click", () => {
            clearInterval(timerInterval);
            if (formTurnos) formTurnos.reset();
            inputFecha.value = "";
            inputHora.value = "";

            document.querySelectorAll(".date-card-btn, .slot-btn").forEach(b => b.classList.remove("selected"));
            if (slotsContainer) slotsContainer.innerHTML = '<p class="select-day-msg">Seleccioná primero un día arriba para ver los horarios disponibles.</p>';

            if (pantallaConfirmacion) pantallaConfirmacion.classList.add("hidden");
            if (formTurnos) formTurnos.classList.remove("hidden");
        });
    }

    // =============================================================
    // 4. ANIMACIONES AL HACER SCROLL (.reveal)
    // =============================================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});