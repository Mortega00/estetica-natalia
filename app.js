document.addEventListener('DOMContentLoaded', () => {
  /* ==========================================
     DATOS DE TRATAMIENTOS Y COMBOS (Modales)
  ========================================== */
  const treatmentsData = {
    'dermapen': {
      title: 'Dermapen & Rutina Skincare Glow',
      category: 'Facial Especializado',
      pricing: '1 Sesión: $75.000 | Plan x5: $60.000/ses',
      desc: 'Tratamiento facial avanzado de microagujas estériles que estimula la síntesis de colágeno y elastina. Incluye principios activos puros (Vitamina C, Ácido Hialurónico concentrado, ampollas regenerativas y serums de alta gama) para un rejuvenecimiento visible con efecto GLOW radiante.',
      needs: 'Pieles opacas, con líneas de expresión, poros dilatados, secuelas de acné o envejecimiento cutáneo.',
      benefits: [
        'Estimula la renovación celular y la producción de colágeno natural',
        'Aporta luminosidad instantánea y empareja el tono cutáneo',
        'Atenúa poros abiertos, marcas y líneas de expresión finas',
        'Incluye cocktail nutritivo de Vitamina C y Ácido Hialurónico'
      ],
      care: 'Frecuencia recomendada: 1 vez por mes. No se ofrece plan x10 para cuidar los tiempos biológicos de regeneración cutánea.',
      singleLabel: 'Reservar 1 Sesión ($75.000)',
      singleValue: 'Dermapen & Rutina Skincare Glow (1 Sesión)',
      packLabel: 'Reservar Plan x5 ($60.000/ses)',
      packValue: 'Dermapen & Rutina Skincare Glow (Plan x5)'
    },
    'drenaje-linfatico': {
      title: 'Drenaje Linfático Manual',
      category: 'Corporal Terapéutico',
      pricing: '1 Sesión: $55.000 | Plan x10: $45.000/ses',
      desc: 'Técnica de masaje suave, preciso y rítmico que activa el sistema linfático superficial y profundo. Ideal para desinflamar tejidos, descongestionar, aliviar piernas cansadas y optimizar la recuperación en procesos posquirúrgicos o liposucción.',
      needs: 'Retención de líquidos, edemas, celulitis edematosa, posoperatorios y pesadez en extremidades.',
      benefits: [
        'Elimina líquidos retenidos y toxinas acumuladas',
        'Alivia inmediatamente la hinchazón y la sensación de pesadez',
        'Acelera la recuperación y cicatrización en posoperatorios',
        'Favorece la microcirculación y el descanso corporal'
      ],
      care: 'Para optimizar resultados en edemas o retención persistente se recomienda el Plan de 10 sesiones (1 a 2 veces por semana).',
      singleLabel: 'Reservar 1 Sesión ($55.000)',
      singleValue: 'Drenaje Linfático Manual (1 Sesión)',
      packLabel: 'Reservar Plan x10 ($45.000/ses)',
      packValue: 'Drenaje Linfático Manual (Plan x10)'
    },
    'drenaje-embarazo': {
      title: 'Drenaje Linfático x10 (Embarazo)',
      category: 'Corporal Maternidad',
      pricing: 'Plan x10: $45.000/ses ($450.000 total)',
      desc: 'Protocolo seguro, suave y especializado diseñado para futuras mamás (pre y post parto). Alivia la hinchazón en piernas, tobillos y pies, reduce la sobrecarga circulatoria y brinda un espacio de relajación y bienestar para la mamá y su bebé.',
      needs: 'Edema gestacional, piernas pesadas, retención de líquidos en embarazo y recuperación posparto.',
      benefits: [
        'Técnica 100% segura y adaptada a cada etapa de la gestación',
        'Descongestiona piernas, pies y tobillos inflamados',
        'Mejora el retorno venoso y linfático sin presiones invasivas',
        'Promueve la relajación y el descanso profundo'
      ],
      care: 'Requiere apto o consentimiento de tu médico obstetra de cabecera a partir del segundo trimestre.',
      packOnly: true,
      packLabel: 'Reservar Plan x10 ($45.000/ses)',
      packValue: 'Drenaje Linfático Embarazo (Plan x10)'
    },
    'masaje-descontracturante': {
      title: 'Masaje Descontracturante',
      category: 'Terapéutico & Alivio',
      pricing: '1 Sesión: $50.000 | Plan x10: $40.000/ses',
      desc: 'Terapia manual intensiva y focalizada que actúa sobre las fibras musculares profundas para disolver nudos, aliviar contracturas agudas o crónicas y devolver la flexibilidad a la espalda, cuello y hombros.',
      needs: 'Contracturas musculares, dolor cervical, dorsal o lumbar, y tensiones acumuladas por mala postura o estrés.',
      benefits: [
        'Disuelve tensiones y contracturas musculares profundas',
        'Aumenta la movilidad articular y relaja la columna',
        'Alivia dolores de cabeza tensionales y rigidez cervical',
        'Genera sensación inmediata de liviandad corporal'
      ],
      care: 'El Plan x10 permite un tratamiento progresivo que previene la reaparición de contracturas crónicas.',
      singleLabel: 'Reservar 1 Sesión ($50.000)',
      singleValue: 'Masaje Descontracturante (1 Sesión)',
      packLabel: 'Reservar Plan x10 ($40.000/ses)',
      packValue: 'Masaje Descontracturante (Plan x10)'
    },
    'piedras-calientes': {
      title: 'Masaje con Piedras Calientes',
      category: 'Geotermal & Relajación',
      pricing: '1 Sesión: $50.000 | Plan x10: $40.000/ses',
      desc: 'Tratamiento holístico y sensorial que combina maniobras de masaje terapéutico con la aplicación de piedras volcánicas de basalto a temperatura controlada, induciendo un estado de relajación física y mental profunda.',
      needs: 'Estrés elevado, agotamiento físico, insomnio, ansiedad o tensión muscular generalizada.',
      benefits: [
        'Efecto descontracturante natural por acción del calor geotermal',
        'Induce una relajación del sistema nervioso y mejora el sueño',
        'Estimula la circulación sanguínea y oxigenación celular',
        'Equilibra la energía corporal y disipa el cansancio acumulado'
      ],
      care: 'Recomendado como terapia desestresante mensual o en plan continuado de 10 sesiones.',
      singleLabel: 'Reservar 1 Sesión ($50.000)',
      singleValue: 'Masaje con Piedras Calientes (1 Sesión)',
      packLabel: 'Reservar Plan x10 ($40.000/ses)',
      packValue: 'Masaje con Piedras Calientes (Plan x10)'
    },
    'limpieza-profunda': {
      title: 'Limpieza Facial Profunda',
      category: 'Higiene & Salud Cutánea',
      pricing: '1 Sesión: $45.000',
      desc: 'Higiene facial exhaustiva y personalizada. Incluye desmaquillado, exfoliación adecuada a tu biotipo, extracción manual minuciosa de comedones/puntos negros, alta frecuencia bactericida y máscara descongestiva e hidratante.',
      needs: 'Puntos negros, impurezas, poros obstruidos, exceso de oleosidad o piel apagada.',
      benefits: [
        'Elimina células muertas e impurezas atrapadas en los poros',
        'Equilibra el pH y la secreción sebácea de la piel',
        'Prepara el rostro para absorber mejor tu rutina cosmética diaria',
        'Deja la piel visiblemente limpia, suave y oxigenada'
      ],
      care: 'Frecuencia aconsejada: 1 vez al mes. No se ofrece plan x10 para respetar la barrera lipídica y el recambio celular mensual.',
      singleOnly: true,
      singleLabel: 'Reservar Sesión ($45.000)',
      singleValue: 'Limpieza Facial Profunda (1 Sesión)'
    },
    'maderoterapia': {
      title: 'Maderoterapia + Drenaje x10',
      category: 'Modelado Corporal',
      pricing: 'Plan x10: $60.000/ses ($600.000 total)',
      desc: 'Tratamiento corporal reductivo y reafirmante que fusiona maniobras con elementos de madera de diseño anatómico y drenaje linfático manual. Trabaja activamente sobre la celulitis y el contorno corporal.',
      needs: 'Adiposidad localizada, celulitis compacta/fibrosa y flacidez corporal.',
      benefits: [
        'Ayuda a romper depósitos de grasa y alisar la celulitis',
        'Estimula la producción de colágeno y elastina dérmica',
        'Activa el drenaje de toxinas y líquidos retenidos',
        'Modela y tonifica glúteos, piernas, abdomen y flancos'
      ],
      care: 'No se comercializa por sesión individual: solo se realiza en Combo x10 con 2 sesiones semanales para garantizar resultados reales.',
      packOnly: true,
      packLabel: 'Reservar Plan x10 ($60.000/ses)',
      packValue: 'Combo: Maderoterapia + Drenaje x10 ($60.000)'
    },
    'depilacion-definitiva': {
      title: 'Depilación Definitiva (Jornada Estacional)',
      category: 'Promoción Estacional',
      pricing: 'Consultar Fechas & Zonas por WhatsApp',
      desc: 'Jornadas periódicas con tecnología de última generación para eliminación progresiva y duradera del vello en zonas faciales y corporales. Consultá el cronograma de fechas, zonas disponibles y promociones por paquete.',
      needs: 'Eliminación del vello no deseado, foliculitis e irritación por afeitado/cera.',
      benefits: [
        'Resultados progresivos y definitivos en pocas sesiones',
        'Apta para diferentes tipos de piel y zonas del cuerpo',
        'Elimina la foliculitis y mejora la textura cutánea',
        'Atención profesional y personalizada en gabinete privado'
      ],
      care: 'Servicio en fechas especiales programadas. Consultá disponibilidad para la próxima fecha directamente por WhatsApp.',
      isWhatsappOnly: true,
      whatsappUrl: 'https://wa.me/5491132194320?text=Hola%20Natalia,%20quisiera%20consultar%20por%20la%20próxima%20fecha%20de%20Depilación%20Definitiva'
    },
    'combo-1': {
      title: 'Combo: Descontracturante + Piedras + Reiki x10',
      category: 'Combo Exclusivo',
      pricing: 'Plan x10: $45.000/ses ($450.000 total)',
      desc: 'Máxima experiencia de bienestar integral. Combina 10 sesiones de masaje descontracturante muscular, la calidez de las piedras volcánicas y la armonización energética con Reiki.',
      needs: 'Agotamiento físico extremo, contracturas musculares crónicas y estrés emocional.',
      benefits: [
        'Ahorro destacado en paquete completo de 10 sesiones',
        'Alivio muscular profundo + calidez geotermal reconfortante',
        'Armonización energética integral con sesión de Reiki',
        'Tratamiento progresivo y personalizado'
      ],
      packOnly: true,
      packLabel: 'Reservar Combo x10 ($45.000/ses)',
      packValue: 'Combo: Descontracturante + Piedras + Reiki x10 ($45.000)'
    },
    'combo-2': {
      title: 'Combo: Drenaje + Ultrasonido x10',
      category: 'Post-Operatorio & Reducción',
      pricing: 'Plan x10: $45.000/ses ($450.000 total)',
      desc: 'Protocolo altamente recomendado para recuperación posquirúrgica (lipoescultura, dermolipectomía, cirugías plásticas) o tratamiento de celulitis y reducción corporal focalizada.',
      needs: 'Procesos posoperatorios, fibrosis, edemas severos y celulitis dura.',
      benefits: [
        'Acelera la desinflamación y previene la formación de fibrosis',
        'El ultrasonido estimula la reabsorción de líquidos y hematomas',
        'Mejora drásticamente los tiempos de recuperación médica',
        'Atención especializada con criterio kinésico y estético'
      ],
      packOnly: true,
      packLabel: 'Reservar Combo x10 ($45.000/ses)',
      packValue: 'Combo: Drenaje + Ultrasonido x10 ($45.000)'
    },
    'combo-3': {
      title: 'Combo: Drenaje + Descontracturante x10',
      category: 'Equilibrio Corporal 360°',
      pricing: 'Plan x10: $50.000/ses ($500.000 total)',
      desc: 'El balance ideal entre desinflamar el cuerpo y soltar tensiones musculares. 10 sesiones donde se alternan o combinan maniobras de drenaje linfático y masaje profundo según tu evolución.',
      needs: 'Piernas cansadas o retención combinada con dolor de espalda, cervicales o estrés.',
      benefits: [
        'Enfoque corporal integral: liviandad circulatoria y alivio muscular',
        'Tratamiento flexible adaptado a cómo llegás a cada sesión',
        'Mejora continua y sostenida del bienestar físico'
      ],
      packOnly: true,
      packLabel: 'Reservar Combo x10 ($50.000/ses)',
      packValue: 'Combo: Drenaje + Descontracturante x10 ($50.000)'
    },
    'combo-4': {
      title: 'Combo: Maderoterapia + Drenaje x10',
      category: 'Modelado Intensivo',
      pricing: 'Plan x10: $60.000/ses ($600.000 total)',
      desc: 'El plan estrella para modelar y reducir. 10 sesiones intensivas de maderoterapia combinadas con drenaje linfático manual para movilizar adiposidades y drenar toxinas activamente.',
      needs: 'Modelado de silueta, celulitis rebelde y tonificación de tejidos.',
      benefits: [
        'Maniobras específicas con instrumentos de madera anatómicos',
        'Drenaje inmediato de toxinas y líquidos removidos',
        'Planificación sugerida de 2 sesiones por semana para óptimo resultado'
      ],
      packOnly: true,
      packLabel: 'Reservar Combo x10 ($60.000/ses)',
      packValue: 'Combo: Maderoterapia + Drenaje x10 ($60.000)'
    },
    'combo-5': {
      title: 'Combo: Reflexología Manos + Pies x5',
      category: 'Terapia Holística 1 Hora',
      pricing: 'Plan x5: $30.000/ses ($150.000 total)',
      desc: 'Sesión integral de 1 hora completa de reflexología podal y palmar. A través de la presión en zonas reflejas, se estimula la autorregulación de órganos, se alivia el cansancio y se induce un bienestar total.',
      needs: 'Estrés, insomnio, fatiga, pies cansados y necesidad de desconexión profunda.',
      benefits: [
        '1 hora completa de terapia en manos y pies',
        'Estimula los puntos reflejos del cuerpo y calma el sistema nervioso',
        'Plan accesible de 5 sesiones para un respiro semanal'
      ],
      packOnly: true,
      packLabel: 'Reservar Plan x5 ($30.000/ses)',
      packValue: 'Combo: Reflexología Manos + Pies x5 ($30.000)'
    },
    'combo-6': {
      title: 'Combo: Masajes Deportivos x10 (Obra Social)',
      category: 'Rendimiento & Recuperación',
      pricing: 'Plan x10: $40.000/ses ($400.000 total)',
      desc: 'Terapia manual orientada a deportistas y personas con alta exigencia física. Optimiza la preparación muscular, previene sobrecargas y acelera la recuperación post-entrenamiento. Único servicio con opción de reintegro por obra social.',
      needs: 'Sobrecargas musculares, preparación previa a competencias o recuperación post esfuerzo.',
      benefits: [
        'Alivia fatiga y contracturas por entrenamiento intenso',
        'Previene lesiones musculares y mejora el rango articular',
        'Apto para trámite de reintegro con factura profesional según tu cobertura'
      ],
      care: 'Emitimos factura profesional para que puedas gestionar el reintegro en tu Obra Social o Prepaga según tu plan.',
      packOnly: true,
      packLabel: 'Reservar Plan x10 ($40.000/ses)',
      packValue: 'Combo: Masajes Deportivos x10 ($40.000)'
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
    if (!link.id.includes('btnSendWhatsappBooking') && !link.id.includes('whatsappFloat') && !link.id.includes('modalWhatsappBtn')) {
      const defaultMsg = encodeURIComponent('Hola Natalia! Me gustaría consultar por un turno.');
      link.href = `${WA_BASE_URL}?text=${defaultMsg}`;
      link.target = '_blank';
    }
  });

  // Listener para cerrar el globo flotante de WhatsApp
  const bubbleCloseBtn = document.getElementById('bubbleCloseBtn');
  const whatsappBubble = document.getElementById('whatsappBubble');
  if (bubbleCloseBtn && whatsappBubble) {
    bubbleCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappBubble.style.display = 'none';
    });
  }

  /* ==========================================
     2. NAVBAR & NAVEGACIÓN MOBILE (FIX SCROLL & CIERRE INMEDIATO)
  ========================================== */
  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileToggle');

  function closeMobileMenu() {
    if (navMenu) {
      navMenu.classList.remove('active');
    }
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.classList.remove('active');
    }
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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

  // Cierre inmediato en todos los enlaces de la navegación y scroll suave
  const allNavLinks = document.querySelectorAll('.nav a, a[href^="#"]');
  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      closeMobileMenu();
      let targetId = link.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.startsWith('http') || targetId.startsWith('wa.me')) return;
      if (targetId === '#reservar') {
        targetId = '#reserva';
      }
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
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

  function openModal(dataId) {
    const data = treatmentsData[dataId];
    if (!data || !treatmentModal) return;
    
    const mTitle = document.getElementById('modalTitle');
    const mDesc = document.getElementById('modalDesc');
    const mNeeds = document.getElementById('modalNeeds');
    const mBenefits = document.getElementById('modalBenefits');
    const mCategoryTag = document.getElementById('modalCategoryTag');
    const mPriceText = document.getElementById('modalPriceText');
    const mCareBox = document.getElementById('modalCareBox');
    const mCareText = document.getElementById('modalCareText');
    const mWhatsappBtn = document.getElementById('modalWhatsappBtn');
    
    if (mTitle) mTitle.textContent = data.title;
    if (mCategoryTag) mCategoryTag.textContent = data.category || 'Tratamiento';
    if (mPriceText) mPriceText.textContent = data.pricing || '';
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

    if (mCareBox && mCareText) {
      if (data.care) {
        mCareText.textContent = data.care;
        mCareBox.style.display = 'block';
      } else {
        mCareBox.style.display = 'none';
      }
    }

    // Configuración dinámica de botones
    if (data.isWhatsappOnly) {
      if (modalReserveSingleBtn) modalReserveSingleBtn.style.display = 'none';
      if (modalReservePackBtn) modalReservePackBtn.style.display = 'none';
      if (mWhatsappBtn) {
        mWhatsappBtn.classList.remove('hidden');
        mWhatsappBtn.style.display = 'inline-flex';
        mWhatsappBtn.href = data.whatsappUrl || `${WA_BASE_URL}?text=Hola%20Natalia,%20quisiera%20consultar%20por%20${encodeURIComponent(data.title)}`;
      }
    } else if (data.singleOnly) {
      if (mWhatsappBtn) mWhatsappBtn.style.display = 'none';
      if (modalReserveSingleBtn) {
        modalReserveSingleBtn.style.display = 'inline-flex';
        modalReserveSingleBtn.textContent = data.singleLabel || 'Reservar 1 Sesión';
        modalReserveSingleBtn.onclick = () => handleModalSelection(data.singleValue || data.title);
      }
      if (modalReservePackBtn) modalReservePackBtn.style.display = 'none';
    } else if (data.packOnly) {
      if (mWhatsappBtn) mWhatsappBtn.style.display = 'none';
      if (modalReserveSingleBtn) modalReserveSingleBtn.style.display = 'none';
      if (modalReservePackBtn) {
        modalReservePackBtn.style.display = 'inline-flex';
        modalReservePackBtn.textContent = data.packLabel || 'Reservar Plan';
        modalReservePackBtn.onclick = () => handleModalSelection(data.packValue || data.title);
      }
    } else {
      if (mWhatsappBtn) mWhatsappBtn.style.display = 'none';
      if (modalReserveSingleBtn) {
        modalReserveSingleBtn.style.display = 'inline-flex';
        modalReserveSingleBtn.textContent = data.singleLabel || 'Reservar 1 Sesión';
        modalReserveSingleBtn.onclick = () => handleModalSelection(data.singleValue || `${data.title} (1 Sesión)`);
      }
      if (modalReservePackBtn) {
        modalReservePackBtn.style.display = 'inline-flex';
        modalReservePackBtn.textContent = data.packLabel || 'Reservar Plan de Ahorro';
        modalReservePackBtn.onclick = () => handleModalSelection(data.packValue || `${data.title} (Plan x10)`);
      }
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

  function handleModalSelection(serviceToSelect) {
    closeModal();
    if (serviceToSelect) {
      selectServiceInSelect(serviceToSelect);
    }
    const reservaSec = document.getElementById('reserva') || document.getElementById('reservar');
    if (reservaSec) {
      reservaSec.scrollIntoView({ behavior: 'smooth' });
    }
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