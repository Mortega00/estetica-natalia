document.addEventListener("DOMContentLoaded", () => {
    
    // -------------------------------------------------------------
    // 1. BASE DE DATOS DE INFORMACIÓN DE SERVICIOS (MODAL)
    // -------------------------------------------------------------
    const serviciosDetalle = {
        drenaje: {
            titulo: "Drenaje Linfático Manual",
            descripcion: "Técnica suave de masajes manuales que estimula el sistema linfático para eliminar toxinas, líquidos retenidos y mejorar sensiblemente la circulación",
            duracion: "60 minutos",
            sesiones: "Según evaluación (recomendado 1 o 2 veces por semana)",
            target: "Embarazadas, personas en etapa post-quirúrgica, con edemas o sensación constante de piernas pesadas"
        },
        descontracturante: {
            titulo: "Masaje Descontracturante Profundo",
            descripcion: "Masaje enfocado en zonas de alta tensión (cuello, hombros, espalda). Utiliza presiones profundas para deshacer nudos musculares y aliviar molestias físicas",
            duracion: "50 a 60 minutos",
            sesiones: "1 sesión semanal o según necesidad de dolor",
            target: "Personas con contracturas por estrés, mala postura o trabajo sedentario frente a computadoras"
        },
        dermapen: {
            titulo: "Dermapen & Microneedling Facial",
            descripcion: "Tratamiento de micro-punciones que estimula la producción natural de colágeno y elastina. Ayuda a atenuar cicatrices, manchas y aporta un brillo radiante",
            duracion: "60 minutos",
            sesiones: "3 a 6 sesiones (1 por mes)",
            target: "Personas con piel cansada, secuelas de acné, manchas de sol o líneas de expresión"
        },
        piedras: {
            titulo: "Masaje con Piedras Calientes",
            descripcion: "Terapia de relajación profunda utilizando piedras volcánicas calientes que transmiten temperatura a los músculos, disolviendo el estrés y la rigidez",
            duracion: "60 minutos",
            sesiones: "Ideal como mimo mensual o cuando sientas agotamiento",
            target: "Personas que buscan desconectar totalmente del estrés urbano y relajar tensiones profundas"
        },
        facial: {
            titulo: "Higiene Facial e Hidratación Profunda",
            descripcion: "Limpieza facial completa con exfoliación, extracción de impurezas, máscara descongestiva e hidratación con principios activos de primera calidad.",
            duracion: "60 minutos",
            sesiones: "1 vez al mes para mantenimiento",
            target: "Para todo tipo de piel que busque recuperar suavidad, pureza y luminosidad natural"
        }
    };

    // Control del Modal
    const modal = document.getElementById("serviceModal");
    const closeModal = document.getElementById("closeModal");

    document.querySelectorAll(".service-card").forEach(card => {
        card.addEventListener("click", () => {
            const key = card.dataset.service;
            const data = serviciosDetalle[key];

            if (data) {
                document.getElementById("modalTitle").textContent = data.titulo;
                document.getElementById("modalDescription").textContent = data.descripcion;
                document.getElementById("modalDuration").textContent = data.duracion;
                document.getElementById("modalSessions").textContent = data.sesiones;
                document.getElementById("modalTarget").textContent = data.target;

                modal.classList.remove("hidden");
            }
        });
    });

    closeModal.addEventListener("click", () => modal.classList.add("hidden"));
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });

    // -------------------------------------------------------------
    // 2. AGENDA DE TURNOS INTERACTIVA
    // -------------------------------------------------------------
    
    // 📌 AQUÍ DEFINÍS LOS TURNOS OCUPADOS (AÑO-MES-DÍA)
    const turnosOcupados = {
        "2026-07-28": ["09:00", "11:00", "15:00"],
        "2026-07-29": ["10:00", "14:00"]
    };

    const configHorarios = { inicio: 8, fin: 18 };

    let fechaSeleccionada = null;
    let horaSeleccionada = null;

    const dateContainer = document.getElementById("dateContainer");
    const slotsContainer = document.getElementById("slotsContainer");
    const bookingSummary = document.getElementById("bookingSummary");
    const summaryText = document.getElementById("summaryText");
    const btnSendWhatsapp = document.getElementById("btnSendWhatsapp");

    function renderDias() {
        const hoy = new Date();
        dateContainer.innerHTML = "";

        for (let i = 0; i < 10; i++) {
            const fecha = new Date();
            fecha.setDate(hoy.getDate() + i);

            const dateStr = fecha.toISOString().split("T")[0];
            const diaNombre = fecha.toLocaleDateString("es-AR", { weekday: "short" });
            const diaNum = fecha.getDate();

            const card = document.createElement("div");
            card.className = "date-card";
            card.innerHTML = `
                <div class="day-name">${diaNombre}</div>
                <div class="day-num">${diaNum}</div>
            `;

            card.addEventListener("click", () => {
                document.querySelectorAll(".date-card").forEach(c => c.classList.remove("active"));
                card.classList.add("active");
                fechaSeleccionada = dateStr;
                renderHorarios(dateStr);
            });

            dateContainer.appendChild(card);
        }
    }

    function renderHorarios(dateStr) {
        slotsContainer.innerHTML = "";
        horaSeleccionada = null;
        bookingSummary.classList.add("hidden");

        const ocupados = turnosOcupados[dateStr] || [];

        for (let h = configHorarios.inicio; h <= configHorarios.fin; h++) {
            const horaStr = `${h.toString().padStart(2, '0')}:00`;
            const isOcupado = ocupados.includes(horaStr);

            const btn = document.createElement("button");
            btn.className = `slot-btn ${isOcupado ? 'disabled' : ''}`;
            btn.textContent = horaStr;
            btn.disabled = isOcupado;

            if (!isOcupado) {
                btn.addEventListener("click", () => {
                    document.querySelectorAll(".slot-btn").forEach(s => s.classList.remove("selected"));
                    btn.classList.add("selected");
                    horaSeleccionada = horaStr;
                    actualizarResumen();
                });
            }

            slotsContainer.appendChild(btn);
        }
    }

    function actualizarResumen() {
        if (fechaSeleccionada && horaSeleccionada) {
            const [year, month, day] = fechaSeleccionada.split("-");
            summaryText.textContent = `${day}/${month}/${year} a las ${horaSeleccionada} hs`;
            bookingSummary.classList.remove("hidden");
        }
    }

    btnSendWhatsapp.addEventListener("click", () => {
        if (!fechaSeleccionada || !horaSeleccionada) return;

        const [year, month, day] = fechaSeleccionada.split("-");
        const telefono = "5491132194320"; // Reemplazar con el WhatsApp real de Natalia
        const mensaje = `Hola Natalia! Quisiera consultar la disponibilidad para reservar un turno el día ${day}/${month}/${year} a las ${horaSeleccionada} hs y que me indiques alias para realizar la seña. ¡Gracias!`;

        const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    });

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

    renderDias();
});