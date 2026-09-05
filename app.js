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
      singleValue: 'Dermapen + Rutina Skincare Glow — 1 Sesión',
      packLabel: 'Reservar Plan x5 ($60.000/ses)',
      packValue: 'Dermapen + Rutina Skincare Glow — Plan x5'
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
      singleValue: 'Drenaje Linfático Manual — 1 Sesión',
      packLabel: 'Reservar Plan x10 ($45.000/ses)',
      packValue: 'Drenaje Linfático Manual — Plan x10'
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
      packValue: 'Drenaje Linfático Embarazo — Plan x10'
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
      singleValue: 'Masaje Descontracturante — 1 Sesión',
      packLabel: 'Reservar Plan x10 ($40.000/ses)',
      packValue: 'Masaje Descontracturante — Plan x10'
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
      singleValue: 'Masaje con Piedras Calientes — 1 Sesión',
      packLabel: 'Reservar Plan x10 ($40.000/ses)',
      packValue: 'Masaje con Piedras Calientes — Plan x10'
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
      singleValue: 'Limpieza Facial Profunda — 1 Sesión'
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
      packValue: 'Combo: Maderoterapia + Drenaje x10'
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
      whatsappUrl: 'https://wa.me/5491132194320?text=Hola%20Natalia%2C%20vi%20la%20publicaci%C3%B3n%20de%20Depilaci%C3%B3n%20Definitiva%20y%20quer%C3%ADa%20consultar%20por%20disponibilidad%2C%20turnos%20y%20precios'
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
      packValue: 'Combo: Descontracturante + Piedras + Reiki x10'
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
      packValue: 'Combo: Drenaje + Ultrasonido x10'
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
      packValue: 'Combo: Drenaje + Descontracturante x10'
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
      packValue: 'Combo: Maderoterapia + Drenaje x10'
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
      packValue: 'Combo: Reflexología Manos + Pies x5'
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
      packValue: 'Combo: Masajes Deportivos x10'
    }
  };

  const promo15Prices = {
    'dermapen': { regular: '$88.000', promo: '$75.000', cardLabel: 'Sesión' },
    'drenaje-linfatico': { regular: '$65.000', promo: '$55.000', cardLabel: 'Sesión' },
    'masaje-descontracturante': { regular: '$59.000', promo: '$50.000', cardLabel: 'Sesión' },
    'piedras-calientes': { regular: '$59.000', promo: '$50.000', cardLabel: 'Sesión' },
    'limpieza-profunda': { regular: '$53.000', promo: '$45.000', cardLabel: 'Sesión única' }
  };
  let promo15Active = false;

  try {
    promo15Active = sessionStorage.getItem('nativaPromo15') === '1';
  } catch (error) {
    console.warn('No se pudo leer el estado de la promoción.', error);
  }

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
    if (!link.id.includes('whatsappFloat') && !link.id.includes('modalWhatsappBtn') && !link.classList.contains('depilation-whatsapp-direct') && !link.classList.contains('personalized-care-cta')) {
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
  document.querySelectorAll('.promo-link').forEach(link => {
    link.addEventListener('click', () => {
      promo15Active = true;
      try {
        sessionStorage.setItem('nativaPromo15', '1');
      } catch (error) {
        console.warn('No se pudo guardar el estado de la promoción.', error);
      }
      applyPromo15Interface();
    });
  });

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
     HERO TEMPORAL
  ========================================== */
  const heroTemporalContent = document.querySelector('.hero-content');
  const heroTemporalSection = document.querySelector('.hero-section');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (heroTemporalContent && heroTemporalSection && !prefersReducedMotion.matches) {
    let heroEntryTimer = null;
    let heroExitTimer = null;
    let heroWasClearlyOut = false;

    const clearHeroTemporalTimers = () => {
      clearTimeout(heroEntryTimer);
      clearTimeout(heroExitTimer);
      heroEntryTimer = null;
      heroExitTimer = null;
    };

    const startHeroTemporalCycle = () => {
      clearHeroTemporalTimers();
      heroTemporalContent.classList.add('hero-temporal');
      heroTemporalContent.classList.remove('hero-copy-visible', 'hero-copy-hidden');

      heroEntryTimer = setTimeout(() => {
        heroTemporalContent.classList.add('hero-copy-visible');
        heroEntryTimer = null;
      }, 100);

      heroExitTimer = setTimeout(() => {
        heroTemporalContent.classList.add('hero-copy-hidden');
        heroExitTimer = null;
      }, 4500);
    };

    startHeroTemporalCycle();

    if ('IntersectionObserver' in window) {
      const heroTemporalObserver = new IntersectionObserver(([entry]) => {
        if (entry.intersectionRatio <= 0.2) {
          if (!heroWasClearlyOut) {
            heroWasClearlyOut = true;
            clearHeroTemporalTimers();
          }
          return;
        }

        if (heroWasClearlyOut && entry.intersectionRatio >= 0.55) {
          heroWasClearlyOut = false;
          startHeroTemporalCycle();
        }
      }, { threshold: [0.2, 0.55] });

      heroTemporalObserver.observe(heroTemporalSection);
    }
  }

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
    const promoPrice = promo15Prices[dataId];
    const activeSinglePrice = promoPrice && (promo15Active ? promoPrice.promo : promoPrice.regular);
    const modalPricing = promoPrice ? data.pricing.replace(promoPrice.promo, activeSinglePrice) : data.pricing;
    const modalSingleLabel = promoPrice ? data.singleLabel.replace(promoPrice.promo, activeSinglePrice) : data.singleLabel;

    if (mPriceText) mPriceText.textContent = modalPricing || '';
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
        modalReserveSingleBtn.textContent = modalSingleLabel || 'Reservar 1 Sesión';
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
        modalReserveSingleBtn.textContent = modalSingleLabel || 'Reservar 1 Sesión';
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

  const depilationPromoBanner = document.getElementById('depilationPromoBanner');
  let depilationHighlightTimeout;

  if (depilationPromoBanner) {
    depilationPromoBanner.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();

      const depilationCard = document.getElementById('depilacion-definitiva');
      if (!depilationCard) return;

      depilationCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.clearTimeout(depilationHighlightTimeout);
      depilationCard.classList.remove('is-depilation-highlight');
      void depilationCard.offsetWidth;
      depilationCard.classList.add('is-depilation-highlight');

      depilationHighlightTimeout = window.setTimeout(() => {
        depilationCard.classList.remove('is-depilation-highlight');
      }, 2200);
    }, true);
  }

  const serviceCards = document.querySelectorAll('.service-card, .combo-card');
  serviceCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.select-combo-btn')) return;
      if (e.target.closest('.depilation-whatsapp-direct')) return;
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

