const BOT_TOKEN = '8623995072:AAEPDNTbH9HkXabJsS7c9DDvMq_YyKKwnb0';
const CHAT_ID = '1813855034';

const translations = {
    uz: {
        socialProofTitle: "Restoran egalari bizga ishonmoqda",
        badge: "🔥 Bu oy faqat 2 ta joy qoldi!",
        heroHeadline: "Restoran uchun Telegram Bot — Buyurtmalar avtomatik kelsin!",
        heroSubtitle: "Mijozlar o'zlari buyurtma bersin. Siz faqat tayyorlang.",
        heroCheck1: "7 kunda tayyor",
        heroCheck2: "Click va Payme to'lov",
        heroCheck3: "24/7 avtomatik ishlaydi",
        heroBtn: "Bepul maslahat olish 🚀",
        stat1Text: "Telegram bot ishlab chiqilgan",
        stat2Text: "restoran faol foydalanmoqda",
        stat3Text: "texnik yordam",
        demoTitle: "Bot qanday ishlaydi?",
        demoCaption: "👆 Sizning botingiz ham shunday ko'rinadi",
        demoTitle: "Bot qanday ishlaydi?",
        demoCaption: "👆 Ko'rsatilgan 4-qadam orqali barcha jarayon to'liq avtomatlashtiriladi",
        step1Title: "Mijoz Telegram botga kiradi",
        step1Desc: "Reklama yoki link orqali botga o'tadi va /start bosadi",
        step2Title: "Menyuni ko'radi",
        step2Desc: "Chiroyli va qulay menyu orqali taomlarni tanlaydi",
        step3Title: "Buyurtma beradi",
        step3Desc: "Manzilini kiritadi va kerakli taomlarni savatga qo'shadi",
        step4Title: "To'lov qiladi",
        step4Desc: "Click yoki Payme orqali to'lov qilib, avtomat buyurtmani yuboradi",
        pricingBadge: "Eng mashhur ⭐",
        pricingSubtitle: "Professional Telegram Bot",
        pricingF1: "To'liq funksional bot",
        pricingF2: "Click va Payme to'lov",
        pricingF3: "Admin panel",
        pricingF4: "Xabarlar tarqatish",
        pricingF5: "Foydalanuvchilar bazasi",
        pricingF6: "3 oy texnik yordam",
        pricingBtn: "Hozir buyurtma berish →",
        trust1Title: "Tez yetkazish",
        trust1Sub: "Atigi 7 kunda tayyor bot",
        trust2Title: "Uzluksiz ishlaydi",
        trust2Sub: "Bot 24/7 to'xtamasdan ishlaydi",
        trust3Title: "Tezkor yordam",
        trust3Sub: "Har qanday savolga 1 soat ichida javob",
        contactLeftTitle: "Bugun bog'laning — ertaga bot tayyor bo'lishi mumkin!",
        contactTgBtn: "Telegram orqali yozish →",
        demoBtnHero: "Botni ko'rish 👀",
        formTitle: "Bepul maslahat olish",
        formBizLabel: "Biznes turini tanlang",
        optRest: "Restoran / Kafe",
        optSalon: "Salon / Go'zallik",
        optShop: "Do'kon",
        optFit: "Fitnes / Gym",
        optOther: "Boshqa",
        formSubmit: "Bog'lanish 🚀",
        formSuccess: "✅ Muvaffaqiyatli yuborildi! Tez orada bog'lanamiz!",
        ctaBigText: "Raqobatchilaringiz allaqachon botdan foydalanmoqda. Siz-chi?",
        ctaBtn: "Hoziroq boshlash →",
        footerCopy: "© 2025 botxizmati.uz — Barcha huquqlar himoyalangan",
        starterBadge: "Chegirma -33%",
        starterSubtitle: "Boshlang'ich Paket",
        starterF1: "Asosiy buyruqlar",
        starterF2: "Foydalanuvchilar ro'yxatdan o'tishi",
        starterF3: "Tugmalar va menyu",
        starterF4: "Admin panel",
        starterF5: "2 hafta yetkazish",
        starterF6: "1 oy texnik yordam",
        starterBtn: "Boshlash",
        businessSubtitle: "Biznes Paket",
        businessBtn: "Boshlash",
        pricingTitle: "Tariflar",
        botsWeBuildTitle: "Bots We Build",
        niche1Title: "Online Shop Bot",
        niche1F1: "Catalog",
        niche1F2: "Cart",
        niche1F3: "Click/Payme payment",
        niche2Title: "Restaurant Bot",
        niche2F1: "Menu",
        niche2F2: "Order",
        niche2F3: "Delivery",
        niche3Title: "Barber/Salon Bot",
        niche3F1: "Online booking",
        niche3F2: "Reminders",
        niche3F3: "Customer base",
        niche4Title: "Education Center Bot",
        niche4F1: "Registration",
        niche4F2: "Schedule",
        niche4F3: "Payment",
        niche5Title: "Fitness/Gym Bot",
        niche5F1: "Subscription",
        niche5F2: "Workout schedule",
        niche5F3: "Trainer",
        niche6Title: "Clinic Bot",
        niche6F1: "Doctor appointment",
        niche6F2: "Reminders",
        niche6F3: "Results",
        orderNow: "Buyurtma Berish",
        faqMainTitle: "Ko'p beriladigan savollar",
        faq1Q: "Botni ulab berish qancha vaqt oladi?",
        faq1A: "Barcha ma'lumotlarni (menyu, narxlar, rasmlar) taqdim etganingizdan so'ng, botni to'liq sozlashingiz uchun 7 ish kuni yetarli bo'ladi.",
        faq2Q: "Oylik to'lov bormi?",
        faq2A: "Yo'q, bot uchun oylik to'lov yo'q. Siz bir marta to'lov qilasiz va bot sizning ixtiyoringizda qoladi. Server va domen uchun yillik arzon to'lov mavjud bo'lishi mumkin.",
        faq3Q: "Click va Payme orqali to'lov qabul qila olamanmi?",
        faq3A: "Ha, botga O'zbekistondagi mashhur to'lov tizimlarini ulab bera olamiz. Buning uchun sizda yuridik shaxs (MChJ yoki YaTT) bo'lishi kerak.",
        faq4Q: "Texnik yordam qanday ishlaydi?",
        faq4A: "Loyiha topshirilganidan keyin tanlangan tarifga qarab 1 oydan 3 oygacha bepul texnik yordam ko'rsatamiz. Undan keyin ham shartnoma asosida xizmat ko'rsatishimiz mumkin.",
        seoH2: "Restoran uchun Telegram bot nima?",
        seoP1: "Telegram bot restoranlar uchun buyurtmalarni avtomatik qabul qilish tizimidir. Mijozlar Telegram orqali menyuni ko‘rib, buyurtma berishi va Click yoki Payme orqali to‘lov qilishi mumkin.",
        seoP2: "Bot 24/7 ishlaydi va restoran egalari uchun buyurtmalarni boshqarishni osonlashtiradi. Botxizmati.uz Toshkent va O‘zbekiston bo‘yicha restoranlar uchun Telegram bot ishlab chiqadi.",
        seoH3: "Telegram bot restoran biznesiga qanday yordam beradi?",
        seoLi1: "Buyurtmalarni avtomatik qabul qiladi",
        seoLi2: "Mijozlar menyuni tez ko‘radi",
        seoLi3: "Click va Payme orqali to‘lov ishlaydi",
        seoLi4: "Restoran ishchilari vaqtni tejaydi",
        seoLi5: "Buyurtmalarni boshqarish osonlashadi",
        roiTitle: "Telegram bot o‘zini qancha vaqtda qoplaydi?",
        roiDailyOrdersLabel: "Kuniga:",
        roiOrderValueLabel: "1 buyurtma:",
        roiDailyRevLabel: "Kunlik tushum:",
        roiBotPriceLabel: "Bot narxi:",
        roiConclusion: "Demak bot o‘zini taxminan 1 kunda qoplaydi!",
        niches: [
            "restoranlar",
            "klinikalar",
            "fitness klublar",
            "beauty salonlar",
            "o'quv markazlar",
            "avtoservislar"
        ]
    },
    ru: {
        socialProofTitle: "Владельцы ресторанов доверяют нам",
        badge: "🔥 Только 2 места в этом месяце!",
        heroHeadline: "Telegram Бот для ресторана — Заказы на автопилоте!",
        heroSubtitle: "Клиенты заказывают сами. Вы просто готовите.",
        heroCheck1: "Готово за 7 дней",
        heroCheck2: "Оплата Click и Payme",
        heroCheck3: "Работает 24/7 автоматически",
        heroBtn: "Получить бесплатную консультацию 🚀",
        stat1Text: "Разработанных Telegram-ботов",
        stat2Text: "ресторанов активно используют",
        stat3Text: "техническая поддержка",
        demoTitle: "Как работает бот?",
        demoCaption: "👆 Простые 4 шага автоматизации для покупок",
        step1Title: "Клиент заходит в Telegram бот",
        step1Desc: "Переходит по рекламе или ссылке и нажимает /start",
        step2Title: "Смотрит меню",
        step2Desc: "Выбирает блюда через красивое и удобное меню",
        step3Title: "Оформляет заказ",
        step3Desc: "Вводит адрес и добавляет нужные блюда в корзину",
        step4Title: "Оплачивает",
        step4Desc: "Оплачивает через Click или Payme, заказ поступает автоматически",
        pricingBadge: "Самый популярный ⭐",
        pricingSubtitle: "Профессиональный Telegram Бот",
        pricingF1: "Полнофункциональный бот",
        pricingF2: "Оплата Click и Payme",
        pricingF3: "Админ панель",
        pricingF4: "Рассылка сообщений",
        pricingF5: "База пользователей",
        pricingF6: "3 месяца поддержки",
        pricingBtn: "Заказать сейчас →",
        trust1Title: "Быстрая доставка",
        trust1Sub: "Бот готов всего за 7 дней",
        trust2Title: "Работает бесперебойно",
        trust2Sub: "Бот работает 24/7 без остановок",
        trust3Title: "Быстрая поддержка",
        trust3Sub: "Ответ на любой вопрос в течение 1 часа",
        contactLeftTitle: "Свяжитесь сегодня — завтра бот может быть готов!",
        contactTgBtn: "Написать в Telegram →",
        demoBtnHero: "Посмотреть бота 👀",
        formTitle: "Бесплатная консультация",
        formBizLabel: "Бизнес тип",
        optRest: "Ресторан / Кафе",
        optSalon: "Салон / Красота",
        optShop: "Магазин",
        optFit: "Фитнес / Gym",
        optOther: "Другое",
        formSubmit: "Связаться 🚀",
        formSuccess: "✅ Успешно отправлено! Мы скоро свяжемся с вами!",
        ctaBigText: "Ваши конкуренты уже используют ботов. А вы?",
        ctaBtn: "Начать прямо сейчас →",
        footerCopy: "© 2025 botxizmati.uz — Все права защищены",
        starterBadge: "Скидка -33%",
        starterSubtitle: "Стартовый Пакет",
        starterF1: "Основные команды",
        starterF2: "Регистрация пользователей",
        starterF3: "Кнопки и меню",
        starterF4: "Админ панель",
        starterF5: "Доставка 2 недели",
        starterF6: "1 месяц поддержки",
        starterBtn: "Начать",
        businessSubtitle: "Бизнес Пакет",
        businessBtn: "Начать",
        pricingTitle: "Тарифы",
        botsWeBuildTitle: "Бoты, которые мы создаем",
        niche1Title: "Бот для Магазина",
        niche1F1: "Каталог",
        niche1F2: "Корзина",
        niche1F3: "Оплата Click/Payme",
        niche2Title: "Бот для Ресторана",
        niche2F1: "Меню",
        niche2F2: "Заказ",
        niche2F3: "Доставка",
        niche3Title: "Бот для Салона",
        niche3F1: "Онлайн запись",
        niche3F2: "Напоминания",
        niche3F3: "База клиентов",
        niche4Title: "Бот для Учебного Центра",
        niche4F1: "Регистрация",
        niche4F2: "Расписание",
        niche4F3: "Оплата",
        niche5Title: "Бот для Фитнеса",
        niche5F1: "Абонемент",
        niche5F2: "Расписание тренировок",
        niche5F3: "Тренер",
        niche6Title: "Бот для Клиники",
        niche6F1: "Запись к врачу",
        niche6F2: "Напоминания",
        niche6F3: "Результаты анализов",
        orderNow: "Заказать Сейчас",
        faqMainTitle: "Часто задаваемые вопросы",
        faq1Q: "Сколько времени занимает подключение бота?",
        faq1A: "После предоставления всей информации (меню, цены, фото) полная настройка бота занимает 7 рабочих дней.",
        faq2Q: "Есть ли ежемесячная оплата?",
        faq2A: "Нет, за самого бота ежемесячных платежей нет. Вы платите один раз, и бот остается вашим навсегда. Возможна небольшая ежегодная плата за сервер и домен.",
        faq3Q: "Могу ли я принимать оплату через Click и Payme?",
        faq3A: "Да, мы можем подключить популярные платежные системы Узбекистана к вашему боту. Для этого у вас должно быть юридическое лицо (ООО или ИП).",
        faq4Q: "Как работает техническая поддержка?",
        faq4A: "После сдачи проекта мы предоставляем от 1 до 3 месяцев бесплатной технической поддержки в зависимости от выбранного тарифа. После этого мы можем обслуживать вас по договору.",
        seoH2: "Что такое Telegram бот для ресторана?",
        seoP1: "Telegram бот — это система автоматического приема заказов для ресторанов. Клиенты могут посмотреть меню, сделать заказ и оплатить через Click или Payme прямо в Telegram.",
        seoP2: "Бот работает 24/7 и упрощает управление заказами для владельцев ресторанов. Эта система является очень удобным решением для ресторанного бизнеса в Ташкенте и по всему Узбекистану.",
        seoH3: "Как Telegram бот помогает ресторанному бизнесу?",
        seoLi1: "Автоматически принимает заказы",
        seoLi2: "Клиенты быстро видят меню",
        seoLi3: "Оплата осуществляется через Click и Payme",
        seoLi4: "Экономит время сотрудников ресторана",
        seoLi5: "Упрощает управление заказами",
        roiTitle: "За какое время окупается Telegram бот?",
        roiDailyOrdersLabel: "В день:",
        roiOrderValueLabel: "1 заказ:",
        roiDailyRevLabel: "Ежедневная выручка:",
        roiBotPriceLabel: "Цена бота:",
        roiConclusion: "Значит бот окупается примерно за 1 день!",
        niches: [
            "ресторанов",
            "клиник",
            "фитнес клубов",
            "салонов красоты",
            "учебных центров",
            "автосервисов"
        ]
    },
    en: {
        socialProofTitle: "Restaurant owners trust us",
        badge: "🔥 Only 2 spots left this month!",
        heroHeadline: "Restaurant Telegram Bot — Orders on Autopilot!",
        heroSubtitle: "Customers order themselves. You just cook.",
        heroCheck1: "Ready in 7 days",
        heroCheck2: "Click and Payme payment",
        heroCheck3: "Works 24/7 automatically",
        heroBtn: "Get Free Consultation 🚀",
        stat1Text: "Telegram bots developed",
        stat2Text: "restaurants actively using",
        stat3Text: "tech support",
        demoTitle: "How does the bot work?",
        demoCaption: "👆 Users follow these 4 simple steps to automate completely",
        step1Title: "Customer enters Telegram bot",
        step1Desc: "Clicks start from an ad or link directly into the bot",
        step2Title: "Views the Menu",
        step2Desc: "Browses food categories using a beautiful native interface",
        step3Title: "Places an Order",
        step3Desc: "Selects items, enters delivery address, and adds to cart",
        step4Title: "Makes a Payment",
        step4Desc: "Pays seamlessly via Click or Payme, pushing the order to you instantly",
        pricingBadge: "Most popular ⭐",
        pricingSubtitle: "Professional Telegram Bot",
        pricingF1: "Fully functional bot",
        pricingF2: "Click and Payme payment",
        pricingF3: "Admin panel",
        pricingF4: "Broadcast system",
        pricingF5: "User database",
        pricingF6: "3 months support",
        pricingBtn: "Order Now →",
        trust1Title: "Fast Delivery",
        trust1Sub: "Bot ready in just 7 days",
        trust2Title: "Runs Seamlessly",
        trust2Sub: "Bot works 24/7 non-stop",
        trust3Title: "Quick Support",
        trust3Sub: "Answer to any question within 1 hour",
        contactLeftTitle: "Contact today — tomorrow the bot could be ready!",
        contactTgBtn: "Write on Telegram →",
        demoBtnHero: "View Demo Bot 👀",
        formTitle: "Free Consultation",
        formBizLabel: "Business type",
        optRest: "Restaurant / Cafe",
        optSalon: "Salon / Beauty",
        optShop: "Shop",
        optFit: "Fitness / Gym",
        optOther: "Other",
        formSubmit: "Contact Us 🚀",
        formSuccess: "✅ Successfully sent! We will contact you soon!",
        ctaBigText: "Your competitors are already using bots. What about you?",
        ctaBtn: "Start Right Now →",
        footerCopy: "© 2025 botxizmati.uz — All rights reserved",
        starterBadge: "Discount -33%",
        starterSubtitle: "Boshlang'ich Paket",
        starterF1: "Basic commands",
        starterF2: "User registration",
        starterF3: "Buttons and menu",
        starterF4: "Admin panel",
        starterF5: "2 weeks delivery",
        starterF6: "1 month tech support",
        starterBtn: "Get Started",
        businessSubtitle: "Biznes Paket",
        businessBtn: "Get Started",
        pricingTitle: "Pricing",
        botsWeBuildTitle: "Bots We Build",
        niche1Title: "Online Shop Bot",
        niche1F1: "Catalog",
        niche1F2: "Cart",
        niche1F3: "Click/Payme payment",
        niche2Title: "Restaurant Bot",
        niche2F1: "Menu",
        niche2F2: "Order",
        niche2F3: "Delivery",
        niche3Title: "Barber/Salon Bot",
        niche3F1: "Online booking",
        niche3F2: "Reminders",
        niche3F3: "Customer base",
        niche4Title: "Education Center Bot",
        niche4F1: "Registration",
        niche4F2: "Schedule",
        niche4F3: "Payment",
        niche5Title: "Fitness/Gym Bot",
        niche5F1: "Subscription",
        niche5F2: "Workout schedule",
        niche5F3: "Trainer",
        niche6Title: "Clinic Bot",
        niche6F1: "Doctor appointment",
        niche6F2: "Reminders",
        niche6F3: "Results",
        orderNow: "Order Now",
        faqMainTitle: "Frequently Asked Questions",
        faq1Q: "How long does it take to set up the bot?",
        faq1A: "Once you provide all the necessary information (menu, prices, photos), it takes 7 working days to fully configure the bot.",
        faq2Q: "Is there a monthly fee?",
        faq2A: "No, there is no monthly fee for the bot itself. You pay once and the bot is yours forever. There may be a small annual fee for server hosting and domain.",
        faq3Q: "Can I receive payments via Click and Payme?",
        faq3A: "Yes, we can connect popular payment systems in Uzbekistan to your bot. To do this, you must have a legal entity (LLC or IE).",
        faq4Q: "How does technical support work?",
        faq4A: "After handing over the project, we provide 1 to 3 months of free technical support depending on the chosen plan. After that, we can continue supporting you under a contract.",
        seoH2: "What is a Restaurant Telegram Bot?",
        seoP1: "A Telegram bot is an automatic order-taking system for restaurants. Customers can view the menu through Telegram, place an order, and pay via Click or Payme.",
        seoP2: "The bot works 24/7 and makes order management easier for restaurant owners. This system is a very convenient solution for the restaurant business in Tashkent and throughout Uzbekistan.",
        seoH3: "How does a Telegram bot help the restaurant business?",
        seoLi1: "Automatically accepts orders",
        seoLi2: "Customers view the menu quickly",
        seoLi3: "Payment is processed via Click and Payme",
        seoLi4: "Saves time for restaurant staff",
        seoLi5: "Order management becomes easier",
        roiTitle: "How long does the Telegram bot take to pay off?",
        roiDailyOrdersLabel: "Per day:",
        roiOrderValueLabel: "1 order:",
        roiDailyRevLabel: "Daily revenue:",
        roiBotPriceLabel: "Bot price:",
        roiConclusion: "So the bot pays for itself in roughly 1 day!",
        niches: [
            "restaurants",
            "clinics",
            "fitness clubs",
            "beauty salons",
            "education centers",
            "auto services"
        ]
    }
};

