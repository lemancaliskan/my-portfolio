export const translations = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    home: {
      title: "Hi, I'm Leman Çalışkan",
      subtitle: 'Software Developer',
      description: "As a Software Developer, I bridge the gap between the analytical power of Data Science and modern software architecture. I specialize in transforming complex machine learning models into user-centric, high-performance digital solutions. By combining data-driven backend logic with intuitive interfaces and leveraging my rapid learning ability, I deliver clean, sustainable, and impactful code in an ever-evolving technology ecosystem.",
      viewProjects: 'View Projects',
      contactMe: 'Contact Me'
    },
    
    projects: {
      title: 'Projects',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      project1: {
        name: 'SleepMetrics',
        description: 'Sleep Health & Lifestyle Analysis Tool: Advanced sleep quality diagnostic tool using RandomForest & GradientBoosting with 99.08% accuracy. Features a custom Python GUI and Streamlit deployment for comprehensive sleep pattern analysis.',
        tags: ['Python', 'Machine Learning', 'Healthcare', 'Data Science','CustomTkinter', 'GUI', 'Streamlit' ]
      },
      project2: {
        name: 'CardioMetrics-Core',
        description: 'Cardiovascular Risk Assessment Tool: An advanced AI-powered diagnostic application leveraging Scikit-learn to evaluate cardiovascular risk factors with high precision. Features a custom Python GUI and Streamlit deployment for real-time clinical data analysis and comprehensive health insights.',
        tags: ['Python', 'Machine Learning', 'Healthcare', 'Data Analysis', 'CustomTkinter', 'GUI', 'Streamlit' ]
      },
      project3: {
        name: 'Shelfy',
        description: 'Digital Library Management System - A modern Python/CustomTkinter app featuring a sleek card-based dashboard for book collections, advanced filtering, and real-time search capabilities.',
        tags: ['Python', 'CustomTkinter', 'GUI', 'Database', 'CRUD']
      }
    },
    skills: {
      title: 'Skills',
      programming: 'Programming',
      tools: 'Tools & Technologies',
      soft: 'Soft Skills'
    },
    contact: {
      title: 'Contact',
      subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
      description: "",
      form: {
        name: 'Name',
        surname: 'Surname',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        sending: 'Sending...',
        success: 'Message sent successfully!',
        error: 'Failed to send message. Please try again.'
      }
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      projects: 'Projeler',
      skills: 'Beceriler',
      contact: 'İletişim'
    },
    home: {
      title: "Merhaba, Ben Leman Çalışkan",
      subtitle: 'Yazılım Geliştirici',
      description: "Yazılım Geliştirici olarak, veri biliminin analitik gücünü modern yazılım mimarisiyle birleştiriyorum. Karmaşık makine öğrenmesi modellerini, kullanıcı odaklı ve yüksek performanslı dijital çözümlere dönüştürmeye odaklanıyorum. Veri odaklı arka uç mantığı ile estetik arayüzler arasında köprü kurarken, hızlı öğrenme yeteneğimle sürekli gelişen teknoloji ekosisteminde fark yaratan, temiz ve sürdürülebilir kodlar üretiyorum.",
      viewProjects: 'Projeleri Görüntüle',
      contactMe: 'İletişime Geç'
    },
    projects: {
      title: 'Projeler',
      viewDemo: 'Demo Görüntüle',
      viewCode: 'Kodu Görüntüle',
      project1: {
        name: 'SleepMetrics',
        description: 'Uyku Sağlığı ve Yaşam Tarzı Analiz Aracı: %99,08 doğruluk oranıyla RandomForest ve GradientBoosting kullanan gelişmiş uyku kalitesi teşhis aracı. Kapsamlı uyku düzeni analizi için özel bir Python GUI ve Streamlit dağıtımı içerir.',
        tags: ['Python', 'Makine Öğrenmesi', 'Sağlık', 'Veri Bilimi','CustomTkinter', 'GUI', 'Streamlit' ]
      },
      project2: {
        name: 'CardioMetrics-Core',
        description: 'Kardiyovasküler Risk Değerlendirme Aracı: Yüksek hassasiyetle kardiyovasküler risk faktörlerini değerlendirmek için Scikit-learn kullanan gelişmiş yapay zeka destekli bir tanı uygulaması. Gerçek zamanlı klinik veri analizi ve kapsamlı sağlık bilgileri için özel bir Python GUI ve Streamlit dağıtımı içerir.',
        tags: ['Python', 'Makine Öğrenmesi', 'Sağlık', 'Veri Analizi', 'CustomTkinter', 'GUI', 'Streamlit']
      },
      project3: {
        name: 'Shelfy',
        description: 'Dijital Kütüphane Yönetim Sistemi - Kitap koleksiyonları, gelişmiş filtreleme ve gerçek zamanlı arama özellikleri için zarif kart tabanlı bir gösterge paneline sahip modern Python/CustomTkinter uygulaması.',
        tags: ['Python', 'CustomTkinter', 'GUI', 'Veritabanı', 'CRUD']
      }
    },
    skills: {
      title: 'Beceriler',
      programming: 'Programlama',
      tools: 'Araçlar ve Teknolojiler',
      soft: 'Beceriler'
    },
    contact: {
      title: 'İletişim',
      subtitle: "Yeni projeler, yaratıcı fikirler veya vizyonunuzun bir parçası olma fırsatları hakkında konuşmaya her zaman açığım.",
      description: '',
      form: {
        name: 'Ad',
        surname: 'Soyad',
        email: 'E-posta',
        message: 'Mesaj',
        send: 'Mesaj Gönder',
        sending: 'Gönderiliyor...',
        success: 'Mesaj başarıyla gönderildi!',
        error: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'
      }
    }
  }
};

export type TranslationKeys = typeof translations.en;
