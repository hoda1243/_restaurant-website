document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    const langButtons = document.querySelectorAll('.lang-btn');
    const htmlElement = document.getElementById('html-root');
    
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.services': 'Services',
            'nav.contact': 'Contact',
            'home.heroTitle': 'Experience Fine Dining',
            'home.heroText': 'Discover the authentic flavors of Mediterranean cuisine prepared by our award-winning chefs using the freshest local ingredients.',
            'home.viewMenu': 'View Our Menu',
            'home.reserveTable': 'Reserve a Table',
            'home.specialtiesTitle': 'Our Specialties',
            'home.specialty1Title': 'Grilled Salmon',
            'home.specialty1Desc': 'Fresh Atlantic salmon with herbs and lemon butter sauce.',
            'home.specialty2Title': 'Prime Beef Steak',
            'home.specialty2Desc': 'Premium cut served with roasted vegetables and signature sauce.',
            'home.specialty3Title': 'Truffle Pasta',
            'home.specialty3Desc': 'Homemade pasta with black truffle and parmesan cheese.',
            'home.feature1Title': 'Fresh Ingredients',
            'home.feature1Desc': 'We source only the freshest local ingredients daily.',
            'home.feature2Title': 'Award Winning',
            'home.feature2Desc': 'Recognized as one of the best restaurants in the city.',
            'home.feature3Title': 'Open Daily',
            'home.feature3Desc': 'We\'re open 7 days a week for lunch and dinner.',
            'footer.tagline': 'Fine dining experience since 2005',
            'footer.quickLinks': 'Quick Links',
            'footer.contact': 'Contact Us',
            'footer.address': '123 Gourmet Street, Food City',
            'footer.phone': '+1 (123) 456-7890',
            'footer.followUs': 'Follow Us',
            'footer.rights': 'All rights reserved.',
            'about.pageTitle': 'About Palm Restaurant',
            'about.pageSubtitle': 'Our story, passion, and commitment to culinary excellence',
            'about.ourStory': 'Our Story',
            'about.story1': 'Founded in 2005 by Chef Marco Palmieri, our restaurant began as a small family-owned establishment with a simple mission: to serve exceptional food in a warm, inviting atmosphere.',
            'about.story2': 'Over the years, we\'ve grown into a renowned dining destination, but we\'ve never lost sight of our roots. Every dish is prepared with the same passion and attention to detail that Chef Marco instilled from the beginning.',
            'about.story3': 'Today, under the leadership of Chef Isabella Palmieri, we continue to innovate while honoring traditional cooking techniques and flavors.',
            'about.ourValues': 'Our Values',
            'about.value1Title': 'Sustainability',
            'about.value1Desc': 'We partner with local farmers and use eco-friendly practices to minimize our environmental impact.',
            'about.value2Title': 'Passion',
            'about.value2Desc': 'Our team is driven by a genuine love for food and creating memorable dining experiences.',
            'about.value3Title': 'Community',
            'about.value3Desc': 'We believe in giving back to our community and supporting local initiatives.',
            'about.ourTeam': 'Meet Our Team',
            'about.chefName': 'Isabella Palmieri',
            'about.chefRole': 'Head Chef',
            'about.founderName': 'Marco Palmieri',
            'about.founderRole': 'Founder & Consultant',
            'about.sommelierName': 'David Chen',
            'about.sommelierRole': 'Sommelier',
            'services.pageTitle': 'Our Menu & Services',
            'services.pageSubtitle': 'Discover our culinary offerings and dining experiences',
            'services.appetizers': 'Appetizers',
            'services.mainCourses': 'Main Courses',
            'services.desserts': 'Desserts',
            'services.drinks': 'Drinks',
            'services.app1Name': 'Tomato Bruschetta',
            'services.app1Desc': 'Toasted bread topped with tomatoes, garlic, fresh basil and olive oil.',
            'services.app2Name': 'Fried Calamari',
            'services.app2Desc': 'Lightly battered squid served with lemon aioli and marinara sauce.',
            'services.app3Name': 'Mediterranean Salad',
            'services.app3Desc': 'Fresh greens with feta cheese, olives, cucumbers, and house vinaigrette.',
            'services.main1Name': 'Grilled Salmon',
            'services.main1Desc': 'Atlantic salmon with herb butter, asparagus, and roasted potatoes.',
            'services.main2Name': 'Prime Ribeye Steak',
            'services.main2Desc': '12oz ribeye with red wine reduction, grilled vegetables, and mashed potatoes.',
            'services.main3Name': 'Truffle Mushroom Pasta',
            'services.main3Desc': 'Homemade fettuccine with wild mushrooms, truffle oil, and parmesan.',
            'services.otherServices': 'Other Services',
            'services.service1Title': 'Private Events',
            'services.service1Desc': 'Host your special occasions in our private dining room for up to 50 guests.',
            'services.service2Title': 'Catering',
            'services.service2Desc': 'Let us bring the Palm Restaurant experience to your home or office.',
            'services.service3Title': 'Wine Tasting',
            'services.service3Desc': 'Monthly wine tasting events featuring selections from around the world.',
            'services.service4Title': 'Cooking Classes',
            'services.service4Desc': 'Learn culinary techniques from our chefs in intimate cooking workshops.',
            'contact.pageTitle': 'Contact Us',
            'contact.pageSubtitle': 'We\'d love to hear from you. Reach out for reservations or inquiries.',
            'contact.getInTouch': 'Get in Touch',
            'contact.infoText': 'Whether you have questions about our menu, want to make a reservation, or are interested in hosting an event, our team is here to assist you.',
            'contact.visitUs': 'Visit Us',
            'contact.address': '123 Gourmet Street, Food City, FC 10001',
            'contact.callUs': 'Call Us',
            'contact.emailUs': 'Email Us',
            'contact.hours': 'Opening Hours',
            'contact.hoursWeekdays': 'Monday - Friday: 11:00 AM - 10:00 PM',
            'contact.hoursWeekend': 'Saturday - Sunday: 10:00 AM - 11:00 PM',
            'contact.followUs': 'Follow Us',
            'contact.sendMessage': 'Send a Message',
            'contact.name': 'Full Name',
            'contact.email': 'Email Address',
            'contact.phone': 'Phone Number',
            'contact.subject': 'Subject',
            'contact.selectOption': 'Select an option',
            'contact.reservation': 'Reservation Inquiry',
            'contact.catering': 'Catering Service',
            'contact.event': 'Private Event',
            'contact.feedback': 'Feedback',
            'contact.other': 'Other',
            'contact.message': 'Message',
            'contact.sendBtn': 'Send Message',
            'contact.findUs': 'Find Us',
            'contact.mapNote': 'Our restaurant is located in the heart of Food City, with ample parking available.'
        },
        ar: {
            'nav.home': 'الرئيسية',
            'nav.about': 'عن المطعم',
            'nav.services': 'الخدمات',
            'nav.contact': 'اتصل بنا',
            'home.heroTitle': 'استمتع بتجربة الطعام الفاخر',
            'home.heroText': 'اكتشف النكهات الأصيلة للمطبخ المتوسطي التي يعدها طهاتنا الحاصلون على جوائز باستخدام المكونات المحلية الطازجة.',
            'home.viewMenu': 'عرض قائمة الطعام',
            'home.reserveTable': 'احجز طاولة',
            'home.specialtiesTitle': 'أطباقنا المميزة',
            'home.specialty1Title': 'سمك السلمون المشوي',
            'home.specialty1Desc': 'سمك سلمون الأطلنطي الطازج مع الأعشاب وصلصة الزبدة والليمون.',
            'home.specialty2Title': 'ستيك لحم البقر الممتاز',
            'home.specialty2Desc': 'قطعة لحم ممتازة تقدم مع خضروات محمصة وصلصة خاصة.',
            'home.specialty3Title': 'باستا الكمأة',
            'home.specialty3Desc': 'باستا منزلية مع كمأة سوداء وجبن البارميزان.',
            'home.feature1Title': 'مكونات طازجة',
            'home.feature1Desc': 'نستخدم فقط المكونات المحلية الطازجة يوميًا.',
            'home.feature2Title': 'حائز على جوائز',
            'home.feature2Desc': 'معترف به كواحد من أفضل المطاعم في المدينة.',
            'home.feature3Title': 'مفتوح يوميًا',
            'home.feature3Desc': 'نحن مفتوحون 7 أيام في الأسبوع للغداء والعشاء.',
            'footer.tagline': 'تجربة طعام فاخرة منذ 2005',
            'footer.quickLinks': 'روابط سريعة',
            'footer.contact': 'اتصل بنا',
            'footer.address': 'شارع الذواقة 123، مدينة الطعام',
            'footer.phone': '+1 (123) 456-7890',
            'footer.followUs': 'تابعنا',
            'footer.rights': 'جميع الحقوق محفوظة.',
            'about.pageTitle': 'عن مطعم النخيل',
            'about.pageSubtitle': 'قصتنا، شغفنا، والتزامنا بالتميز في الطهي',
            'about.ourStory': 'قصتنا',
            'about.story1': 'تأسس مطعمنا في عام 2005 على يد الشيف ماركو بالميري، حيث بدأ كمؤسعة عائلية صغيرة بمهمة بسيطة: تقديم طعام استثنائي في جو دافئ وجذاب.',
            'about.story2': 'على مر السنين، تطورنا إلى وجهة طعام شهيرة، لكننا لم نفقد أبدًا بصيرة جذورنا. كل طبق يُعد بنفس الشغف والاهتمام بالتفاصيل الذي غرسه الشيف ماركو منذ البداية.',
            'about.story3': 'اليوم، تحت قيادة الشيف إيزابيلا بالميري، نواصل الابتكار مع الحفاظ على تقنيات ونكهات الطهي التقليدية.',
            'about.ourValues': 'قيمنا',
            'about.value1Title': 'الاستدامة',
            'about.value1Desc': 'نتعاون مع المزارعين المحليين ونستخدم ممارسات صديقة للبيئة لتقليل تأثيرنا البيئي.',
            'about.value2Title': 'الشغف',
            'about.value2Desc': 'يحرك فريقنا حب حقيقي للطعام وخلق تجارب طعام لا تُنسى.',
            'about.value3Title': 'المجتمع',
            'about.value3Desc': 'نؤمن بإعادة العطاء لمجتمعنا ودعم المبادرات المحلية.',
            'about.ourTeam': 'التق بفريقنا',
            'about.chefName': 'إيزابيلا بالميري',
            'about.chefRole': 'الشيف الرئيسي',
            'about.founderName': 'ماركو بالميري',
            'about.founderRole': 'المؤسس والمستشار',
            'about.sommelierName': 'ديفيد تشين',
            'about.sommelierRole': 'خبير النبيذ',
            'services.pageTitle': 'قائمة الطعام والخدمات',
            'services.pageSubtitle': 'اكتشف عروضنا الغذائية وتجارب الطعام',
            'services.appetizers': 'المقبلات',
            'services.mainCourses': 'الأطباق الرئيسية',
            'services.desserts': 'الحلويات',
            'services.drinks': 'المشروبات',
            'services.app1Name': 'بروسكيتا الطماطم',
            'services.app1Desc': 'خبز محمص مغطى بالطماطم والثوم والريحان الطازج وزيت الزيتون.',
            'services.app2Name': 'كالاماري مقلي',
            'services.app2Desc': 'حبار مخلل خفيفًا يقدم مع صلصة أيولي الليمون والمارينارا.',
            'services.app3Name': 'سلطة البحر المتوسط',
            'services.app3Desc': 'خضروات طازجة مع جبن الفيتا والزيتون والخيار وصلصة الخل المنزلية.',
            'services.main1Name': 'سمك السلمون المشوي',
            'services.main1Desc': 'سمك السلمون الأطلنطي مع زبدة الأعشاب، الهليون، والبطاطس المحمصة.',
            'services.main2Name': 'ستيك ريب آي الممتاز',
            'services.main2Desc': 'ستيك ريب آي 12 أونصة مع صلصة النبيذ الأحمر، خضروات مشوية، وبطاطس مهروسة.',
            'services.main3Name': 'باستا الكمأة والفطر',
            'services.main3Desc': 'فيتوتشيني منزلي مع فطر بري، زيت الكمأة، وجبن البارميزان.',
            'services.otherServices': 'خدمات أخرى',
            'services.service1Title': 'مناسبات خاصة',
            'services.service1Desc': 'استضف مناسباتك الخاصة في غرفة الطعام الخاصة لدينا لعدد يصل إلى 50 ضيفًا.',
            'services.service2Title': 'توصيل الطعام',
            'services.service2Desc': 'دعنا نقدم تجربة مطعم النخيل إلى منزلك أو مكتبك.',
            'services.service3Title': 'تذوق النبيذ',
            'services.service3Desc': 'فعاليات تذوق نبيذ شهرية تضم تشكيلة من جميع أنحاء العالم.',
            'services.service4Title': 'دروس الطبخ',
            'services.service4Desc': 'تعلم تقنيات الطهي من طهاتنا في ورش عمل طبخ حميمة.',
            'contact.pageTitle': 'اتصل بنا',
            'contact.pageSubtitle': 'نود أن نسمع منك. تواصل معنا للحجوزات أو الاستفسارات.',
            'contact.getInTouch': 'ابق على تواصل',
            'contact.infoText': 'سواء كان لديك أسئلة حول قائمة الطعام، أو ترغب في إجراء حجز، أو مهتم باستضافة حدث، فريقنا هنا لمساعدتك.',
            'contact.visitUs': 'زورنا',
            'contact.address': 'شارع الذواقة 123، مدينة الطعام، الرمز البريدي 10001',
            'contact.callUs': 'اتصل بنا',
            'contact.emailUs': 'راسلنا',
            'contact.hours': 'ساعات العمل',
            'contact.hoursWeekdays': 'الإثنين - الجمعة: 11:00 صباحًا - 10:00 مساءً',
            'contact.hoursWeekend': 'السبت - الأحد: 10:00 صباحًا - 11:00 مساءً',
            'contact.followUs': 'تابعنا',
            'contact.sendMessage': 'أرسل رسالة',
            'contact.name': 'الاسم الكامل',
            'contact.email': 'عنوان البريد الإلكتروني',
            'contact.phone': 'رقم الهاتف',
            'contact.subject': 'الموضوع',
            'contact.selectOption': 'اختر خيارًا',
            'contact.reservation': 'استفسار عن الحجز',
            'contact.catering': 'خدمة التوصيل',
            'contact.event': 'مناسبة خاصة',
            'contact.feedback': 'تعليق',
            'contact.other': 'أخرى',
            'contact.message': 'الرسالة',
            'contact.sendBtn': 'أرسل الرسالة',
            'contact.findUs': 'اعثر علينا',
            'contact.mapNote': 'يقع مطعمنا في قلب مدينة الطعام، مع مواقف سيارات واسعة.'
        }
    };
    
    function changeLanguage(lang) {
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        langButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.getElementById(`lang-${lang}`).classList.add('active');
        
        localStorage.setItem('preferred-language', lang);
    }
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.id.split('-')[1];
            changeLanguage(lang);
        });
    });
    
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    changeLanguage(savedLang);
    
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuContents = document.querySelectorAll('.menu-content');
    
    if (menuTabs.length > 0) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const category = this.getAttribute('data-category');
                
                menuTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                menuContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === category) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});