document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Тема и localStorage (Пункт 4) ---
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
        themeToggle.textContent = '☀️';
    }
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        themeToggle.textContent = isDark ? '☀️' : '🌙';
    });

    // --- 2. Бургер-меню ---
    const burger = document.getElementById('burger');
    const navList = document.getElementById('navList');
    burger.addEventListener('click', () => navList.classList.toggle('active'));

    // --- 3. Кнопка "Наверх" (Пункт 1) ---
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- 4. Анимация появления при скролле (Пункт 3) ---
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Анимируем только 1 раз
            }
        });
    }, { threshold: 0.15 });
    revealElements.forEach(el => observer.observe(el));

    // --- 5. Калькулятор с сохранением в localStorage (Пункт 4) ---
    const checkboxes = document.querySelectorAll('.calc-checkbox');
    const calcTotal = document.getElementById('calcTotal');
    
    // Восстановление данных
    const savedCalc = JSON.parse(localStorage.getItem('calcState')) || {};
    checkboxes.forEach(cb => {
        if (savedCalc[cb.dataset.id]) cb.checked = true;
    });

    function updateTotal() {
        let total = 0;
        const currentState = {};
        checkboxes.forEach(cb => {
            if (cb.checked) {
                total += Number(cb.value);
                currentState[cb.dataset.id] = true;
            }
        });
        calcTotal.textContent = total.toLocaleString('ru-RU');
        localStorage.setItem('calcState', JSON.stringify(currentState));
    }
    checkboxes.forEach(cb => cb.addEventListener('change', updateTotal));
    updateTotal(); // Инициализация при загрузке

    // --- 6. Поиск услуг (Пункт 8) ---
    const searchInput = document.getElementById('searchInput');
    const serviceCards = document.querySelectorAll('.service-card');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        serviceCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? 'flex' : 'none';
        });
    });

    // --- 7. Слайдер без библиотек (Пункт 9) ---
    const track = document.getElementById('sliderTrack');
    document.getElementById('sliderPrev').addEventListener('click', () => {
        track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' });
    });
    document.getElementById('sliderNext').addEventListener('click', () => {
        track.scrollBy({ left: track.clientWidth, behavior: 'smooth' });
    });

    // --- 8. Модалки ---
    // Запись
    const modal = document.getElementById('modal');
    document.getElementById('openModalBtn').addEventListener('click', () => modal.classList.add('active'));
    document.getElementById('closeModalBtn').addEventListener('click', () => modal.classList.remove('active'));
    
    // Детали услуги (Пункт 10)
    const detailsModal = document.getElementById('detailsModal');
    const detailsTitle = document.getElementById('detailsTitle');
    const detailsDesc = document.getElementById('detailsDesc');
    
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const title = e.target.dataset.title;
            const desc = e.target.dataset.desc;
            detailsTitle.textContent = title;
            detailsDesc.textContent = desc;
            detailsModal.classList.add('active');
        });
    });
    document.getElementById('closeDetailsBtn').addEventListener('click', () => detailsModal.classList.remove('active'));
    document.getElementById('detailsBookBtn').addEventListener('click', () => {
        detailsModal.classList.remove('active');
        modal.classList.add('active');
    });

    // Закрытие по клику на фон
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });

    // --- 9. Мультиязычность RU/EN (Пункт 7) ---
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'ru';
    
    const translations = {
        ru: {
            nav_home: "Главная", nav_services: "Услуги", nav_doctors: "Врачи", nav_reviews: "Отзывы", nav_appointment: "Запись",
            hero_title: "Здоровые зубы —<br>уверенная улыбка",
            hero_desc: "Современная стоматология без боли и стресса. Индивидуальный подход к каждому пациенту.",
            btn_book: "Записаться на приём",
            services_title: "Наши услуги",
            search_placeholder: "Поиск услуги...",
            calc_title: "Калькулятор стоимости услуг",
            doctors_title: "Наши врачи",
            reviews_title: "Отзывы пациентов",
            form_title: "Запись на приём",
            form_name: "Ваше имя", form_phone: "Телефон", form_service: "Услуга", form_select: "Выберите услугу", form_btn: "Отправить заявку",
            footer_contacts: "Контакты", modal_book_title: "Записаться на приём"
        },
        en: {
            nav_home: "Home", nav_services: "Services", nav_doctors: "Doctors", nav_reviews: "Reviews", nav_appointment: "Booking",
            hero_title: "Healthy teeth —<br>a confident smile",
            hero_desc: "Modern dentistry without pain and stress. Individual approach to every patient.",
            btn_book: "Book an appointment",
            services_title: "Our services",
            search_placeholder: "Search service...",
            calc_title: "Service cost calculator",
            doctors_title: "Our doctors",
            reviews_title: "Patient reviews",
            form_title: "Book an appointment",
            form_name: "Your name", form_phone: "Phone", form_service: "Service", form_select: "Select service", form_btn: "Submit request",
            footer_contacts: "Contacts", modal_book_title: "Book an appointment"
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if(key === 'hero_title') {
                    el.innerHTML = translations[lang][key]; // Для тега <br>
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
        langToggle.textContent = lang === 'ru' ? 'EN' : 'RU';
        localStorage.setItem('lang', lang);
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'ru' ? 'en' : 'ru';
        setLanguage(currentLang);
    });
    setLanguage(currentLang); // Инициализация

    // --- 10. Валидация и отправка формы (Netlify Forms - Пункт 6) ---
    const form = document.getElementById('appointmentForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Валидация...
        let isValid = true;
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');
        if (name.value.trim().length < 2) { document.getElementById('nameError').textContent = 'Введите имя'; isValid = false; } else { document.getElementById('nameError').textContent = ''; }
        if (!/^\+?[0-9\s\-\(\)]{10,}$/.test(phone.value.trim())) { document.getElementById('phoneError').textContent = 'Некорректный телефон'; isValid = false; } else { document.getElementById('phoneError').textContent = ''; }
        
        if (isValid) {
            const formData = new FormData(form);
            // Отправка данных в Netlify
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                document.getElementById('formSuccess').textContent = currentLang === 'ru' ? 'Заявка отправлена!' : 'Request sent!';
                form.reset();
            })
            .catch(() => {
                document.getElementById('formSuccess').textContent = 'Error!';
            });
        }
    });

    // Валидация модалки (без Netlify, просто эмуляция)
    document.getElementById('modalForm').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('modalSuccess').textContent = currentLang === 'ru' ? 'Спасибо! Мы перезвоним.' : 'Thank you! We will call you.';
        setTimeout(() => { modal.classList.remove('active'); document.getElementById('modalForm').reset(); document.getElementById('modalSuccess').textContent = ''; }, 2000);
    });
});