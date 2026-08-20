document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================
     DATOS DE TRATAMIENTOS Y COMBOS (Modales)
  ========================================== */
  const treatmentsData = {
    'dermapen': {
      title: 'Dermapen & Nutrición',
      desc: 'Microagujas que estimulan la producción natural de colágeno, atenuando líneas de expresión, manchas y cicatrices.',
      needs: 'Pieles opacas, con manchas, cicatrices de acné o envejecimiento prematuro.',
      benefits: [
        'Estimula la producción natural de colágeno y elastina',
        'Mejora la textura, firmeza y luminosidad de la piel',
        'Reduce la apariencia de poros dilatados y finas líneas'
      ]
    },
    'drenaje-linfatico': {
      title: 'Drenaje Linfático Manual',
      desc: 'Técnica de masaje suave y rítmico que estimula el sistema linfático para eliminar toxinas, reducir la retención de líquidos y mejorar la circulación.',
      needs: 'Edemas, retención de líquidos, posoperatorios o pesadez en piernas.',
      benefits: [
        'Elimina el exceso de líquidos y toxinas',
        'Favorece la circulación sanguínea y linfática',
        'Produce un profundo efecto relajante y desintoxicante'
      ]
    },
    'masaje-descontracturante': {
      title: 'Masaje Descontracturante',
      desc: 'Terapia manual intensiva enfocada en liberar nudos y tensiones musculares acumuladas por estrés, malas posturas o esfuerzo físico.',
      needs: 'Dolores musculares, contracturas en espalda/cuello y estrés acumulado.',
      benefits: [
        'Alivia tensiones y dolores musculares severos',
        'Mejora la flexibilidad y movilidad',
        'Reduce el estrés físico y mental'
      ]
    },
    'piedras-calientes': {
      title: 'Masaje con Piedras Calientes',
      desc: 'Tratamiento geotermal que combina el masaje terapéutico con la aplicación de piedras de origen volcánico a temperaturas agradables.',
      needs: 'Tensión muscular profunda, insomnio, ansiedad o agotamiento general.',
      benefits: [
        'Relajación muscular profunda por termoterapia',
        'Mejora el flujo de energía y reduce el estrés',
        'Promueve un descanso reparador'
      ]
    },
    'limpieza-profunda': {
      title: 'Limpieza Facial Profunda',
      desc: 'Higiene facial completa con extracción de impurezas, exfoliación, alta frecuencia y mascarilla descongestiva adaptada a tu biotipo cutáneo.',
      needs: 'Pieles con puntos negros, impurezas, exceso de sebo o falta de luminosidad.',
      benefits: [
        'Remueve células muertas e impurezas profundas',
        'Equilibra la producción de grasa',
        'Deja la piel limpia, suave y luminosa'
      ]
    },
    'maderoterapia': {
      title: 'Maderoterapia Corporal',
      desc: 'Técnica holística de modelado corporal utilizando instrumentos de madera anatómicamente diseñados para reafirmar y moldear la figura.',
      needs: 'Adiposidad localizada, celulitis y flacidez corporal.',
      benefits: [
        'Redefine el contorno corporal y combate la celulitis',
        'Tonifica el tejido cutáneo y muscular',
        'Estimula el drenaje de grasas'
      ]
    },
    'combo-1': {
      title: 'Combo 1: 10 Sesiones Descontracturante + Piedras',
      desc: 'Tratamiento integral enfocado en la relajación profunda del tono muscular y la descontractura profunda.',
      needs: 'Estrés muscular crónico y necesidad de alivio corporal completo.',
      benefits: [
        'Mayor aprovechamiento económico por paquete de 10 sesiones',
        'Combinación de técnicas manuales y termoterapia volcánica',
        'Seguimiento progresivo del tono muscular'
      ]
    },
    'combo-2': {
      title: 'Combo 2: 10 Sesiones Drenaje Linfático',
      desc: 'Ciclo completo para la estimulación de la circulación linfática, reducción de retención de líquidos y toxinas.',
      needs: 'Retención de líquidos sostenida, celulitis edematosa o piernas cansadas.',
      benefits: [
        'Tratamiento continuado de desintoxicación corporal',
        'Resultados visibles y duraderos en modelado y liviandad',
        'Planificación personalizada de sesiones'
      ]
    },
    'combo-3': {
      title: 'Combo 3: 10 Sesiones Drenaje + Descontracturante',
      desc: 'Combinación intensiva de alivio muscular y desinflamación corporal distribuida en 10 sesiones.',
      needs: 'Tensión muscular combinada con inflamación o retención de líquidos.',
      benefits: [
        'Enfoque 360° en bienestar físico y muscular',
        'Alternancia o combinación de sesiones según necesidad',
        'Atención personalizada adaptada a tu evolución'
      ]
    },
    'combo-4': {
      title: 'Combo 4: Facial Completo Premium',
      desc: 'Incluye Dermapen, Radiofrecuencia, Punta de Diamante y Limpieza Facial Hidratante.',
      needs: 'Renovación cutánea profunda, efecto glow e higiene facial exhaustiva.',
      benefits: [
        'Integración de las 4 aparatologías faciales más efectivas',
        'Efecto rejuvenecedor y tensor inmediato',
        'Piel completamente renovada e hidratada'
      ]
    }
  };

  /* ==========================================
     1. WHATSAPP & CONFIGURACIÓN OFICIAL
  ========================================== */
  const WA_PHONE = '5491132194320';
  const WA_BASE_URL = `https://wa.me/${WA_PHONE}`;
  const whatsappFloat = document.getElementById('whatsappFloat');
  if (whatsappFloat) {
    const floatMsg = encodeURIComponent('Hola Natalia, quisiera recibir asesoramiento personalizado.');
    whatsappFloat.href = `${WA_BASE_URL}?text=${floatMsg}`;
    whatsappFloat.target = '_blank';
  }
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    if (!link.id.includes('btnSendWhatsappBooking') && !link.id.includes('whatsappFloat')) {
      const defaultMsg = encodeURIComponent('Hola Natalia! Me gustaría consultar por un turno.');
      link.href = `${WA_BASE_URL}?text=${defaultMsg}`;
      link.target = '_blank';
    }
  });

  /* ==========================================
     2. NAVBAR & NAVEGACIÓN MOBILE (#reservar -> #reserva)
  ========================================== */
  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileToggle');
  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      if (mobileToggle) {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.classList.remove('active');
      }
      document.body.style.overflow = '';
    }
  }
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        closeMobileMenu();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  const allNavLinks = document.querySelectorAll('a[href^="#"]');
  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      let targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;
      if (targetId === '#reservar') {
        targetId = '#reserva';
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        closeMobileMenu();
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ==========================================
   3. MODAL DE TRATAMIENTOS Y COMBOS
========================================== */
const treatmentModal = document.getElementById('treatmentModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalReserveSingleBtn = document.getElementById('modalReserveSingleBtn');
const modalReservePackBtn = document.getElementById('modalReservePackBtn');
let currentSelectedModalTreatment = '';

function openModal(dataId) {
  const data = treatmentsData[dataId];
  if (!data || !treatmentModal) return;
  
  currentSelectedModalTreatment = data.title;
  
  const mTitle = document.getElementById('modalTitle');
  const mDesc = document.getElementById('modalDesc');
  const mNeeds = document.getElementById('modalNeeds');
  const mBenefits = document.getElementById('modalBenefits');
  
  if (mTitle) mTitle.textContent = data.title;
  if (mDesc) mDesc.textContent = data.desc;
  if (mNeeds) mNeeds.textContent = data.needs;
  if (mBenefits) {
    mBenefits.innerHTML = '';
    data.benefits.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      mBenefits.appendChild(li);
    });
  }

  // Si abren un combo exclusivo, ocultamos el botón de 1 sesión para evitar confusiones
  if (dataId.startsWith('combo')) {
    if (modalReserveSingleBtn) modalReserveSingleBtn.style.display = 'none';
    if (modalReservePackBtn) modalReservePackBtn.textContent = 'Reservar Combo';
  } else {
    if (modalReserveSingleBtn) modalReserveSingleBtn.style.display = 'block';
    if (modalReservePackBtn) modalReservePackBtn.textContent = 'Reservar Plan x10 (Ahorro)';
  }

  treatmentModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (treatmentModal) {
    treatmentModal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

const serviceCards = document.querySelectorAll('.service-card, .combo-card');
serviceCards.forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.select-combo-btn')) return;
    const dataId = card.getAttribute('data-id');
    if (dataId) {
      openModal(dataId);
    }
  });
});

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (treatmentModal) {
  treatmentModal.addEventListener('click', (e) => {
    if (e.target === treatmentModal) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && treatmentModal && treatmentModal.classList.contains('active')) {
    closeModal();
  }
});