let currentLang = 'uz';

const langDropdown = document.getElementById('langDropdown');
const langBtn = document.getElementById('langBtn');
const currentLangFlag = document.getElementById('currentLangFlag');
const currentLangText = document.getElementById('currentLangText');
const langOptions = document.querySelectorAll('.lang-option');

// Toggle dropdown
langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
});

// Handle language selection
langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        const lang = option.dataset.lang;
        const flag = option.dataset.flag;
        const name = option.dataset.name;

        currentLang = lang;
        document.documentElement.lang = lang;

        // Update UI button
        currentLangFlag.innerText = flag;
        currentLangText.innerText = name;

        // Update active state in menu
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');

        // Apply translations
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerText = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (translations[lang] && translations[lang][key]) {
                el.title = translations[lang][key];
            }
        });
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all
        faqItems.forEach(faq => faq.classList.remove('active'));

        // Toggle current
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Phone formatter "+998 XX XXX XX XX"
const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function (e) {
    let val = this.value.replace(/\D/g, '');
    if (val.length < 3) {
        val = '998';
    } else if (!val.startsWith('998')) {
        val = '998' + val;
    }

    if (val.length > 12) val = val.slice(0, 12);

    let formatted = '+998 ';
    if (val.length > 3) {
        formatted += val.slice(3, 5);
    }
    if (val.length > 5) {
        formatted += ' ' + val.slice(5, 8);
    }
    if (val.length > 8) {
        formatted += ' ' + val.slice(8, 10);
    }
    if (val.length > 10) {
        formatted += ' ' + val.slice(10, 12);
    }

    this.value = formatted;
});

