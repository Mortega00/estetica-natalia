document.addEventListener('DOMContentLoaded', () => {
  const WA_PHONE = '5491132194320';
  const WA_BASE_URL = `https://wa.me/${WA_PHONE}`;

  const treatmentsData = {
    dermapen: {
      title: 'Dermapen + Rutina Glow',
      category: 'Facial especializado',
      desc: 'Tratamiento facial avanzado de microagujas estériles que estimula la síntesis de colágeno y elastina. Incluye principios activos puros para un rejuvenecimiento visible con efecto glow.',
      needs: 'Pieles opacas, con líneas de expresión, poros dilatados, secuelas de acné o envejecimiento cutáneo.',
      benefits: ['Estimula la renovación celular y la producción de colágeno natural', 'Aporta luminosidad y empareja el tono cutáneo', 'Atenúa poros, marcas y líneas de expresión finas'],
      care: 'Frecuencia recomendada: una vez por mes.',
      session: 'Dermapen + Rutina Glow — 1 sesión',
      plan: 'Dermapen + Rutina Glow — Plan x5'
    },
    'drenaje-linfatico': {
      title: 'Drenaje Linfático Manual',
      category: 'Corporal terapéutico',
      desc: 'Técnica de masaje suave, preciso y rítmico que ayuda a desinflamar tejidos, aliviar piernas cansadas y acompañar procesos posquirúrgicos.',
      needs: 'Retención de líquidos, edemas, celulitis edematosa, posoperatorios y pesadez en extremidades.',
      benefits: ['Ayuda a eliminar líquidos retenidos y toxinas', 'Alivia la hinchazón y la sensación de pesadez', 'Favorece la microcirculación y el descanso corporal'],
      care: 'Para optimizar resultados se puede recomendar un plan de diez sesiones, una o dos veces por semana.',
      session: 'Drenaje Linfático Manual — 1 sesión',
      plan: 'Drenaje Linfático Manual — Plan x10'
    },
    'drenaje-embarazo': {
      title: 'Drenaje Linfático (Embarazo)',
      category: 'Corporal maternidad',
      desc: 'Protocolo seguro y suave para etapas pre y post embarazo. Alivia la hinchazón en piernas, tobillos y pies, y mejora el retorno venoso.',
      needs: 'Edema gestacional, piernas pesadas, retención de líquidos en embarazo y recuperación posparto.',
      benefits: ['Técnica adaptada a cada etapa de la gestación', 'Descongestiona piernas, pies y tobillos', 'Promueve la relajación y el descanso profundo'],
      care: 'Requiere apto o consentimiento de tu médico obstetra a partir del segundo trimestre.',
      packOnly: true,
      plan: 'Drenaje Linfático (Embarazo) — Plan x10'
    },
    'masaje-descontracturante': {
      title: 'Masaje Descontracturante',
      category: 'Terapéutico y alivio',
      desc: 'Terapia manual focalizada en aliviar tensiones y contracturas en espalda, cuello y hombros.',
      needs: 'Contracturas musculares, dolor cervical, dorsal o lumbar, y tensiones acumuladas por mala postura o estrés.',
      benefits: ['Ayuda a disolver tensiones musculares profundas', 'Aumenta la movilidad y relaja la columna', 'Genera sensación de liviandad corporal'],
      care: 'Un plan de diez sesiones puede ayudar a prevenir la reaparición de contracturas crónicas.',
      session: 'Masaje Descontracturante — 1 sesión',
      plan: 'Masaje Descontracturante — Plan x10'
    },
    'piedras-calientes': {
      title: 'Masaje con Piedras Calientes',
      category: 'Corporal y relax',
      desc: 'Tratamiento que combina maniobras de masaje terapéutico con piedras volcánicas a temperatura controlada para una relajación física y mental profunda.',
      needs: 'Estrés elevado, agotamiento físico, insomnio, ansiedad o tensión muscular generalizada.',
      benefits: ['Favorece la relajación muscular por acción del calor', 'Ayuda a descansar mejor', 'Estimula la circulación y la oxigenación celular'],
      care: 'Recomendado como terapia de relax mensual o dentro de un plan continuado.',
      session: 'Masaje con Piedras Calientes — 1 sesión',
      plan: 'Masaje con Piedras Calientes — Plan x10'
    },
    'limpieza-profunda': {
      title: 'Limpieza Facial Profunda',
      category: 'Higiene y salud cutánea',
      desc: 'Higiene facial personalizada con exfoliación, extracción de impurezas, alta frecuencia y máscara descongestiva e hidratante según tu biotipo.',
      needs: 'Puntos negros, impurezas, poros obstruidos, exceso de oleosidad o piel apagada.',
      benefits: ['Elimina células muertas e impurezas', 'Ayuda a equilibrar la piel', 'Deja el rostro limpio, suave y oxigenado'],
      care: 'Frecuencia aconsejada: una vez por mes.',
      singleOnly: true,
      session: 'Limpieza Facial Profunda — 1 sesión'
    },
    maderoterapia: {
      title: 'Maderoterapia Corporal',
      category: 'Modelado corporal',
      desc: 'Técnica de modelado con utensilios de madera y drenaje linfático manual que trabaja sobre la celulitis y el contorno corporal.',
      needs: 'Adiposidad localizada, celulitis compacta o fibrosa y flacidez corporal.',
      benefits: ['Ayuda a alisar el aspecto de la celulitis', 'Activa el drenaje de toxinas y líquidos retenidos', 'Modela y tonifica distintas zonas del cuerpo'],
      care: 'Se realiza dentro de un plan acompañado por drenaje para respetar el tratamiento indicado.',
      packOnly: true,
      plan: 'Maderoterapia Corporal — Plan x10'
    },
    'depilacion-definitiva': {
      title: 'Depilación Definitiva',
      category: 'Jornada estacional',
      desc: 'Jornadas periódicas con tecnología láser para la eliminación progresiva y duradera del vello en zonas faciales y corporales.',
      needs: 'Vello no deseado, foliculitis e irritación por afeitado o cera.',
      benefits: ['Resultados progresivos en pocas sesiones', 'Apta para distintas zonas del cuerpo', 'Atención profesional y personalizada en gabinete privado'],
      care: 'Servicio disponible en fechas especiales programadas.',
      whatsappOnly: true,
      whatsappLabel: 'Reservar mi cupo por WhatsApp',
      whatsappMessage: 'Hola Natalia 👋\nVi tu web y quisiera consultar por Depilación Definitiva.\n\n¿Me contás las próximas fechas y horarios disponibles?\n\nUna vez coordinados el día y horario, el turno se confirma con una seña de $20.000.'
    }
  };

  function openWhatsapp(message) {
    window.open(`${WA_BASE_URL}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  }

  const whatsappFloat = document.getElementById('whatsappFloat');
  if (whatsappFloat) {
    whatsappFloat.href = `${WA_BASE_URL}?text=${encodeURIComponent('Hola Natalia, quisiera recibir asesoramiento personalizado.')}`;
  }

  const bubbleCloseBtn = document.getElementById('bubbleCloseBtn');
  const whatsappBubble = document.getElementById('whatsappBubble');
  if (bubbleCloseBtn && whatsappBubble) {
    bubbleCloseBtn.addEventListener('click', event => {
      event.stopPropagation();
      whatsappBubble.style.display = 'none';
    });
  }

  const navMenu = document.getElementById('navMenu');
  const mobileToggle = document.getElementById('mobileToggle');

  function closeMobileMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (mobileToggle) {
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', event => {
      event.stopPropagation();
      const isOpen = navMenu.classList.toggle('active');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', event => {
      if (navMenu.classList.contains('active') && !navMenu.contains(event.target) && !mobileToggle.contains(event.target)) {
        closeMobileMenu();
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      closeMobileMenu();
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const treatmentModal = document.getElementById('treatmentModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalReserveSingleBtn = document.getElementById('modalReserveSingleBtn');
  const modalReservePackBtn = document.getElementById('modalReservePackBtn');

  function closeModal() {
    if (!treatmentModal) return;
    treatmentModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function openModal(dataId) {
    const data = treatmentsData[dataId];
    if (!data || !treatmentModal) return;

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalCategoryTag').textContent = data.category;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('modalNeeds').textContent = data.needs;
    document.getElementById('modalCareText').textContent = data.care || '';

    const modalCareBox = document.getElementById('modalCareBox');
    modalCareBox.style.display = data.care ? 'block' : 'none';

    const benefits = document.getElementById('modalBenefits');
    benefits.replaceChildren(...data.benefits.map(benefit => {
      const item = document.createElement('li');
      item.textContent = benefit;
      return item;
    }));

    const setButton = (button, label, handler, visible) => {
      if (!button) return;
      button.style.display = visible ? 'inline-flex' : 'none';
      if (visible) {
        button.textContent = label;
        button.onclick = handler;
      }
    };

    if (data.whatsappOnly) {
      setButton(modalReserveSingleBtn, data.whatsappLabel, () => openWhatsapp(data.whatsappMessage), true);
      setButton(modalReservePackBtn, '', null, false);
    } else {
      const depositReminder = 'Entiendo que, una vez coordinados el día y horario, el turno se confirma con una seña de $20.000.';
      const sessionMessage = `Hola Natalia 👋\nVi tu web y quisiera reservar:\n\n${data.session}\n\n¿Me contás qué días y horarios tenés disponibles y el valor actual?\n\n${depositReminder}`;
      const planMessage = `Hola Natalia 👋\nVi tu web y quisiera consultar por:\n\n${data.plan}\n\nQuería conocer disponibilidad y valor actual del plan.\n\n${depositReminder}`;

      setButton(
        modalReserveSingleBtn,
        data.singleOnly ? 'Reservar sesión por WhatsApp' : 'Reservar 1 sesión',
        () => openWhatsapp(sessionMessage),
        !data.packOnly
      );
      setButton(
        modalReservePackBtn,
        `Consultar ${data.plan?.match(/Plan x\d+/)?.[0] || 'plan'} por WhatsApp`,
        () => openWhatsapp(planMessage),
        !data.singleOnly
      );
    }

    treatmentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', event => {
      if (event.target.closest('.depilation-whatsapp-direct')) return;
      openModal(card.dataset.id);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (treatmentModal) {
    treatmentModal.addEventListener('click', event => {
      if (event.target === treatmentModal) closeModal();
    });
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeModal();
  });

  const depilationPromoBanner = document.getElementById('depilationPromoBanner');
  const depilationCard = document.getElementById('depilacion-definitiva');
  let depilationHighlightTimer;

  if (depilationPromoBanner && depilationCard) {
    depilationPromoBanner.addEventListener('click', event => {
      event.preventDefault();
      depilationCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      window.clearTimeout(depilationHighlightTimer);
      depilationCard.classList.remove('is-depilation-highlight');
      void depilationCard.offsetWidth;
      depilationCard.classList.add('is-depilation-highlight');
      depilationHighlightTimer = window.setTimeout(() => depilationCard.classList.remove('is-depilation-highlight'), 2200);
    });
  }

  const aliasText = document.getElementById('aliasText');
  const btnCopyAlias = document.getElementById('btnCopyAlias');
  if (aliasText && btnCopyAlias) {
    btnCopyAlias.addEventListener('click', async () => {
      const alias = aliasText.textContent.trim();
      try {
        await navigator.clipboard.writeText(alias);
      } catch {
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

  const testimonialsCarousel = document.getElementById('testimonialsCarousel');
  const prevReviewBtn = document.getElementById('prevReviewBtn');
  const nextReviewBtn = document.getElementById('nextReviewBtn');
  if (testimonialsCarousel && prevReviewBtn && nextReviewBtn) {
    prevReviewBtn.addEventListener('click', () => testimonialsCarousel.scrollBy({ left: -320, behavior: 'smooth' }));
    nextReviewBtn.addEventListener('click', () => testimonialsCarousel.scrollBy({ left: 320, behavior: 'smooth' }));
  }

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const icon = item.querySelector('.faq-icon');
    if (!question) return;
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
  });
});