// Función auxiliar para cerrar modal, seleccionar opción y scrollear
function handleModalSelection(suffix) {
  closeModal();
  if (currentSelectedModalTreatment) {
    // Si la función selectServiceInSelect existe, la ejecutamos
    if (typeof selectServiceInSelect === 'function') {
      const serviceToSelect = suffix ? `${currentSelectedModalTreatment} ${suffix}` : currentSelectedModalTreatment;
      
      // Intentamos seleccionar exacto; si no encuentra la opción con sufijo, selecciona el título base
      const selectElem = document.getElementById('serviceSelect') || document.querySelector('select');
      if (selectElem) {
        let optionExists = Array.from(selectElem.options).some(opt => opt.value.includes(serviceToSelect) || opt.text.includes(serviceToSelect));
        if (optionExists) {
          selectServiceInSelect(serviceToSelect);
        } else {
          selectServiceInSelect(currentSelectedModalTreatment);
        }
      } else {
        selectServiceInSelect(currentSelectedModalTreatment);
      }
    }
  }
  
  const reservaSec = document.getElementById('reserva') || document.getElementById('reservar');
  if (reservaSec) {
    reservaSec.scrollIntoView({ behavior: 'smooth' });
  }
}

// Eventos para los dos botones
if (modalReserveSingleBtn) {
  modalReserveSingleBtn.addEventListener('click', () => handleModalSelection('(1 Sesión)'));
}

