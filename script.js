document.addEventListener("DOMContentLoaded", () => {

    // --- Language Translation Data ---
    const translations = {
        "en": {
            "navHome": "Home",
            "navStory": "Our Story",
            "navImpact": "Our Impact",
            "navGallery": "Gallery",
            "heroTitle": "TechConnect LAN",
            "heroSubtitle": "Connecting Communities Through Technology",
            "legacyTitle": "Legacy Website:",
            "legacyText": "This is an archive preserving the history of TechConnect LAN. Operations were terminated in 2021 due to the COVID-19 pandemic.",
            "storyTitle": "Our Story",
            "storyDesc1": "Founded in 2016, TechConnect LAN was an innovative internet café located in an underprivileged community in Ribeirão Preto, Brazil. With 25 workstations and a dedicated team, the company stood out for providing access to technology during a critical time of digital transition.",
            "storyDesc2": "TechConnect LAN was not just a place for gaming and internet use, but a true hub of connection, learning, and digital inclusion for the entire community.",
            "impactTitle": "Our Impact",
            "impactCard1Title": "Tech Access & Management",
            "impactCard1Desc": "Managed a network of 25 computers (Windows, Linux, and macOS), utilizing Smartlaunch cybercafé software for billing, session control, and reporting to ensure fair and secure access for all users.",
            "impactCard2Title": "Digital Literacy",
            "impactCard2Desc": "Organized and delivered free digital literacy workshops and internet safety presentations for students and senior citizens, empowering the community with vital digital skills.",
            "impactCard3Title": "Full-Service IT",
            "impactCard3Desc": "Oversaw all IT operations, including hardware/software diagnostics and repair, vendor management for parts, asset tracking, and structured system backups to ensure high uptime and reliability.",
            "galleryTitle": "From Our Archives",
            "galleryCard1Title": "Empowering the Next Generation (2019)",
            "galleryCard1Desc": "In 2019, we had the honor of bringing the TechConnect experience to the E.E. Maria Ignez Lopes Rossi school, teaching essential classes on informatics and crucial sensitive data protection, reinforcing our belief in education for a safer digital future.",
            "galleryCard2Title": "Our Roots (2016)",
            "galleryCard2Desc": "This 2016 photo captures the essence of TechConnect in its earliest days. In one of our first talks on internet security, we shared essential knowledge for safe browsing, proving that digital inclusion is not just about access, but about empowerment and protection.",
            "footerText": "© 2025 TechConnect LAN | Legacy Archive (2016 - 2021)"
        },
        "pt": {
            "navHome": "Início",
            "navStory": "Nossa História",
            "navImpact": "Nosso Impacto",
            "navGallery": "Galeria",
            "heroTitle": "TechConnect LAN",
            "heroSubtitle": "Conectando Comunidades Através da Tecnologia",
            "legacyTitle": "Site de Legado:",
            "legacyText": "Este é um arquivo que preserva a história da TechConnect LAN. As operações foram encerradas em 2021 devido à pandemia de COVID-19.",
            "storyTitle": "Nossa História",
            "storyDesc1": "Fundada em 2016, a TechConnect LAN foi uma inovadora lan house localizada em uma comunidade carente em Ribeirão Preto, Brasil. Com 25 estações de trabalho e uma equipe dedicada, a empresa se destacou por fornecer acesso à tecnologia durante um momento crítico de transição digital.",
            "storyDesc2": "A TechConnect LAN não era apenas um local para jogos e uso da internet, mas um verdadeiro centro de conexão, aprendizado e inclusão digital para toda a comunidade.",
            "impactTitle": "Nosso Impacto",
            "impactCard1Title": "Acesso e Gestão de Tecnologia",
            "impactCard1Desc": "Gerenciamos uma rede de 25 computadores (Windows, Linux e macOS), utilizando o software de cybercafé Smartlaunch para faturamento, controle de sessão e relatórios, garantindo acesso justo e seguro para todos.",
            "impactCard2Title": "Alfabetização Digital",
            "impactCard2Desc": "Organizamos e ministramos workshops gratuitos de alfabetização digital e palestras sobre segurança na internet para estudantes e idosos, capacitando a comunidade com habilidades digitais vitais.",
            "impactCard3Title": "TI Completo",
            "impactCard3Desc": "Supervisionamos todas as operações de TI, incluindo diagnóstico e reparo de hardware/software, gerenciamento de fornecedores de peças, rastreamento de ativos e backups estruturados do sistema para garantir alta disponibilidade.",
            "galleryTitle": "Dos Nossos Arquivos",
            "galleryCard1Title": "Capacitando a Próxima Geração (2019)",
            "galleryCard1Desc": "Em 2019, tivemos a honra de levar a experiência da TechConnect para o laboratório de informática da E.E. Maria Ignez Lopes Rossi, ministrando aulas essenciais sobre informática e a crucial proteção de dados sensíveis, reforçando nossa crença na educação para um futuro digital mais seguro.",
            "galleryCard2Title": "Nossas Raízes (2016)",
            "galleryCard2Desc": "Esta foto de 2016 captura a essência da TechConnect em seus primórdios. Em uma de nossas primeiras palestras sobre segurança na internet, compartilhamos conhecimentos essenciais para uma navegação segura, provando que a inclusão digital não é apenas sobre acesso, mas sobre capacitar e proteger.",
            "footerText": "© 2025 TechConnect LAN | Arquivo de Legado (2016 - 2021)"
        }
    };

    const langEnBtn = document.getElementById("lang-en");
    const langPtBtn = document.getElementById("lang-pt");

    // --- Language Switcher Function ---
    const setLanguage = (lang) => {
        // Set text content
        document.querySelectorAll("[data-key]").forEach(element => {
            const key = element.getAttribute("data-key");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update active button class
        if (lang === 'pt') {
            langPtBtn.classList.add('active');
            langEnBtn.classList.remove('active');
        } else {
            langEnBtn.classList.add('active');
            langPtBtn.classList.remove('active');
        }

        // Save preference
        localStorage.setItem('techconnect-lang', lang);
    };

    // --- Event Listeners for Lang Buttons ---
    langEnBtn.addEventListener("click", (e) => {
        e.preventDefault();
        setLanguage("en");
    });

    langPtBtn.addEventListener("click", (e) => {
        e.preventDefault();
        setLanguage("pt");
    });

    // --- Check for saved language or browser default ---
    const savedLang = localStorage.getItem('techconnect-lang');
    const browserLang = navigator.language || navigator.userLanguage;

    if (savedLang) {
        setLanguage(savedLang);
    } else if (browserLang.startsWith('pt')) {
        setLanguage('pt');
    } else {
        setLanguage('en'); // Default
    }

    // --- Intersection Observer for Fade-in Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe all elements with the 'fade-in' class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

});