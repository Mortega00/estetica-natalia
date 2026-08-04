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

    // Abrir modal o preseleccionar directo desde las tarjetas de servicios
    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", (e) => {
            const key = card.dataset.service;
            
            // Si el clic fue directamente en un botón dentro de la tarjeta para reservar directo
            if (e.target.classList.contains("btn-direct-book")) {
                e.stopPropagation();
                preseleccionarServicioYScroll(key);
                return;
            }

            // De lo contrario, abrir el modal con los detalles
            const data = serviciosDetalle[key];
            if (data && modal) {
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

    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener("click", () => modal.classList.add("hidden"));
    }

    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.add("hidden");
        });
    }

    // Botón dentro del Modal: "Agendar este tratamiento"
    if (modalBookBtn) {
        modalBookBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
            if (selectedServiceKey) {
                preseleccionarServicioYScroll(selectedServiceKey);
            }
        });
    }

    // Función auxiliar para seleccionar el servicio en el <select> y hacer scroll a la agenda
    function preseleccionarServicioYScroll(serviceKey) {
        if (selectServicio) {
            selectServicio.value = serviceKey;
        }
        const agendaSection = document.getElementById("agenda");
        if (agendaSection) {
            agendaSection.scrollIntoView({ behavior: "smooth" });
        }
    }


    // =============================================================
    // 2. REGISTRO DE TURNOS OCUPADOS / RESERVADOS
    // =============================================================
    // Objeto donde podés definir qué días y horas están ocupados (formato: "DD/MM/YYYY": ["HH:MM hs"])
    // En el futuro, esto se puede consumir de un backend o base de datos.
    const turnosOcupados = {
        // Ejemplo de turnos bloqueados para fechas específicas:
        "05/08/2026": ["10:00 hs", "15:00 hs"],
        "06/08/2026": ["09:00 hs", "11:00 hs", "16:00 hs"]
    };


    // =============================================================
    // 3. SELECTOR DE DÍAS Y HORARIOS DISPONIBLES
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
                // Marcar día activo en la interfaz
                document.querySelectorAll(".date-card-btn").forEach(b => b.classList.remove("selected"));
                cardBtn.classList.add("selected");

                // Asignar valor al input oculto de fecha
                if (inputFecha) inputFecha.value = fechaFormateadaUI;

                // Resetear selección de hora previa y renderizar los turnos de ese día
                if (inputHora) inputHora.value = "";
                cargarHorarios(fechaFormateadaUI);
            });

            dateScrollContainer.appendChild(cardBtn);
            generados++;
        }
    }

    function cargarHorarios(fechaSeleccionada) {
        if (!slotsContainer) return;
        slotsContainer.innerHTML = "";

        const horarios = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];

        // Obtener lista de turnos bloqueados para la fecha elegida
        const ocupadosDelDia = turnosOcupados[fechaSeleccionada] || [];

        horarios.forEach(hora => {
            const horaTexto = `${hora} hs`;
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "slot-btn";
            btn.textContent = horaTexto;

            // Verificar si la hora ya fue reservada
            if (ocupadosDelDia.includes(horaTexto)) {
                btn.disabled = true;
                btn.classList.add("disabled");
                btn.textContent = `${hora} (Ocupado)`;
            } else {
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("selected"));
                    btn.classList.add("selected");
                    if (inputHora) inputHora.value = horaTexto;
                });
            }

            slotsContainer.appendChild(btn);
        });
    }

    // Inicializar la grilla de días
    generarDiasDisponibles();


    // =============================================================
    // 4. PROCESAMIENTO DE RESERVA & PANTALLA DE CONFIRMACIÓN
    // =============================================================
    const formTurnos = document.getElementById("form-turnos");
    const pantallaConfirmacion = document.getElementById("pantalla-confirmacion");
    const btnNuevoTurno = document.getElementById("btnNuevoTurno");
    const btnSendWhatsapp = document.getElementById("btnSendWhatsapp");
    let timerInterval = null;

    if (formTurnos) {
        formTurnos.addEventListener("submit", (e) => {
            e.preventDefault();

            // 1. Validaciones previas
            if (!inputFecha.value) {
                alert("Por favor, seleccioná un día en el calendario.");
                return;
            }
            if (!inputHora.value) {
                alert("Por favor, seleccioná un horario disponible.");
                return;
            }

            // 2. Extracción de datos del formulario
            const servicioTxt = selectServicio && selectServicio.selectedIndex !== -1 
                ? selectServicio.options[selectServicio.selectedIndex].text 
                : "Tratamiento";
            const fechaVal = inputFecha.value;
            const horaVal = inputHora.value;
            const nombreVal = document.getElementById("nombre") ? document.getElementById("nombre").value : "";
            const telefonoVal = document.getElementById("telefono") ? document.getElementById("telefono").value : "";

            // 3. Bloquear el horario localmente tras enviar la reserva
            if (!turnosOcupados[fechaVal]) {
                turnosOcupados[fechaVal] = [];
            }
            turnosOcupados[fechaVal].push(horaVal);

            // 4. Actualizar textos en la pantalla de confirmación
            const confServicio = document.getElementById("confServicio");
            const confFecha = document.getElementById("confFecha");
            const confHora = document.getElementById("confHora");

            if (confServicio) confServicio.textContent = servicioTxt;
            if (confFecha) confFecha.textContent = fechaVal;
            if (confHora) confHora.textContent = horaVal;

            // 5. Transición visual a la pantalla de pago de la seña ($2.000)
            formTurnos.classList.add("hidden");
            if (pantallaConfirmacion) {
                pantallaConfirmacion.classList.remove("hidden");
                pantallaConfirmacion.scrollIntoView({ behavior: "smooth" });
            }

            // Iniciar temporizador de 15 minutos
            iniciarTemporizador(15 * 60);

            // 6. Construir mensaje y enlace a WhatsApp (⚠️ Reemplazá con el número real de tu mamá)
            const telefonoEstetica = "5491144332211"; 
            const mensajeWA = `Hola! Realicé la reserva de un turno en la web:%0A` +
                `• *Servicio:* ${encodeURIComponent(servicioTxt)}%0A` +
                `• *Fecha:* ${encodeURIComponent(fechaVal)}%0A` +
                `• *Hora:* ${encodeURIComponent(horaVal)}%0A` +
                `• *Nombre:* ${encodeURIComponent(nombreVal)}%0A` +
                `• *Teléfono:* ${encodeURIComponent(telefonoVal)}%0A%0A` +
                `Adjunto comprobante de seña para terminar de confirmar la reserva.`;

            const urlWhatsApp = `https://wa.me/5491132194320?text=${mensajeWA}`;

            // Asignar la URL al botón verde
            if (btnSendWhatsapp) {
                btnSendWhatsapp.href = urlWhatsApp;
            }

            // Nota: Se quitó el window.open automático para dar tiempo a realizar la transferencia primero.
        });
    }

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

    // Copiar Alias
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

    // Solicitar otro turno
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

    // Animación reveal
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