if (modalReservePackBtn) {
  modalReservePackBtn.addEventListener('click', () => handleModalSelection('(Plan x10)'));
}

  /* ==========================================
   4. SELECCIÓN DE SERVICIOS Y COMBOS EN EL SELECT
========================================== */
const selectService = document.getElementById('selectService');

function selectServiceInSelect(serviceName) {
  if (!selectService || !serviceName) return;
  const target = serviceName.toLowerCase().trim();
  let matchedIndex = -1;

  // 1. Intentar coincidencia exacta o directa de valor/texto
  for (let i = 0; i < selectService.options.length; i++) {
    const opt = selectService.options[i];
    const optVal = opt.value.toLowerCase().trim();
    const optText = opt.text.toLowerCase().trim();

    if (optVal === target || optText === target) {
      matchedIndex = i;
      break;
    }
  }

  // 2. Si no hubo coincidencia exacta, buscar si la opción contiene la cadena completa
  if (matchedIndex === -1) {
    for (let i = 0; i < selectService.options.length; i++) {
      const opt = selectService.options[i];
      const optVal = opt.value.toLowerCase().trim();
      const optText = opt.text.toLowerCase().trim();

      if (optVal.includes(target) || optText.includes(target)) {
        matchedIndex = i;
        break;
      }
    }
  }

  // 3. Búsqueda por el título base del servicio (por si el nombre en el modal difiere un poco)
  if (matchedIndex === -1) {
    const baseName = target.replace('(1 sesión)', '').replace('(plan x10)', '').replace('(60 min)', '').trim();
    for (let i = 0; i < selectService.options.length; i++) {
      const opt = selectService.options[i];
      const optVal = opt.value.toLowerCase().trim();
      const optText = opt.text.toLowerCase().trim();

      if ((optVal.includes(baseName) || optText.includes(baseName)) && optVal !== '') {
        matchedIndex = i;
        break;
      }
    }
  }

  // Aplicar selección y disparar evento de cambio si se encontró una opción
  if (matchedIndex !== -1) {
    selectService.selectedIndex = matchedIndex;
    selectService.dispatchEvent(new Event('change'));
  }
}

