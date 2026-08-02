document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------------------------------------
    // 1. MODAL DE SERVICIOS
    // -------------------------------------------------------------
    const serviciosDetalle = {
        drenaje: {
            titulo: "Drenaje Linfático Manual",
            descripcion: "Técnica suave de masajes manuales que estimula el sistema linfático para eliminar toxinas, líquidos retenidos y mejorar sensiblemente la circulación.",
            duracion: "60 minutos",
            sesiones: "Según evaluación (recomendado 1 o 2 veces por semana)",
            target: "Embarazadas, personas en etapa post-quirúrgica, con edemas o sensación constante de piernas pesadas."
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
    const selectServicio = document.getElementById("servicio");
    let selectedServiceKey = ""; // Para guardar qué servicio abrió el modal

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

                // Preseleccionar el servicio en el formulario de la agenda
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

    // -------------------------------------------------------------
    // 2. LÓGICA DE CALENDARIO Y RESERVA
    // -------------------------------------------------------------
    const dateContainer = document.getElementById("dateContainer");
    const monthYearText = document.getElementById("calendarMonthYear");
    const prevBtn = document.getElementById("prevMonthBtn");
    const nextBtn = document.getElementById("nextMonthBtn");
    const inputFecha = document.getElementById("fecha");
    const selectHora = document.getElementById("hora");
    const formTurnos = document.getElementById("form-turnos");
    const pantallaConfirmacion = document.getElementById("pantalla-confirmacion");
    const btnNuevoTurno = document.getElementById("btnNuevoTurno");

    let currentDate = new Date();

    function renderCalendar() {
        if (!dateContainer || !monthYearText) return;

        dateContainer.innerHTML = "";
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const meses = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        monthYearText.textContent = `${meses[month]} ${year}`;

        // Días de relleno antes del primer día del mes
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement("div");
            dateContainer.appendChild(emptyCell);
        }

        // Renderizar los días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const dayBtn = document.createElement("button");
            dayBtn.type = "button";
            dayBtn.classList.add("day-btn");
            dayBtn.textContent = day;

            const dateCheck = new Date(year, month, day);

            // Deshabilitar domingos y días pasados
            if (dateCheck < today || dateCheck.getDay() === 0) {
                dayBtn.disabled = true;
            } else {
                dayBtn.addEventListener("click", () => {
                    document.querySelectorAll(".day-btn").forEach(b => b.classList.remove("selected"));
                    dayBtn.classList.add("selected");

                    // Guardar fecha formateada YYYY-MM-DD
                    const strMonth = String(month + 1).padStart(2, "0");
                    const strDay = String(day).padStart(2, "0");
                    inputFecha.value = `${year}-${strMonth}-${strDay}`;

                    // Cargar horarios disponibles
                    cargarHorarios();
                });
            }

            dateContainer.appendChild(dayBtn);
        }
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });

        nextBtn.addEventListener("click", () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }

    function cargarHorarios() {
        if (!selectHora) return;
        selectHora.disabled = false;
        selectHora.innerHTML = '<option value="" disabled selected>Seleccioná un horario</option>';

        const horarios = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
        horarios.forEach(hora => {
            const opt = document.createElement("option");
            opt.value = hora;
            opt.textContent = `${hora} hs`;
            selectHora.appendChild(opt);
        });
    }

    // Inicializar el calendario
    renderCalendar();

    // -------------------------------------------------------------
    // 3. ENVÍO DEL FORMULARIO DE TURNO (WHATSAPP + PANTALLA)
    // -------------------------------------------------------------
    if (formTurnos) {
        formTurnos.addEventListener("submit", (e) => {
            e.preventDefault();

            // Validar que haya seleccionado fecha
            if (!inputFecha.value) {
                alert("Por favor, selecciona un día en el calendario.");
                return;
            }

            const servicioTxt = selectServicio.options[selectServicio.selectedIndex].text;
            const fechaVal = inputFecha.value;
            const horaVal = selectHora.value;
            const nombreVal = document.getElementById("nombre").value;
            const telefonoVal = document.getElementById("telefono").value;

            // Rellenar la pantalla de confirmación en la web
            document.getElementById("confServicio").textContent = servicioTxt;
            document.getElementById("confFecha").textContent = fechaVal;
            document.getElementById("confHora").textContent = `${horaVal} hs`;

            // Ocultar formulario y mostrar pantalla de confirmación
            formTurnos.classList.add("hidden");
            if (pantallaConfirmacion) pantallaConfirmacion.classList.remove("hidden");

            // OPCIONAL: Enviar mensaje automático por WhatsApp
            const telefonoEstetica = "5491112345678"; // Cambiar por tu número real
            const mensajeWA = `Hola! Quisiera confirmar la reserva del turno:%0A` +
                `• *Servicio:* ${servicioTxt}%0A` +
                `• *Fecha:* ${fechaVal}%0A` +
                `• *Hora:* ${horaVal} hs%0A` +
                `• *Nombre:* ${nombreVal}%0A` +
                `• *Teléfono:* ${telefonoVal}`;

            window.open(`https://wa.me/${telefonoEstetica}?text=${mensajeWA}`, "_blank");
        });
    }

    // Botón para pedir otro turno desde la pantalla final
    if (btnNuevoTurno) {
        btnNuevoTurno.addEventListener("click", () => {
            formTurnos.reset();
            selectHora.disabled = true;
            selectHora.innerHTML = '<option value="" disabled selected>Primero elegí una fecha</option>';
            document.querySelectorAll(".day-btn").forEach(b => b.classList.remove("selected"));

            pantallaConfirmacion.classList.add("hidden");
            formTurnos.classList.remove("hidden");
        });
    }

    // -------------------------------------------------------------
    // 4. ANIMACIONES AL HACER SCROLL (a.reveal)
    // -------------------------------------------------------------
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