phoneInput.addEventListener('blur', function () {
    if (this.value === '+998 ') { }
});

phoneInput.addEventListener('focus', function () {
    if (this.value === '') {
        this.value = '+998 ';
    }
});

// Form Submission
const form = document.getElementById('lead-form-element');
const submitBtn = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const phone = phoneInput.value;
    if (phone.length < 17) {
        alert("Telefon raqamini to'liq kiriting / Введите номер телефона полностью / Enter full phone number");
        return;
    }

    // Generate time based on Tashkent / local timezone
    const dateStr = new Date().toLocaleString("en-US", { timeZone: "Asia/Tashkent" });

    const telegramMsg = `📩 Yangi AD lead!\n📱 Telefon: ${phone}\n🌐 Til: ${currentLang.toUpperCase()}\n🕐 Vaqt: ${dateStr}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    submitBtn.style.opacity = '0.5';
    submitBtn.disabled = true;

    try {
        // Ignore actual fetch block in this demo if tokens are placeholders, 
        // but code must be functional once tokens are swapped.
        if (BOT_TOKEN !== 'YOUR_BOT_TOKEN' && CHAT_ID !== 'YOUR_CHAT_ID') {
            await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: telegramMsg,
                })
            });
        } else {
            console.log('Test send: ', telegramMsg);
        }

        form.reset();
        phoneInput.value = '+998 ';
        successMessage.innerText = translations[currentLang].formSuccess;
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);

    } catch (err) {
        console.error(err);
        alert('Xatolik yuz berdi / Ошибка / Error');
    } finally {
        submitBtn.style.opacity = '1';
        submitBtn.disabled = false;
    }
});

// Smooth Scroll for Internal Anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetAttr = this.getAttribute('href');

        // Handle standalone "#" hrefs like in brand-logo
        if (targetAttr === "#") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const target = document.querySelector(targetAttr);
        if (target) {
            e.preventDefault();

            const offset = 120;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Sticky CTA Observer (Hide when lead form is visible)
const stickyCta = document.querySelector('.mobile-sticky-cta');
const leadFormSection = document.getElementById('lead-form');

if (stickyCta && leadFormSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stickyCta.classList.add('hidden');
            } else {
                stickyCta.classList.remove('hidden');
            }
        });
    }, {
        root: null,
        threshold: 0.1 // Hide exactly when 10% of the form enters the viewport
    });

    observer.observe(leadFormSection);
}

// Scroll Animations Observer
const animateElements = document.querySelectorAll('.animate-on-scroll');
if (animateElements.length > 0) {
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once animated
                // scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animateElements.forEach(el => scrollObserver.observe(el));
}

// Headline Niche Rotation Logic
let nicheIndex = 0;
const nicheElement = document.getElementById("niche-word");

if (nicheElement) {
    setInterval(() => {
        // 1. Fade out and slide down
        nicheElement.classList.add("fade-out");

        setTimeout(() => {
            // Get current language niches array
            const currentNiches = translations[currentLang].niches;

            // Advance index
            nicheIndex = (nicheIndex + 1) % currentNiches.length;

            // Update text
            nicheElement.textContent = currentNiches[nicheIndex];

            // 2. Instantly jump text above baseline (-15px) while still invisible
            nicheElement.classList.add("slide-up");

            // Give the browser a tiny frame to apply the jump without transitioning
            setTimeout(() => {
                // 3. Remove jump and fade-out to trigger smooth slide down to 0
                nicheElement.classList.remove("slide-up", "fade-out");
            }, 30);

        }, 400); // Waits for the 0.3s fade-out to complete

    }, 2500);
}