const comboButtons = document.querySelectorAll('.select-combo-btn');
comboButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    let comboName = btn.getAttribute('data-service');
    if (!comboName) {
      const comboCard = btn.closest('.combo-card');
      if (comboCard) {
        const h3 = comboCard.querySelector('h3');
        if (h3) comboName = h3.textContent;
      }
    }
    if (comboName) selectServiceInSelect(comboName);
    const reservaSec = document.getElementById('reserva') || document.getElementById('reservar');
    if (reservaSec) {
      reservaSec.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

  /* ==========================================
     5. CALENDARIO & HORARIOS
  ========================================== */
  const APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbydHGUBKZQup_Xg1-D4_DSWgWMtzjLaK0Vp3WrLdlLsgIPCmTJV2DnQd--8_P1BMPS9/exec';
  let selectedDate = null;
  let selectedTime = null;

  const today = new Date();
  let currentCalMonth = today.getMonth();
  let currentCalYear = today.getFullYear();
  const calMonthTitle = document.getElementById('calMonthTitle');
  const calDaysGrid = document.getElementById('calDaysGrid');
  const timeGrid = document.querySelector('.time-grid');
  const prevMonthBtn = document.getElementById('prevMonthBtn');
  const nextMonthBtn = document.getElementById('nextMonthBtn');
  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Helper para verificar si un turno específico (fecha + hora) está a 24 horas o más en el futuro
  function isSlotAvailable24Hs(dateObj, hourNum) {
    if (!dateObj) return false;
    const now = new Date();
    const minAllowedTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // AHORA + 24 HORAS
    
    // Crear el objeto Date exacto del turno (por ejemplo: fecha X a las 17:00:00)
    const slotDateTime = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), hourNum, 0, 0, 0);
    
    return slotDateTime >= minAllowedTime;
  }

  // Helper para verificar si un día completo tiene al menos 1 horario disponible
  function hasAvailableSlotsInDay(dateObj) {
    const isSunday = (dateObj.getDay() === 0);
    if (isSunday) return false;

    const startHour = 8;
    const endHour = 20;

    for (let hour = startHour; hour <= endHour; hour++) {
      if (isSlotAvailable24Hs(dateObj, hour)) {
        return true; // Al menos un horario supera las 24 horas
      }
    }
    return false;
  }

  async function renderTimeSlot() {
  if (!timeGrid) return;

  timeGrid.innerHTML = '';
  selectedTime = null;

  if (!selectedDate) return;

  const startHour = 8;
  const endHour = 20;

  // ==========================================
  // FECHA EN FORMATO YYYY-MM-DD
  // ==========================================
  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
  const day = String(selectedDate.getDate()).padStart(2, '0');
  const dateString = `${year}-${month}-${day}`;

  // ==========================================
  // MENSAJE DE CARGA
  // ==========================================
  const loadingMessage = document.createElement('div');
  loadingMessage.classList.add('time-loading');
  loadingMessage.textContent = 'Consultando horarios disponibles...';
  loadingMessage.style.gridColumn = '1 / -1';
  loadingMessage.style.textAlign = 'center';
  loadingMessage.style.padding = '20px';
  timeGrid.appendChild(loadingMessage);

  try {
    // ==========================================
    // CONSULTAR GOOGLE APPS SCRIPT
    // ==========================================
    const response = await fetch(
  `${APP_SCRIPT_URL}?action=disponibilidad&fecha=${encodeURIComponent(dateString)}`
);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    // ==========================================
    // VALIDAR RESPUESTA
    // ==========================================
    if (!data || data.ok !== true || !Array.isArray(data.disponibles)) {
      throw new Error('Respuesta inválida del servidor.');
    }

    // Convertimos disponibles a Set para
    // realizar búsquedas más rápidas
    const availableTimes = new Set(
      data.disponibles.map(time => String(time).trim())
    );

    // ==========================================
    // RENDERIZAR HORARIOS
    // ==========================================
    timeGrid.innerHTML = '';

    for (let hour = startHour; hour <= endHour; hour++) {
      const timeString = `${String(hour).padStart(2, '0')}:00`;

      const chip = document.createElement('div');
      chip.classList.add('time-chip');
      chip.setAttribute('data-time', timeString);
      chip.textContent = `${timeString} hs`;

      // ==========================================
      // NIVEL 1:
      // ¿EL HORARIO ESTÁ DISPONIBLE EN APPS SCRIPT?
      // ==========================================
      const isAvailableFromServer = availableTimes.has(timeString);

      // ==========================================
      // NIVEL 2:
      // ¿CUMPLE LAS 24 HORAS DE ANTICIPACIÓN?
      // ==========================================
      const isValid24Hs = isSlotAvailable24Hs(selectedDate, hour);

      // ==========================================
      // HORARIO FINALMENTE DISPONIBLE
      // ==========================================
      const isAvailable = isAvailableFromServer && isValid24Hs;

      if (!isAvailable) {
        chip.classList.add('disabled');
        chip.style.opacity = '0.35';
        chip.style.cursor = 'not-allowed';
        chip.style.pointerEvents = 'none';

        // Si está ocupado, dejamos indicado internamente
        if (!isAvailableFromServer) {
          chip.setAttribute('data-status', 'ocupado');
        } else if (!isValid24Hs) {
          chip.setAttribute('data-status', 'menos-de-24hs');
        }
      } else {
        chip.setAttribute('data-status', 'disponible');

        chip.addEventListener('click', () => {
          document
            .querySelectorAll('.time-chip')
            .forEach(c => c.classList.remove('selected'));

          chip.classList.add('selected');
          selectedTime = timeString;
          
          if (typeof selectedTimeSlot !== 'undefined') {
            selectedTimeSlot = timeString;
          }
        });
      }

      timeGrid.appendChild(chip);
    }

  } catch (error) {
    console.error('Error al consultar disponibilidad:', error);

    // ==========================================
    // ERROR DE CONEXIÓN
    // ==========================================
    timeGrid.innerHTML = '';

    const errorMessage = document.createElement('div');
    errorMessage.classList.add('time-error');
    errorMessage.textContent =
      'No pudimos consultar los horarios disponibles. Por favor, intentá nuevamente.';
    errorMessage.style.gridColumn = '1 / -1';
    errorMessage.style.textAlign = 'center';
    errorMessage.style.padding = '20px';

    timeGrid.appendChild(errorMessage);
  }
}

  function renderCalendar() {
    if (!calDaysGrid || !calMonthTitle) return;
    calMonthTitle.textContent = `${monthNames[currentCalMonth]} ${currentCalYear}`;
    calDaysGrid.innerHTML = '';
    const firstDayOfMonth = new Date(currentCalYear, currentCalMonth, 1);
    const daysInMonth = new Date(currentCalYear, currentCalMonth + 1, 0).getDate();
    let startingDay = firstDayOfMonth.getDay() - 1;
    if (startingDay === -1) startingDay = 6;

    for (let i = 0; i < startingDay; i++) {
      const emptyCell = document.createElement('div');
      emptyCell.classList.add('cal-day', 'disabled', 'empty');
      calDaysGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayCell = document.createElement('div');
      dayCell.classList.add('cal-day');
      dayCell.textContent = day;
      const dateObj = new Date(currentCalYear, currentCalMonth, day);

      // Evaluación a NIVEL 1 (CALENDARIO)
      const hasSlots = hasAvailableSlotsInDay(dateObj);

      if (!hasSlots) {
        dayCell.classList.add('disabled');
      } else {
        if (selectedDate &&
            selectedDate.getFullYear() === currentCalYear &&
            selectedDate.getMonth() === currentCalMonth &&
            selectedDate.getDate() === day) {
          dayCell.classList.add('selected');
        }
        dayCell.addEventListener('click', () => {
          document.querySelectorAll('.cal-day').forEach(cell => cell.classList.remove('selected'));
          dayCell.classList.add('selected');
          selectedDate = new Date(currentCalYear, currentCalMonth, day);
          renderTimeSlot();
        });
      }
      calDaysGrid.appendChild(dayCell);
    }
    renderTimeSlot();
  }

  if (prevMonthBtn) {
    prevMonthBtn.addEventListener('click', () => {
      currentCalMonth--;
      if (currentCalMonth < 0) {
        currentCalMonth = 11;
        currentCalYear--;
      }
      renderCalendar();
    });
  }
  if (nextMonthBtn) {
    nextMonthBtn.addEventListener('click', () => {
      currentCalMonth++;
      if (currentCalMonth > 11) {
        currentCalMonth = 0;
        currentCalYear++;
      }
      renderCalendar();
    });
  }
  renderCalendar();

  /* ==========================================
     6. BOTÓN COPIAR ALIAS
  ========================================== */
  const btnCopyAlias = document.getElementById('btnCopyAlias');
  if (btnCopyAlias) {
    btnCopyAlias.addEventListener('click', () => {
      const aliasText = document.getElementById('aliasText');
      if (aliasText) {
        navigator.clipboard.writeText(aliasText.textContent.trim()).then(() => {
          btnCopyAlias.innerHTML = '<i class="fa-solid fa-check"></i> ¡Copiado!';
          setTimeout(() => {
            btnCopyAlias.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
          }, 2000);
        });
      }
    });
  }

  /* ==========================================
     7. WIZARD DE RESERVA (4 PASOS)
  ========================================== */
  let currentStep = 1;
  const totalSteps = 4;
  const btnNextStep = document.getElementById('btnNextStep');
  const btnBackStep = document.getElementById('btnBackStep');
  const custName = document.getElementById('custName');
  const custPhone = document.getElementById('custPhone');
  const custNotes = document.getElementById('custNotes');

  function validatePhone(phone) {
    const clean = phone.replace(/[\s\-\+\(\)]/g, '');
    return /^\d{8,15}$/.test(clean);
  }

  function formatDate(date) {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Validación estricta de 24 hs previas considerando la combinación de fecha y hora elegidas
  function isMoreThan24HoursAhead(dateObj, timeStr) {
    if (!dateObj || !timeStr) return false;
    const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})/);
    if (!timeMatch) return false;

    const hours = parseInt(timeMatch[1], 10);
    const minutes = parseInt(timeMatch[2], 10);

    const bookingDateTime = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), hours, minutes, 0);
    const now = new Date();
    const diffMs = bookingDateTime.getTime() - now.getTime();
    const hoursDiff = diffMs / (1000 * 60 * 60);

    return hoursDiff >= 24;
  }

  function updateWizardIndicator() {
    const stepIndicators = document.querySelectorAll('.step-item, .wizard-step');
    stepIndicators.forEach((ind, idx) => {
      const stepNum = idx + 1;
      ind.classList.remove('active', 'completed');
      if (stepNum === currentStep) {
        ind.classList.add('active');
      } else if (stepNum < currentStep) {
        ind.classList.add('completed');
      }
    });
  }

  function updateWizard() {
    for (let i = 1; i <= totalSteps; i++) {
      const pane = document.getElementById(`stepPane${i}`);
      if (pane) {
        if (i === currentStep) {
          pane.classList.remove('hidden');
          pane.classList.add('active');
        } else {
          pane.classList.add('hidden');
          pane.classList.remove('active');
        }
      }
    }
    if (btnBackStep) {
      if (currentStep === 1) {
        btnBackStep.classList.add('hidden');
      } else {
        btnBackStep.classList.remove('hidden');
      }
    }
    if (btnNextStep) {
      if (currentStep === totalSteps) {
        btnNextStep.textContent = 'Confirmar Reserva';
      } else {
        btnNextStep.textContent = 'Siguiente paso';
      }
    }
    updateWizardIndicator();
  }

  if (btnNextStep) {
    btnNextStep.addEventListener('click', () => {
      if (currentStep === 1) {
        if (!selectService || !selectService.value || selectService.value === '') {
          alert('Por favor selecciona un tratamiento o combo para continuar.');
          if (selectService) selectService.focus();
          return;
        }
      }
      if (currentStep === 2) {
        if (!selectedDate || !selectedTime) {
          alert('Seleccioná una fecha y un horario antes de continuar.');
          return;
        }

        // Re-evaluación en tiempo real antes de avanzar al paso 3
        const hourNum = parseInt(selectedTime.split(':')[0], 10);
        if (!isSlotAvailable24Hs(selectedDate, hourNum)) {
          alert('Para poder agendar el turno online y abonar la seña, la reserva debe hacerse con al menos 24 horas de anticipación desde este momento. Por favor, seleccioná otra fecha u horario.');
          renderCalendar(); // Refresca el calendario con la hora actualizada
          return;
        }
      }
      if (currentStep === 3) {
        if (!custName || !custName.value.trim() || custName.value.trim().length < 3) {
          alert('Por favor ingresá tu nombre completo (mínimo 3 caracteres).');
          if (custName) custName.focus();
          return;
        }
        if (!custPhone || !custPhone.value.trim() || !validatePhone(custPhone.value.trim())) {
          alert('Por favor ingresá un número de WhatsApp / Teléfono válido.');
          if (custPhone) custPhone.focus();
          return;
        }
      }
      if (currentStep < totalSteps) {
        currentStep++;
        if (currentStep === 4) {
          const formattedDate = formatDate(selectedDate);
          const sumService = document.getElementById('sumService');
          const sumDate = document.getElementById('sumDate');
          const sumTime = document.getElementById('sumTime');
          const sumName = document.getElementById('sumName');
          const sumPhone = document.getElementById('sumPhone');
          if (sumService) sumService.textContent = selectService.options[selectService.selectedIndex].text || selectService.value;
          if (sumDate) sumDate.textContent = formattedDate;
          if (sumTime) sumTime.textContent = selectedTime;
          if (sumName) sumName.textContent = custName.value.trim();
          if (sumPhone) sumPhone.textContent = custPhone.value.trim();
        }
        updateWizard();
      } else if (currentStep === totalSteps) {
        showConfirmationCard();
      }
    });
  }

  if (btnBackStep) {
    btnBackStep.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizard();
      }
    });
  }

  /* ==========================================
     8. CONFIRMACIÓN, TIMER & MENSAJE DE WHATSAPP
  ========================================== */
  let timerInterval = null;
  function startTimer() {
    const timerCount = document.getElementById('timerCount');
    if (!timerCount) return;
    if (timerInterval) clearInterval(timerInterval);
    let totalSeconds = 15 * 60;
    function updateTimerDisplay() {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      timerCount.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(timerInterval);
        timerCount.textContent = '00:00';
      }
    }, 1000);
  }