function applyPromo15Interface() {
  Object.entries(promo15Prices).forEach(([treatmentId, price]) => {
    const activePrice = promo15Active ? price.promo : price.regular;
    const serviceCard = document.querySelector(`.service-card[data-id="${treatmentId}"]`);

    if (serviceCard) {
      const priceRef = serviceCard.querySelector('.price-ref');
      const priceSingle = serviceCard.querySelector('.price-single');
      if (priceRef) priceRef.textContent = promo15Active ? `Sesión: ${price.regular}` : '';
      if (priceSingle) {
        priceSingle.textContent = promo15Active
          ? `Sesión con 15% OFF: ${activePrice}`
          : `${price.cardLabel}: ${activePrice}`;
      }
    }

    if (selectService) {
      const serviceOption = Array.from(selectService.options).find(option => (
        option.value === treatmentsData[treatmentId].singleValue
      ));
      if (serviceOption) {
        serviceOption.textContent = serviceOption.textContent.replace(/\(\$[\d.]+\)/, `(${activePrice})`);
      }
    }
  });
}

applyPromo15Interface();

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
     5. CONSULTA DE DISPONIBILIDAD POR WHATSAPP
  ========================================== */
  const DEPOSIT_AMOUNT = 20000;
  const consultationForm = document.getElementById('consultationForm');
  const bookingDetails = document.getElementById('bookingDetails');
  const consultationServiceSummary = document.getElementById('consultationServiceSummary');
  const consultationFormFeedback = document.getElementById('consultationFormFeedback');
  const custName = document.getElementById('custName');
  const custPhone = document.getElementById('custPhone');
  const custNotes = document.getElementById('custNotes');
  const aliasText = document.getElementById('aliasText');
  const btnCopyAlias = document.getElementById('btnCopyAlias');

  function setConsultationFeedback(message = '') {
    if (!consultationFormFeedback) return;
    consultationFormFeedback.textContent = message;
    consultationFormFeedback.classList.toggle('is-visible', Boolean(message));
  }

  function updateBookingDetails() {
    if (!bookingDetails) return;

    const hasSelectedService = Boolean(selectService && selectService.value);
    bookingDetails.classList.toggle('hidden', !hasSelectedService);
    bookingDetails.setAttribute('aria-hidden', String(!hasSelectedService));
  }

  function updateConsultationSummary() {
    updateBookingDetails();
    if (!consultationServiceSummary) return;

    const selectedOption = selectService && selectService.options[selectService.selectedIndex];
    consultationServiceSummary.textContent = selectedOption && selectedOption.value
      ? selectedOption.textContent
      : 'Elegí un tratamiento o plan.';
  }

  function isValidWhatsapp(value) {
    const digits = value.replace(/\D/g, '');
    return digits.length >= 8 && digits.length <= 15;
  }

  function formatDepositAmount(amount) {
    return `$${new Intl.NumberFormat('es-AR').format(amount)}`;
  }

  document.querySelectorAll('[data-deposit-amount]').forEach(element => {
    element.textContent = formatDepositAmount(DEPOSIT_AMOUNT);
  });

  if (selectService) {
    selectService.addEventListener('change', () => {
      updateConsultationSummary();
      setConsultationFeedback();
    });
  }

  [custName, custPhone].filter(Boolean).forEach(field => {
    field.addEventListener('input', () => setConsultationFeedback());
  });

  updateConsultationSummary();

  if (consultationForm) {
    consultationForm.addEventListener('submit', event => {
      event.preventDefault();

      if (!selectService || !selectService.value) {
        setConsultationFeedback('Elegí un tratamiento o plan para continuar.');
        if (selectService) selectService.focus();
        return;
      }

      if (!custName || !custName.value.trim()) {
        setConsultationFeedback('Escribí tu nombre para que Natalia sepa quién consulta.');
        if (custName) custName.focus();
        return;
      }

      if (!custPhone || !isValidWhatsapp(custPhone.value.trim())) {
        setConsultationFeedback('Revisá el número de WhatsApp.');
        if (custPhone) custPhone.focus();
        return;
      }

      const selectedOption = selectService.options[selectService.selectedIndex];
      const serviceText = selectedOption.textContent;
      const name = custName.value.trim();
      const phone = custPhone.value.trim();
      const notes = custNotes ? custNotes.value.trim() : '';
      const optionalNotes = notes ? `\n\nAclaración:\n${notes}` : '';
      const message =
        `Hola Natalia! Quisiera consultar día y horario para reservar un turno de:\n\n` +
        `Tratamiento:\n${serviceText}\n\n` +
        `Nombre:\n${name}\n\n` +
        `WhatsApp:\n${phone}` +
        optionalNotes +
        `\n\nAguardo, gracias!`;

      window.open(
        `${WA_BASE_URL}?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener,noreferrer'
      );
    });
  }

  if (btnCopyAlias && aliasText) {
    btnCopyAlias.addEventListener('click', async () => {
      const alias = aliasText.textContent.trim();

      try {
        await navigator.clipboard.writeText(alias);
      } catch (error) {
        const temporaryInput = document.createElement('input');
        temporaryInput.value = alias;
        document.body.appendChild(temporaryInput);
        temporaryInput.select();
        document.execCommand('copy');
        temporaryInput.remove();
      }

      btnCopyAlias.innerHTML = '<i class="fa-solid fa-check" aria-hidden="true"></i> ¡Copiado!';
      window.setTimeout(() => {
        btnCopyAlias.innerHTML = '<i class="fa-regular fa-copy" aria-hidden="true"></i> Copiar';
      }, 1600);
    });
  }

  /* ==========================================
     12. CARRUSEL DE TESTIMONIOS
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
     13. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
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
window.activarPromoGeneral = function() {
    const reservaSec = document.getElementById('reserva') || document.querySelector('.booking-section');
    if (reservaSec) {
        reservaSec.scrollIntoView({ behavior: 'smooth' });
    }
}
