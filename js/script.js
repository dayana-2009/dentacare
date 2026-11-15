document.addEventListener('DOMContentLoaded', () => {
    
    // ====================================================
    // 1. СЛОВАРИ ПЕРЕВОДОВ
    // ====================================================
    const translations = {
        ru: {
            logo: "Denta", logo_span: "Care", nav_home: "Главная", nav_services: "Услуги", nav_doctors: "Врачи", nav_reviews: "Отзывы", nav_appointment: "Запись",
            panel_title: "Специальные возможности", btn_theme: "🌙 Тёмная тема", btn_contrast: "🌓 Высокая контрастность", btn_sr: "🔊 Озвучить текст", font_size: "Размер шрифта:",
            hero_title: "Здоровые зубы —<br>уверенная улыбка", hero_desc: "Современная стоматология без боли и стресса. Индивидуальный подход к каждому пациенту.", btn_book: "Записаться на приём",
            services_title: "Наши услуги", search_placeholder: "Поиск услуги...",
            srv1_title: "Лечение кариеса", srv1_desc: "Безболезненное лечение с использованием современных материалов.", srv1_price: "от 3 000 ₽", btn_details: "Подробнее",
            srv2_title: "Профессиональная чистка", srv2_desc: "Удаление налёта и камня, полировка эмали.", srv2_price: "от 2 500 ₽",
            srv3_title: "Имплантация", srv3_desc: "Восстановление зубов с помощью имплантов премиум-класса.", srv3_price: "от 30 000 ₽",
            srv4_title: "Отбеливание", srv4_desc: "Безопасное отбеливание до 8 тонов за один визит.", srv4_price: "от 8 000 ₽",
            calc_title: "Калькулятор стоимости услуг", calc1: "Лечение кариеса — 3 000 ₽", calc2: "Чистка — 2 500 ₽", calc3: "Имплантация — 30 000 ₽", calc4: "Отбеливание — 8 000 ₽", calc_total: "Итого: <strong id='calcTotal'>0</strong> ₽",
            doctors_title: "Наши врачи", doc1_name: "Анна Петрова", doc1_role: "Стоматолог-терапевт", doc2_name: "Иван Смирнов", doc2_role: "Хирург-имплантолог", doc3_name: "Елена Козлова", doc3_role: "Ортодонт",
            reviews_title: "Отзывы пациентов",
            rev1_text: "«Очень довольна! Лечение прошло без боли, врач всё объяснил.»", rev1_author: "— Мария, 34 года",
            rev2_text: "«Имплантация прошла успешно, результат превзошёл ожидания.»", rev2_author: "— Алексей, 45 лет",
            rev3_text: "«Чистка зубов — быстро и качественно. Приду ещё!»", rev3_author: "— Ольга, 28 лет",
            rev4_text: "«Отличная клиника, вежливый персонал и современное оборудование.»", rev4_author: "— Дмитрий, 40 лет",
            form_title: "Запись на приём", form_name: "Ваше имя", form_name_ph: "Иван Иванов", form_phone: "Телефон", form_service: "Услуга", form_select: "Выберите услугу", form_btn: "Отправить заявку",
            footer_contacts: "Контакты", footer_addr: "г. Москва, ул. Здоровья, 10", footer_phone: "+7 (495) 123-45-67", footer_email: "info@dentacare.ru", footer_copy: "&copy; 2026 DentaCare.",
            modal_book_title: "Записаться на приём", btn_details_book: "Записаться на эту услугу"
        },
        en: {
            logo: "Denta", logo_span: "Care", nav_home: "Home", nav_services: "Services", nav_doctors: "Doctors", nav_reviews: "Reviews", nav_appointment: "Booking",
            panel_title: "Accessibility", btn_theme: "🌙 Dark theme", btn_contrast: "🌓 High contrast", btn_sr: "🔊 Read aloud", font_size: "Font size:",
            hero_title: "Healthy teeth —<br>a confident smile", hero_desc: "Modern dentistry without pain and stress. Individual approach to every patient.", btn_book: "Book an appointment",
            services_title: "Our services", search_placeholder: "Search service...",
            srv1_title: "Caries treatment", srv1_desc: "Painless treatment using modern materials.", srv1_price: "from 3,000 ₽", btn_details: "Details",
            srv2_title: "Professional cleaning", srv2_desc: "Removal of plaque and tartar, enamel polishing.", srv2_price: "from 2,500 ₽",
            srv3_title: "Implantation", srv3_desc: "Dental restoration using premium implants.", srv3_price: "from 30,000 ₽",
            srv4_title: "Teeth whitening", srv4_desc: "Safe whitening up to 8 shades in one visit.", srv4_price: "from 8,000 ₽",
            calc_title: "Service cost calculator", calc1: "Caries treatment — 3,000 ₽", calc2: "Professional cleaning — 2,500 ₽", calc3: "Implantation — 30,000 ₽", calc4: "Teeth whitening — 8,000 ₽", calc_total: "Total: <strong id='calcTotal'>0</strong> ₽",
            doctors_title: "Our doctors", doc1_name: "Anna Petrova", doc1_role: "Therapist", doc2_name: "Ivan Smirnov", doc2_role: "Implant surgeon", doc3_name: "Elena Kozlova", doc3_role: "Orthodontist",
            reviews_title: "Patient reviews",
            rev1_text: "«Very satisfied! The treatment was painless, the doctor explained everything.»", rev1_author: "— Maria, 34 years old",
            rev2_text: "«The implantation was successful, the result exceeded expectations.»", rev2_author: "— Alexey, 45 years old",
            rev3_text: "«Teeth cleaning is fast and high quality. I will come again!»", rev3_author: "— Olga, 28 years old",
            rev4_text: "«Great clinic, polite staff and modern equipment.»", rev4_author: "— Dmitry, 40 years old",
            form_title: "Booking", form_name: "Your name", form_name_ph: "Ivan Ivanov", form_phone: "Phone", form_service: "Service", form_select: "Select service", form_btn: "Submit request",
            footer_contacts: "Contacts", footer_addr: "Moscow, Zdorovya st., 10", footer_phone: "+7 (495) 123-45-67", footer_email: "info@dentacare.ru", footer_copy: "&copy; 2026 DentaCare.",
            modal_book_title: "Book an appointment", btn_details_book: "Book this service"
        }
    };

    let currentLang = 'ru';

    // ====================================================
    // 2. ХЕЛПЕРЫ ДЛЯ ЧТЕНИЯ
    // ====================================================
    function numberToRussianWords(n) {
        if (n === 0) return "ноль";
        const units = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
        const unitsFem = ["", "одна", "две", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
        const teens = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
        const tens = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
        const hundreds = ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
        let res = [];
        let th = Math.floor(n / 1000);
        let h = Math.floor((n % 1000) / 100);
        let t = Math.floor((n % 100) / 10);
        let o = n % 10;
        if (th > 0) {
            if (th === 1) res.push("одна тысяча");
            else if (th === 2) res.push("две тысячи");
            else if (th === 3) res.push("три тысячи");
            else if (th === 4) res.push("четыре тысячи");
            else {
                let thStr = [];
                let thT = Math.floor(th / 10);
                let thO = th % 10;
                if (thT > 0) thStr.push(tens[thT]);
                if (thO > 0) thStr.push(units[thO]);
                let word = thStr.join(' ');
                if (th % 10 === 1 && th % 100 !== 11) res.push(word + " тысяча");
                else if ([2,3,4].includes(th % 10) && ![12,13,14].includes(th % 100)) res.push(word + " тысячи");
                else res.push(word + " тысяч");
            }
        }
        if (h > 0) res.push(hundreds[h]);
        if (t > 1) {
            res.push(tens[t]);
            if (o > 0) res.push(units[o]);
        } else if (t === 1) {
            res.push(teens[o]);
        } else if (o > 0) {
            res.push((th > 0 && h === 0 && t === 0) ? unitsFem[o] : units[o]);
        }
        return res.join(' ');
    }

    function getAgeTextRu(ageStr) {
        let age = parseInt(ageStr);
        if (isNaN(age)) return ageStr;
        let text = numberToRussianWords(age);
        let lastDigit = age % 10;
        let lastTwo = age % 100;
        if (lastTwo >= 11 && lastTwo <= 14) text += ' лет';
        else if (lastDigit === 1) text += ' год';
        else if (lastDigit >= 2 && lastDigit <= 4) text += ' года';
        else text += ' лет';
        return text;
    }

    function getGenitiveNameRu(name) {
        if (name.endsWith('я')) return name.slice(0, -1) + 'и';
        if (name.endsWith('а')) return name.slice(0, -1) + 'ы';
        return name + 'а';
    }

    function cleanTextForTTS(text) {
        return text.replace(/\./g, ' ').replace(/\s+/g, ' ').trim();
    }

    function highlightEl(el) {
        if (!el) return;
        el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        el.style.outline = '3px solid #e53e3e'; 
        setTimeout(() => { el.style.outline = ''; }, 2000);
    }

    // ====================================================
    // 3. СТАНДАРТНЫЕ НАСТРОЙКИ
    // ====================================================
    function applyLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;
        document.getElementById('langToggle').textContent = lang === 'ru' ? 'EN' : 'RU';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (key === 'hero_title') el.innerHTML = translations[lang][key];
                else if (key === 'calc_total') {
                    const totalVal = document.getElementById('calcTotal').textContent;
                    el.innerHTML = translations[lang][key];
                    document.getElementById('calcTotal').textContent = totalVal;
                } else el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) el.placeholder = translations[lang][key];
        });

        const themeBtn = document.querySelector('#theme-toggle');
        if (themeBtn) {
            const isDark = document.documentElement.classList.contains('dark');
            themeBtn.innerHTML = isDark ? (lang === 'ru' ? '☀️ Светлая тема' : '☀️ Light theme') : (lang === 'ru' ? '🌙 Тёмная тема' : '🌙 Dark theme');
        }
        const viBtn = document.querySelector('#visually-impaired-toggle');
        if (viBtn) {
            const isHigh = document.documentElement.classList.contains('high-contrast');
            viBtn.innerHTML = isHigh ? (lang === 'ru' ? '☀️ Обычная контрастность' : '☀️ Normal contrast') : (lang === 'ru' ? '🌓 Высокая контрастность' : '🌓 High contrast');
        }
        
        if (typeof srEnabled !== 'undefined' && srEnabled) {
            collectElements();
            speak(lang === 'ru' ? 'Язык изменен на русский. Продолжаем чтение.' : 'Language changed to English. Continuing reading.');
        }
    }

    const settingsBtn = document.querySelector('#settings-btn');
    const settingsPanel = document.querySelector('#settings-panel');
    if (settingsBtn && settingsPanel) settingsBtn.addEventListener('click', (e) => { e.preventDefault(); settingsPanel.classList.toggle('show'); });

    const themeBtn = document.querySelector('#theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            themeBtn.innerHTML = isDark ? (currentLang === 'ru' ? '☀️ Светлая тема' : '☀️ Light theme') : (currentLang === 'ru' ? '🌙 Тёмная тема' : '🌙 Dark theme');
        });
    }

    const viBtn = document.querySelector('#visually-impaired-toggle');
    if (viBtn) {
        viBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('high-contrast');
            viBtn.innerHTML = document.documentElement.classList.contains('high-contrast') ? (currentLang === 'ru' ? '☀️ Обычная контрастность' : '☀️ Normal contrast') : (currentLang === 'ru' ? '🌓 Высокая контрастность' : '🌓 High contrast');
        });
    }

    const fontIncrease = document.querySelector('#font-increase');
    const fontDecrease = document.querySelector('#font-decrease');
    const fontSizeDisplay = document.querySelector('#font-size-display');
    let currentFontSize = 100;
    if (fontIncrease && fontDecrease && fontSizeDisplay) {
        fontIncrease.addEventListener('click', () => { if (currentFontSize < 150) { currentFontSize += 10; document.documentElement.style.fontSize = currentFontSize + '%'; fontSizeDisplay.textContent = currentFontSize + '%'; } });
        fontDecrease.addEventListener('click', () => { if (currentFontSize > 70) { currentFontSize -= 10; document.documentElement.style.fontSize = currentFontSize + '%'; fontSizeDisplay.textContent = currentFontSize + '%'; } });
    }

    // ====================================================
    // 4. СКРИНРИДЕР 
    // ====================================================
    const srBtn = document.querySelector('#screenreader-btn');
    const srNav = document.querySelector('#sr-nav');
    const srPrev = document.querySelector('#sr-prev');
    const srNext = document.querySelector('#sr-next');
    const detailsModal = document.getElementById('detailsModal');
    const bookingModal = document.getElementById('modal');
    
    let srEnabled = false;
    let srElements = [];
    let srIndex = -1;
    let srVoice = null;

    let activeModal = null; 
    let modalStep = 0;
    let currentServiceTitle = '';

    if (srBtn) {
        function loadVoices() {
            const voices = window.speechSynthesis.getVoices();
            srVoice = voices.find(v => v.lang.startsWith(currentLang)) || voices[0];
        }
        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) window.speechSynthesis.onvoiceschanged = loadVoices;

        function speak(text) {
            if (!text) return;
            window.speechSynthesis.cancel();
            setTimeout(() => {
                const u = new SpeechSynthesisUtterance(text);
                u.lang = currentLang === 'ru' ? 'ru-RU' : 'en-US';
                if (srVoice) u.voice = srVoice;
                u.rate = 1.0;
                window.speechSynthesis.speak(u);
            }, 50);
        }

        window.collectElements = function() {
            srElements = [];
            const isRu = currentLang === 'ru';
            
            if (settingsPanel && settingsPanel.classList.contains('show')) {
                srElements.push({ element: settingsPanel.querySelector('.panel-header h3'), text: (isRu ? 'Раздел: ' : 'Section: ') + translations[currentLang].panel_title });
                srElements.push({ element: document.querySelector('#theme-toggle'), text: '' }); 
                srElements.push({ element: document.querySelector('#visually-impaired-toggle'), text: '' });
                srElements.push({ element: document.querySelector('#screenreader-btn'), text: isRu ? 'Кнопка: Выключить скринридер' : 'Button: Turn off screen reader' });
                srElements.push({ element: document.querySelector('#font-decrease'), text: isRu ? 'Кнопка: Уменьшить шрифт' : 'Button: Decrease font size' });
                srElements.push({ element: document.querySelector('#font-increase'), text: isRu ? 'Кнопка: Увеличить шрифт' : 'Button: Increase font size' });
            }

            const langBtn = document.querySelector('#langToggle');
            if (langBtn) srElements.push({ element: langBtn, text: isRu ? 'Кнопка: Изменить язык на английский' : 'Button: Change language to Russian' });

            document.querySelectorAll('nav a').forEach(link => srElements.push({ element: link, text: (isRu ? 'Ссылка: ' : 'Link: ') + link.innerText }));

            const heroH1 = document.querySelector('.hero__text h1');
            const heroP = document.querySelector('.hero__text p');
            if (heroH1 && heroP) srElements.push({ element: heroH1, text: `${cleanTextForTTS(heroH1.innerText)}. ${cleanTextForTTS(heroP.innerText)}` });
            const heroBtn = document.querySelector('#openModalBtn');
            if (heroBtn) srElements.push({ element: heroBtn, text: (isRu ? 'Кнопка: ' : 'Button: ') + heroBtn.innerText });

            const servicesH2 = document.querySelector('#services h2');
            if (servicesH2) srElements.push({ element: servicesH2, text: (isRu ? 'Раздел: ' : 'Section: ') + servicesH2.innerText });
            
            const searchInput = document.querySelector('#searchInput');
            if (searchInput) srElements.push({ element: searchInput, text: isRu ? 'Поле поиска услуг' : 'Search services field' });

            // УСЛУГИ
            document.querySelectorAll('.service-card').forEach(card => {
                const title = card.querySelector('h3').innerText;
                const desc = card.querySelector('p').innerText;
                const price = card.querySelector('.price').innerText;
                
                let priceText = price;
                if (isRu) {
                    const numStr = price.replace(/[^0-9]/g, '');
                    if (numStr === '3000') priceText = 'от трёх тысяч рублей';
                    else if (numStr === '2500') priceText = 'от двух тысяч пятисот рублей';
                    else if (numStr === '30000') priceText = 'от тридцати тысяч рублей';
                    else if (numStr === '8000') priceText = 'от восьми тысяч рублей';
                    else if (numStr) priceText = 'от ' + numberToRussianWords(parseInt(numStr)) + ' рублей';
                }
                
                srElements.push({ element: card, text: (isRu ? 'Услуга: ' : 'Service: ') + `${title}. ${cleanTextForTTS(desc)}. ${isRu ? 'Стоимость: ' : 'Price: '}${priceText}` });
                
                const detailBtn = card.querySelector('.view-details');
                if (detailBtn) srElements.push({ element: detailBtn, text: isRu ? 'Кнопка: Подробнее об услуге' : 'Button: Details about service' });
            });

            // КАЛЬКУЛЯТОР
            const calcH3 = document.querySelector('.calculator h3');
            if (calcH3) {
                let calcText = calcH3.innerText;
                const checkedBoxes = Array.from(document.querySelectorAll('.calc-checkbox')).filter(c => c.checked);
                if (checkedBoxes.length > 0) {
                    let selectedNames = checkedBoxes.map(cb => cb.closest('label').innerText.split('—')[0].trim().toLowerCase());
                    let itemsText = "";
                    if (selectedNames.length === 4) itemsText = "все услуги";
                    else if (selectedNames.length === 1) itemsText = selectedNames[0];
                    else itemsText = selectedNames.slice(0, -1).join(', ') + ' и ' + selectedNames.slice(-1);
                    
                    const totalVal = checkedBoxes.reduce((acc, c) => acc + Number(c.value), 0);
                    calcText += isRu ? `, ранее были выбраны ${itemsText}, итого: ${numberToRussianWords(totalVal)} рублей` : `, previously selected ${itemsText}, total: ${totalVal} rubles`;
                } else {
                    calcText = (isRu ? 'Раздел: ' : 'Section: ') + calcH3.innerText;
                }
                srElements.push({ element: calcH3, text: calcText });
            }
            document.querySelectorAll('.calc-checkbox').forEach(cb => {
                const labelText = cb.closest('label').innerText.split('—')[0].trim();
                srElements.push({ element: cb, text: (isRu ? 'Чекбокс: ' : 'Checkbox: ') + labelText });
            });

            const doctorsH2 = document.querySelector('#doctors h2');
            if (doctorsH2) srElements.push({ element: doctorsH2, text: (isRu ? 'Раздел: ' : 'Section: ') + doctorsH2.innerText });
            document.querySelectorAll('.doctor-card').forEach(card => {
                const name = card.querySelector('h3').innerText;
                const role = card.querySelector('p').innerText;
                srElements.push({ element: card, text: (isRu ? 'Врач: ' : 'Doctor: ') + `${name}. ${role}` });
            });

            const reviewsH2 = document.querySelector('#reviews h2');
            if (reviewsH2) srElements.push({ element: reviewsH2, text: (isRu ? 'Раздел: ' : 'Section: ') + reviewsH2.innerText });
            document.querySelectorAll('.review-card').forEach(card => {
                const text = card.querySelector('p').innerText;
                const authorRaw = card.querySelector('span').innerText.replace('—', '').trim();
                
                if (isRu) {
                    const parts = authorRaw.split(',');
                    const name = getGenitiveNameRu(parts[0].trim());
                    const age = parts[1] ? getAgeTextRu(parts[1].replace(/[^0-9]/g, '')) : '';
                    srElements.push({ element: card, text: `Отзыв ${name}, ${age} - ${cleanTextForTTS(text)}` });
                } else {
                    srElements.push({ element: card, text: `Review by ${authorRaw} - ${text}` });
                }
            });

            const formH2 = document.querySelector('#appointment h2');
            if (formH2) srElements.push({ element: formH2, text: (isRu ? 'Раздел: ' : 'Section: ') + formH2.innerText });
            
            const nameInput = document.querySelector('#name');
            if(nameInput) srElements.push({ element: nameInput, text: isRu ? 'Поле ввода: Ваше имя. Введите ваше имя' : 'Input field: Your name. Enter your name' });
            const phoneInput = document.querySelector('#phone');
            if(phoneInput) srElements.push({ element: phoneInput, text: isRu ? 'Поле ввода: Телефон. Введите ваш телефон' : 'Input field: Phone. Enter your phone number' });
            const selectInput = document.querySelector('#service');
            if(selectInput) srElements.push({ element: selectInput, text: isRu ? 'Выпадающий список: Выберите услугу' : 'Dropdown list: Select service' });
            
            const submitBtn = document.querySelector('#appointmentForm button[type="submit"]');
            if (submitBtn) srElements.push({ element: submitBtn, text: isRu ? 'Кнопка: Отправить заявку запись на приём' : 'Button: Submit booking request' });

            const footer = document.querySelector('.footer');
            if (footer) {
                const email = document.querySelector('.footer__contacts p:nth-of-type(3)').innerText;
                const formattedEmail = email.replace('@', ' собачка ').replace(/\./g, ' точка ');
                
                if (isRu) {
                    srElements.push({ element: footer, text: `подвал сайта, раздел контакты, город Москва, улица Здоровья, дом десять, семь четыреста девяносто пять сто двадцать три сорок пять шестьдесят семь, ${formattedEmail}` });
                } else {
                    srElements.push({ element: footer, text: `Footer, contacts section, Moscow, Zdorovya st., 10, seven four nine five one two three four five six seven, ${formattedEmail.replace('собачка', 'at').replace('точка', 'dot')}` });
                }
            }
            const upBtn = document.querySelector('#backToTop');
            if (upBtn) srElements.push({ element: upBtn, text: isRu ? 'Кнопка: Наверх' : 'Button: Back to top' });
        }

        function announce(item) {
            let textToSpeak = item.text;
            const dynamicBtns = ['theme-toggle', 'visually-impaired-toggle', 'screenreader-btn'];
            if (item.element && item.element.id && dynamicBtns.includes(item.element.id)) {
                let cleanText = item.element.innerText.replace(/[^\w\sа-яА-Я.,!?-]/g, '').trim();
                textToSpeak = (currentLang === 'ru' ? 'Кнопка: ' : 'Button: ') + cleanText;
            }
            speak(textToSpeak);
            highlightEl(item.element);
        }

        srBtn.addEventListener('click', () => {
            srEnabled = !srEnabled;
            if (srEnabled) {
                collectElements();
                speak(currentLang === 'ru' ? 'Скринридер включён. Используйте кнопки в нижнем левом углу, чтобы озвучить текст.' : 'Screen reader on. Use buttons in bottom left corner.'); 
                srBtn.innerHTML = currentLang === 'ru' ? '🔇 Выключить скринридер' : '🔇 Turn off screen reader';
                srBtn.style.background = '#e53e3e';
                srBtn.style.color = '#fff';
                if (srNav) srNav.style.display = 'flex';
            } else {
                window.speechSynthesis.cancel();
                speak(currentLang === 'ru' ? 'Скринридер выключен' : 'Screen reader off');
                srBtn.innerHTML = currentLang === 'ru' ? '🔊 Озвучить текст' : '🔊 Read aloud';
                srBtn.style.background = ''; 
                srBtn.style.color = '';
                if (srNav) srNav.style.display = 'none';
                if(activeModal === 'details') detailsModal.classList.remove('active');
                if(activeModal === 'booking') bookingModal.classList.remove('active');
                activeModal = null;
            }
        });

        if (srNext) srNext.addEventListener('click', () => {
            if (!srEnabled) return;
            
            if (activeModal === 'details') {
                if (modalStep === 0) {
                    speak(currentLang === 'ru' ? 'Кнопка: Записаться на эту услугу' : 'Button: Book this service');
                    highlightEl(document.getElementById('detailsBookBtn'));
                    modalStep = 1;
                }
                return;
            }
            if (activeModal === 'booking') {
                if (modalStep === 0) { 
                    speak(currentLang === 'ru' ? 'Поле ввода: Ваше имя' : 'Input field: Your name'); 
                    highlightEl(document.getElementById('modalName')); 
                    modalStep = 1; 
                }
                else if (modalStep === 1) { 
                    speak(currentLang === 'ru' ? 'Поле ввода: Телефон' : 'Input field: Phone'); 
                    highlightEl(document.getElementById('modalPhone')); 
                    modalStep = 2; 
                }
                else if (modalStep === 2) { 
                    speak(currentLang === 'ru' ? 'Кнопка: Отправить заявку' : 'Button: Submit request'); 
                    highlightEl(document.querySelector('#modalForm button[type="submit"]')); 
                    modalStep = 3; 
                }
                return;
            }

            if (!srElements.length) return;
            srIndex = (srIndex + 1) % srElements.length;
            announce(srElements[srIndex]);
        });

        if (srPrev) srPrev.addEventListener('click', () => {
            if (!srEnabled) return;

            if (activeModal === 'details') {
                detailsModal.classList.remove('active');
                speak(currentLang === 'ru' ? `Вы вышли из вкладки запись на приём ${currentServiceTitle}` : `You exited the booking tab for ${currentServiceTitle}`);
                activeModal = null;
                return;
            }
            if (activeModal === 'booking') {
                if (modalStep === 0) {
                    bookingModal.classList.remove('active');
                    speak(currentLang === 'ru' ? `Вы вышли из окна записи` : `You exited the booking window`);
                    activeModal = null;
                } else if (modalStep === 1) { 
                    speak(currentLang === 'ru' ? 'Поле ввода: Ваше имя' : 'Input field: Your name'); 
                    highlightEl(document.getElementById('modalName')); 
                    modalStep = 0; 
                }
                else if (modalStep === 2) { 
                    speak(currentLang === 'ru' ? 'Поле ввода: Телефон' : 'Input field: Phone'); 
                    highlightEl(document.getElementById('modalPhone')); 
                    modalStep = 1; 
                }
                else if (modalStep === 3) { 
                    speak(currentLang === 'ru' ? 'Кнопка: Отправить заявку' : 'Button: Submit request'); 
                    highlightEl(document.querySelector('#modalForm button[type="submit"]')); 
                    modalStep = 2; 
                }
                return;
            }

            if (!srElements.length) return;
            srIndex = (srIndex - 1 + srElements.length) % srElements.length;
            announce(srElements[srIndex]);
        });
    }

    // ====================================================
    // 5. ОСТАЛЬНАЯ ЛОГИКА
    // ====================================================
    const burger = document.getElementById('burger');
    const navList = document.getElementById('navList');
    if(burger) burger.addEventListener('click', () => navList.classList.toggle('active'));

    const backToTopBtn = document.getElementById('backToTop');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => { if (window.scrollY > 500) backToTopBtn.classList.add('show'); else backToTopBtn.classList.remove('show'); });
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); } });
    }, { threshold: 0.15 });
    revealElements.forEach(el => observer.observe(el));

    // Калькулятор
    const checkboxes = document.querySelectorAll('.calc-checkbox');
    const calcTotal = document.getElementById('calcTotal');
    if(checkboxes.length > 0 && calcTotal) {
        const savedCalc = JSON.parse(localStorage.getItem('calcState')) || {};
        checkboxes.forEach(cb => { if (savedCalc[cb.dataset.id]) cb.checked = true; });

        function updateTotal() {
            let total = 0;
            const currentState = {};
            checkboxes.forEach(cb => { if (cb.checked) { total += Number(cb.value); currentState[cb.dataset.id] = true; } });
            calcTotal.textContent = total.toLocaleString('ru-RU');
            localStorage.setItem('calcState', JSON.stringify(currentState));
        }
        
        checkboxes.forEach(cb => {
            cb.addEventListener('change', (e) => {
                updateTotal();
                if (typeof srEnabled !== 'undefined' && srEnabled && activeModal === null) {
                    const labelText = cb.closest('label').innerText;
                    const cleanLabel = labelText.split('—')[0].trim();
                    const totalVal = Array.from(checkboxes).filter(c => c.checked).reduce((acc, c) => acc + Number(c.value), 0);
                    if (e.target.checked) speak(currentLang === 'ru' ? `Вы выбрали ${cleanLabel.toLowerCase()}. Итого: ${numberToRussianWords(totalVal)} рублей` : `You selected. Total: ${totalVal} rubles`);
                    else speak(currentLang === 'ru' ? `Вы отменили. Итого: ${numberToRussianWords(totalVal)} рублей` : `You unselected. Total: ${totalVal} rubles`);
                }
            });
        });
        updateTotal();
    }

    // Поиск
    const searchInput = document.getElementById('searchInput');
    const serviceCards = document.querySelectorAll('.service-card');
    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            serviceCards.forEach(card => { card.style.display = card.textContent.toLowerCase().includes(query) ? 'flex' : 'none'; });
        });
    }

    // Слайдер
    const track = document.getElementById('sliderTrack');
    if(track) {
        document.getElementById('sliderPrev').addEventListener('click', () => track.scrollBy({ left: -track.clientWidth, behavior: 'smooth' }));
        document.getElementById('sliderNext').addEventListener('click', () => track.scrollBy({ left: track.clientWidth, behavior: 'smooth' }));
    }

    // Модалки
    const modal = document.getElementById('modal');
    
    if(document.getElementById('openModalBtn')) {
        document.getElementById('openModalBtn').addEventListener('click', () => { 
            modal.classList.add('active'); 
            if (typeof srEnabled !== 'undefined' && srEnabled) { 
                activeModal = 'booking'; 
                modalStep = 0; 
                speak(currentLang === 'ru' ? 'Окно записи на приём открыто' : 'Booking window opened'); 
                highlightEl(document.getElementById('modalName')); 
            } 
        });
    }
    if(document.getElementById('closeModalBtn')) {
        document.getElementById('closeModalBtn').addEventListener('click', () => { 
            modal.classList.remove('active'); 
            if (typeof srEnabled !== 'undefined' && srEnabled) activeModal = null; 
        });
    }
    
    // Открытие подробнее (ИСПРАВЛЕНО ДЛЯ ПЕРЕВОДА)
    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const titleKey = e.target.dataset.i18nTitle;
            const descKey = e.target.dataset.i18nDesc;
            
            let title = translations[currentLang][titleKey];
            let desc = translations[currentLang][descKey];
            
            if (currentLang === 'ru') {
                desc = desc.replace('поклонения', 'поколения').replace('2 года', 'два года').replace('1 часа', 'одного часа');
            }
            
            document.getElementById('detailsTitle').textContent = title;
            document.getElementById('detailsDesc').textContent = desc;
            detailsModal.classList.add('active');
            currentServiceTitle = title;

            if (typeof srEnabled !== 'undefined' && srEnabled) {
                activeModal = 'details';
                modalStep = 0;
                speak(`${title}. ${cleanTextForTTS(desc)}`);
            }
        });
    });

    if(document.getElementById('closeDetailsBtn')) {
        document.getElementById('closeDetailsBtn').addEventListener('click', () => { 
            detailsModal.classList.remove('active'); 
            if (typeof srEnabled !== 'undefined' && srEnabled) activeModal = null; 
        });
    }
    
    // Переход в форму из деталей
    if(document.getElementById('detailsBookBtn')) {
        document.getElementById('detailsBookBtn').addEventListener('click', () => {
            detailsModal.classList.remove('active');
            modal.classList.add('active');
            if (typeof srEnabled !== 'undefined' && srEnabled) {
                activeModal = 'booking';
                modalStep = 0;
                speak(currentLang === 'ru' ? `Запись на приём: ${currentServiceTitle}` : `Booking: ${currentServiceTitle}`);
                highlightEl(document.getElementById('modalName'));
            }
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) { 
            e.target.classList.remove('active'); 
            if (typeof srEnabled !== 'undefined' && srEnabled) activeModal = null; 
        }
    });

    // Языки
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'ru' ? 'en' : 'ru';
            applyLanguage(newLang);
        });
    }

    // ДРОПДАУН ВЫБОР УСЛУГИ
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        serviceSelect.addEventListener('change', (e) => {
            if (typeof srEnabled !== 'undefined' && srEnabled && e.target.value) {
                const selectedText = e.target.options[e.target.selectedIndex].text;
                speak(currentLang === 'ru' ? `Вы выбрали услугу: ${selectedText}` : `You selected service: ${selectedText}`);
            }
        });
    }

    // ФОРМА
    const form = document.getElementById('appointmentForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            const name = document.getElementById('name');
            const phone = document.getElementById('phone');
            if (name.value.trim().length < 2) { document.getElementById('nameError').textContent = 'Введите имя'; isValid = false; } else { document.getElementById('nameError').textContent = ''; }
            if (!/^\+?[0-9\s\-\(\)]{10,}$/.test(phone.value.trim())) { document.getElementById('phoneError').textContent = 'Некорректный телефон'; isValid = false; } else { document.getElementById('phoneError').textContent = ''; }
            
            if (isValid) {
                const formData = new FormData(form);
                fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(formData).toString() })
                .then(() => {
                    document.getElementById('formSuccess').textContent = currentLang === 'ru' ? 'Заявка отправлена!' : 'Request sent!';
                    if (typeof srEnabled !== 'undefined' && srEnabled) speak(currentLang === 'ru' ? 'Заявка отправлена!' : 'Request sent!');
                    form.reset();
                }).catch(() => { document.getElementById('formSuccess').textContent = 'Ошибка!'; });
            }
        });
    }

    const modalForm = document.getElementById('modalForm');
    if(modalForm) {
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            document.getElementById('modalSuccess').textContent = currentLang === 'ru' ? 'Спасибо! Мы перезвоним.' : 'Thank you! We will call you back.';
            if (typeof srEnabled !== 'undefined' && srEnabled) speak(currentLang === 'ru' ? 'Спасибо! Мы перезвоним.' : 'Thank you! We will call you back.');
            setTimeout(() => { modal.classList.remove('active'); modalForm.reset(); document.getElementById('modalSuccess').textContent = ''; if (typeof srEnabled !== 'undefined' && srEnabled) activeModal = null; }, 3000);
        });
    }
});