async function showConfirmationCard() {
    const wizardActions = document.querySelector('.wizard-actions');
    const stepPane4 = document.getElementById('stepPane4');
    const confirmationCard = document.getElementById('confirmationCard');

    if (wizardActions) wizardActions.classList.add('hidden');
    if (stepPane4) stepPane4.classList.add('hidden');

    // ==========================================
    // 1. FORMATO DE FECHA
    // ==========================================

    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');

    const isoDate = `${year}-${month}-${day}`;

    // Formato visible para la interfaz
    const formattedDate = formatDate(selectedDate);

    // ==========================================
    // 2. DATOS DEL FORMULARIO
    // ==========================================

    const commentsText =
      (custNotes && custNotes.value.trim())
        ? custNotes.value.trim()
        : 'Sin comentarios';

    const serviceSelectedText =
      selectService.options[selectService.selectedIndex].text ||
      selectService.value;

    const reservaData = {
      action: 'crearReserva',
      fecha: isoDate,
      hora: selectedTime,
      tratamiento: serviceSelectedText,
      nombre: custName.value.trim(),
      whatsapp: custPhone.value.trim(),
      observaciones: commentsText
    };

    // ==========================================
    // 3. MOSTRAR EN CONSOLA LO QUE VAMOS A ENVIAR
    // ==========================================

    console.log('==========================================');
    console.log('ENVIANDO RESERVA A GOOGLE APPS SCRIPT');
    console.log('==========================================');

    console.log('URL:', APP_SCRIPT_URL);
    console.log('DATOS DE LA RESERVA:', reservaData);

    // ==========================================
    // 3.5. VERIFICACIÓN ANTI-BOT (HONEYPOT)
    // ==========================================

    const honeypot = document.getElementById('website_hp');
    if (honeypot && honeypot.value.trim() !== '') {
      console.warn('🤖 Bot detectado. La reserva no se enviará a Google Sheets.');
      if (confirmationCard) confirmationCard.classList.remove('hidden');
      startTimer();
      return;
    }

    // ==========================================
    // 4. ENVÍO DE DATOS A GOOGLE SHEETS (POST)
    // ==========================================

    try {

      const response = await fetch(APP_SCRIPT_URL, {
        method: 'POST',

        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },

        body: JSON.stringify(reservaData)
      });

      // ==========================================
      // 5. VERIFICAR RESPUESTA HTTP
      // ==========================================

      console.log('RESPUESTA HTTP DE APPS SCRIPT:', response.status);

      if (!response.ok) {
        throw new Error(
          `Error HTTP ${response.status}`
        );
      }

      // ==========================================
      // 6. LEER RESPUESTA JSON
      // ==========================================

      const data = await response.json();

      console.log('==========================================');
      console.log('RESPUESTA COMPLETA DE GOOGLE APPS SCRIPT');
      console.log('==========================================');

      console.log(data);

      // ==========================================
      // 7. ANALIZAR RESPUESTA
      // ==========================================

      if (data.ok) {

        console.log('✅ RESERVA REGISTRADA CON ÉXITO');
        console.log('ID GENERADO:', data.id);
        console.log('FECHA:', data.fecha);
        console.log('HORA:', data.hora);
        console.log('ESTADO:', data.estado);

      } else {

        console.error(
          '❌ APPS SCRIPT RECHAZÓ LA RESERVA'
        );

        console.error(
          'Mensaje:',
          data.mensaje || data.error
        );

      }

    } catch (err) {

      console.error(
        '❌ ERROR AL REGISTRAR EL TURNO EN GOOGLE SHEETS'
      );

      console.error(
        'Detalle del error:',
        err
      );

    }

    // ==========================================
    // 8. RENDERIZAR TARJETA DE CONFIRMACIÓN
    // ==========================================

    if (confirmationCard) {

      confirmationCard.classList.remove('hidden');

      const resumenServicio =
        document.getElementById('resumenServicio');

      const resumenFecha =
        document.getElementById('resumenFecha');

      const resumenHora =
        document.getElementById('resumenHora');

      const resumenNombre =
        document.getElementById('resumenNombre');

      const resumenTel =
        document.getElementById('resumenTel');

      if (resumenServicio) {
        resumenServicio.textContent =
          serviceSelectedText;
      }

      if (resumenFecha) {
        resumenFecha.textContent =
          formattedDate;
      }

      if (resumenHora) {
        resumenHora.textContent =
          selectedTime;
      }

      if (resumenNombre) {
        resumenNombre.textContent =
          custName.value.trim();
      }

      if (resumenTel) {
        resumenTel.textContent =
          custPhone.value.trim();
      }

      // ==========================================
      // 9. MENSAJE DE WHATSAPP
      // ==========================================

      const message =
        `Hola Natalia! Quisiera reservar un turno.\n\n` +

        `✨ Tratamiento:\n${serviceSelectedText}\n\n` +

        `📅 Fecha:\n${formattedDate}\n\n` +

        `⏰ Horario:\n${selectedTime} Hs\n\n` +

        `👤 Nombre:\n${custName.value.trim()}\n\n` +

        `📱 WhatsApp:\n${custPhone.value.trim()}\n\n` +

        `📝 Comentarios:\n${commentsText}\n\n` +

        `💸 Adjunto el comprobante de la seña ($20.000) abonado al Alias: natali1977.`;

      const btnSendWhatsappBooking =
        document.getElementById(
          'btnSendWhatsappBooking'
        );

      if (btnSendWhatsappBooking) {

        btnSendWhatsappBooking.href =
          `${WA_BASE_URL}?text=${encodeURIComponent(message)}`;

        btnSendWhatsappBooking.target =
          '_blank';

      }

      // ==========================================
      // 10. INICIAR TIMER
      // ==========================================

      startTimer();

    }
  }

  /* ==========================================
     11. CARRUSEL DE TESTIMONIOS
  ========================================== */
  const testimonialsCarousel = document.getElementById('testimonialsCarousel');
  const prevReviewBtn = document.getElementById('prevReviewBtn');
  const nextReviewBtn = document.getElementById('nextReviewBtn');
  if (testimonialsCarousel && prevReviewBtn && nextReviewBtn) {
    prevReviewBtn.addEventListener('click', () => {
      testimonialsCarousel.scrollBy({ left: -320, behavior: 'smooth' });
    });
    nextReviewBtn.addEventListener('click', () => {
      testimonialsCarousel.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  /* ==========================================
     12. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
  ========================================== */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherIcon) otherIcon.textContent = '+';
        });
        if (!isOpen) {
          item.classList.add('active');
          if (icon) icon.textContent = '−';
        }
      });
    }
  });
});