import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    ar: {
        translation: {
            nav: {
                features: "المميزات",
                useCases: "حالات الاستخدام",
                howItWorks: "كيف يعمل",
                pricing: "الأسعار",
                dashboard: "لوحة التحكم",
                login: "تسجيل الدخول",
                register: "إنشاء حساب"
            },
            hero: {
                tag: "نظام إدارة الطوابير الذكي",
                title_prefix: "لا طوابير،",
                title_suffix: "بعد اليوم.",
                description: "استبدل الطوابير الجسدية بتذاكر رقمية ذكية. دع عملاءك يتتبعون دورهم من هواتفهم، وتخلص من الازدحام والفوضى للأبد.",
                cta_primary: "ابدأ التجربة المجانية",
                cta_secondary: "شاهد العرض التوضيحي",
                preview_happy: "عميل سعيد",
                preview_happy_desc: "ينتظر دوره في المقهى، وليس في الطابور!",
                preview_me: "أنا هنا!",
                ticket_title: "صالون الحلاقة",
                ticket_number: "تذكرة رقم #A42",
                ticket_turn: "دورك الحالي",
                ticket_serving: "جاري الخدمة",
                ticket_time: "~15 دقيقة",
                trusted_by: "موثوق من قبل قادة الصناعة"
            },
            socialProof: {
                title: "يثق بنا أكثر من 2000 شركة"
            },
            problems: {
                title_prefix: "مشكلة الانتظار",
                title_highlight: "حقيقية ومكلفة",
                subtitle: "الطوابير التقليدية هي العدو الأول لرضا العملاء وكفاءة العمل.",
                items: [
                    {
                        title: "فوضى وقت الذروة",
                        desc: "الازدحام في الأعياد والمواسم يسبب توترًا للموظفين والعملاء على حد سواء."
                    },
                    {
                        title: "عملاء غاضبون",
                        desc: "عدم معرفة وقت الانتظار يؤدي إلى مغادرة العملاء وترك تقييمات سلبية."
                    },
                    {
                        title: "عمليات غير فعالة",
                        desc: "إدارة الطوابير يدويًا تضيع وقت الموظفين وتقلل من جودة الخدمة."
                    },
                    {
                        title: "خسارة الأرباح",
                        desc: "كل عميل يغادر بسبب الطابور هو ربح ضائع لعملك."
                    }
                ]
            },
            solution: {
                title: "كيف يغير NoWait قواعد اللعبة؟",
                subtitle: "حل بسيط وأنيق يحول فوضى الانتظار إلى تجربة رقمية سلسة.",
                steps: [
                    { title: "احصل على تذكرة", desc: "يمسح العميل رمز QR أو يزور الرابط للحصول على تذكرة رقمية في ثوانٍ." },
                    { title: "تابع دورك", desc: "تحديثات لحظية لمكانك في الطابور والوقت المتبقي المتوقع." },
                    { title: "احصل على الخدمة", desc: "إشعار تلقائي عندما يحين دورك. لا داعي للانتظار واقفاً." }
                ],
                stats: [
                    { value: "90%", label: "تقليل قلق الانتظار" },
                    { value: "40%", label: "خدمة أسرع" },
                    { value: "65%", label: "توفير في الوقت" },
                    { value: "4.9", label: "رضا العملاء" }
                ]
            },
            useCases: {
                title: "مصمم لكل القطاعات",
                subtitle: "من المتاجر الصغيرة إلى المؤسسات الكبيرة، NoWait يتكيف مع احتياجاتك بمرونة.",
                cta: "اكتشف المزيد",
                items: [
                    { title: "صالونات الحلاقة", desc: "العديد من الحلاقين، صف انتظار واحد سلس. ينتظر العملاء براحة في مقهى قريب." },
                    { title: "العيادات والمستشفيات", desc: "قلل من ازدحام غرف الانتظار. امنح الأولوية للحالات الطارئة بلمسة زر." },
                    { title: "المؤسسات الحكومية", desc: "نظم تدفق المراجعين في المكاتب الحكومية والخدمية بكفاءة عالية." },
                    { title: "المناسبات والفعاليات", desc: "تحكم في الدخول وتدفق الضيوف في الحفلات والمناسبات الكبيرة." }
                ]
            },
            features: {
                title: "كل ما تحتاجه لإدارة طوابير احترافية",
                subtitle: "ميزات شاملة مصممة لراحة بالك وراحة عملائك.",
                items: [
                    { title: "تحديثات لحظية", desc: "تتبع مباشر للموقع ووقت الانتظار المتوقع للعملاء." },
                    { title: "تذاكر QR ذكية", desc: "لا حاجة لتثبيت تطبيق. يعمل مباشرة من المتصفح." },
                    { title: "طوابير متعددة", desc: "طوابير منفصلة لكل موظف مع توزيع تلقائي للأحمال." },
                    { title: "جدولة ذكية", desc: "إعداد أيام العمل، العطلات، والمناسبات الخاصة بسهولة." },
                    { title: "مدفوعات وفواتير", desc: "دفع إلكتروني متكامل وإصدار فواتير تلقائي." },
                    { title: "تحليلات وأداء", desc: "رؤى فورية حول أداء العمل وكفاءة الموظفين." }
                ]
            },
            pricing: {
                title: "خطط أسعار بسيطة وشفافة",
                subtitle: "خطة واحدة تناسب الجميع. لا رسوم خفية، لا تعقيدات.",
                popular: "الأكثر شعبية",
                plan_name: "باقة الأعمال",
                plan_desc: "كل ما تحتاجه لإدارة طوابيرك بلا حدود",
                period: "شهرياً",
                cta: "ابدأ تجربتك المجانية (90 يوم)",
                note: "لا حاجة لبطاقة ائتمان • إلغاء في أي وقت",
                features: [
                    "موقع واحد فقط",
                    "عدد غير محدود من التذاكر الرقمية",
                    "عدد غير محدود من الموظفين",
                    "لوحة تحكم حية للطوابير",
                    "توليد رموز QR مخصصة",
                    "إدارة الخدمات والأسعار",
                    "تقارير وتحليلات متقدمة",
                    "دعم فني ذو أولوية"
                ],
                badge: "أسعار شفافة",
                monthly: "شهري",
                annual: "سنوي",
                save_percent: "وفر 20%",
                save_amount: "وفر $4/شهرياً",
                everything_included: "كل شيء مشمول",
                all_features_desc: "جميع الميزات التي تحتاجها لنمو عملك",
                feature_popular: "شائع",
                active_users: "أكثر من 500 مستخدم نشط",
                join_community: "انضم إلى مجتمعنا",
                guarantee: "ضمان استرداد الأموال لمدة 30 يوماً",
                custom_plan: "هل لديك سؤال ؟",
                contact_sales: "تواصل مع الدعم"
            },
            finalCta: {
                title_prefix: "توقف عن الانتظار.",
                title_suffix: "ابدأ الآن.",
                subtitle: "انضم إلى آلاف الشركات التي حسنت كفاءتها وأسعدت عملاءها مع NoWait.",
                cta: "أنشئ حسابك الآن"
            },
            footer: {
                rights: "© 2024 NoWait. جميع الحقوق محفوظة.",
                privacy: "سياسة الخصوصية",
                terms: "الشروط والأحكام",
                product: "المنتج",
                company: "الشركة",
                resources: "الموارد",
                description: "يساعد NoWait الشركات على تنظيم العمليات وتحسين رضا العملاء من خلال التخلص من الطوابير الفعلية.",
                links: {
                    features: "المميزات",
                    pricing: "الأسعار",
                    about: "عن الشركة",
                    contact: "اتصل بنا",
                    blog: "المدونة",
                    help: "مركز المساعدة"
                }
            },
            comparison: {
                title: "وداعاً للورق، مرحباً",
                title_highlight: "بالذكاء الرقمي",
                subtitle: "توقف عن استخدام الدفاتر والسجلات اليدوية. انتقل إلى نظام رقمي متكامل ينظم عملك تلقائياً.",
                old_way: "الطريقة القديمة",
                new_way: "الحل الذكي",
                paper_content: [
                    "أحمد - 5:30",
                    "سارة - 5:45 (ألغيت)",
                    "محمد - 6:00",
                    "فهد - ... ؟"
                ],
                phone_ui: {
                    queue_status: "حالة الطابور",
                    active: "نشط",
                    waiting: "قيد الانتظار",
                    manage_queue: "إدارة الطابور"
                }
            },
            auth: {
                login: {
                    title: "تسجيل الدخول إلى حسابك",
                    description: "أدخل بريدك الإلكتروني وكلمة المرور أدناه لتسجيل الدخول",
                    page_title: "تسجيل الدخول",
                    email: "عنوان البريد الإلكتروني",
                    email_placeholder: "email@example.com",
                    password: "كلمة المرور",
                    password_placeholder: "كلمة المرور",
                    forgot_password: "نسيت كلمة المرور؟",
                    remember_me: "تذكرني",
                    submit: "تسجيل الدخول",
                    no_account: "ليس لديك حساب؟",
                    sign_up: "سجل الآن"
                },
                register: {
                    title: "إنشاء حساب",
                    description: "أدخل بياناتك أدناه لإنشاء حسابك",
                    page_title: "التسجيل",
                    name: "الاسم",
                    name_placeholder: "الاسم الكامل",
                    email: "عنوان البريد الإلكتروني",
                    email_placeholder: "email@example.com",
                    password: "كلمة المرور",
                    password_placeholder: "كلمة المرور",
                    confirm_password: "تأكيد كلمة المرور",
                    confirm_password_placeholder: "تأكيد كلمة المرور",
                    submit: "إنشاء حساب",
                    have_account: "لديك حساب بالفعل؟",
                    log_in: "تسجيل الدخول"
                },
                forgot_password: {
                    title: "نسيت كلمة المرور",
                    description: "أدخل بريدك الإلكتروني لتلقي رابط إعادة تعيين كلمة المرور",
                    page_title: "نسيت كلمة المرور",
                    email: "عنوان البريد الإلكتروني",
                    email_placeholder: "email@example.com",
                    submit: "إرسال رابط إعادة تعيين كلمة المرور",
                    return_to: "أو، العودة إلى",
                    log_in: "تسجيل الدخول"
                },
                reset_password: {
                    title: "إعادة تعيين كلمة المرور",
                    description: "يرجى إدخال كلمة المرور الجديدة أدناه",
                    page_title: "إعادة تعيين كلمة المرور",
                    email: "البريد الإلكتروني",
                    password: "كلمة المرور",
                    password_placeholder: "كلمة المرور",
                    confirm_password: "تأكيد كلمة المرور",
                    confirm_password_placeholder: "تأكيد كلمة المرور",
                    submit: "إعادة تعيين كلمة المرور"
                },
                verify_email: {
                    title: "التحقق من البريد الإلكتروني",
                    description: "يرجى التحقق من عنوان بريدك الإلكتروني بالنقر على الرابط الذي أرسلناه لك للتو.",
                    page_title: "التحقق من البريد الإلكتروني",
                    link_sent: "تم إرسال رابط تحقق جديد إلى عنوان البريد الإلكتروني الذي قدمته أثناء التسجيل.",
                    resend: "إعادة إرسال بريد التحقق",
                    log_out: "تسجيل الخروج"
                },
                confirm_password: {
                    title: "تأكيد كلمة المرور",
                    description: "هذه منطقة آمنة من التطبيق. يرجى تأكيد كلمة المرور الخاصة بك قبل المتابعة.",
                    page_title: "تأكيد كلمة المرور",
                    password: "كلمة المرور",
                    password_placeholder: "كلمة المرور",
                    submit: "تأكيد كلمة المرور"
                },
                two_factor: {
                    auth_code_title: "رمز المصادقة",
                    auth_code_description: "أدخل رمز المصادقة المقدم من تطبيق المصادقة الخاص بك.",
                    recovery_code_title: "رمز الاسترداد",
                    recovery_code_description: "يرجى تأكيد الوصول إلى حسابك عن طريق إدخال أحد رموز الاسترداد الطارئة.",
                    page_title: "المصادقة الثنائية",
                    recovery_code_placeholder: "أدخل رمز الاسترداد",
                    toggle_auth_code: "تسجيل الدخول باستخدام رمز المصادقة",
                    toggle_recovery_code: "تسجيل الدخول باستخدام رمز الاسترداد",
                    continue: "متابعة",
                    or_you_can: "أو يمكنك"
                }
            },
            settings: {
                profile: {
                    breadcrumb: "إعدادات الملف الشخصي",
                    page_title: "إعدادات الملف الشخصي",
                    sr_title: "إعدادات الملف الشخصي",
                    section_title: "معلومات الملف الشخصي",
                    section_description: "قم بتحديث اسمك وعنوان بريدك الإلكتروني",
                    name: "الاسم",
                    name_placeholder: "الاسم الكامل",
                    email: "عنوان البريد الإلكتروني",
                    email_placeholder: "عنوان البريد الإلكتروني",
                    email_unverified: "بريدك الإلكتروني غير مؤكد.",
                    resend_verification: "انقر هنا لإعادة إرسال بريد التحقق.",
                    verification_sent: "تم إرسال رابط تحقق جديد إلى عنوان بريدك الإلكتروني.",
                    save: "حفظ",
                    saved: "تم الحفظ",
                    delete_account: "حذف الحساب",
                    delete_account_description: "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته بشكل دائم.",
                    confirm_delete: "حذف الحساب",
                    delete_account_password: "أدخل كلمة المرور لتأكيد الحذف"
                },
                password: {
                    breadcrumb: "إعدادات كلمة المرور",
                    page_title: "إعدادات كلمة المرور",
                    sr_title: "إعدادات كلمة المرور",
                    section_title: "تحديث كلمة المرور",
                    section_description: "تأكد من أن حسابك يستخدم كلمة مرور طويلة وعشوائية للبقاء آمنًا",
                    current_password: "كلمة المرور الحالية",
                    current_password_placeholder: "كلمة المرور الحالية",
                    new_password: "كلمة المرور الجديدة",
                    new_password_placeholder: "كلمة المرور الجديدة",
                    confirm_password: "تأكيد كلمة المرور",
                    confirm_password_placeholder: "تأكيد كلمة المرور",
                    save: "حفظ كلمة المرور",
                    saved: "تم الحفظ"
                },
                two_factor: {
                    breadcrumb: "المصادقة الثنائية",
                    page_title: "المصادقة الثنائية",
                    sr_title: "إعدادات المصادقة الثنائية",
                    section_title: "المصادقة الثنائية",
                    section_description: "إدارة إعدادات المصادقة الثنائية الخاصة بك",
                    enabled_badge: "مفعّل",
                    disabled_badge: "معطّل",
                    enabled_description: "مع تمكين المصادقة الثنائية، ستتم مطالبتك برمز PIN آمن وعشوائي أثناء تسجيل الدخول، والذي يمكنك استرجاعه من تطبيق TOTP المدعوم على هاتفك.",
                    disabled_description: "عند تمكين المصادقة الثنائية، ستتم مطالبتك برمز PIN آمن أثناء تسجيل الدخول. يمكن استرجاع هذا الرمز من تطبيق يدعم TOTP على هاتفك.",
                    enable: "تفعيل المصادقة الثنائية",
                    disable: "تعطيل المصادقة الثنائية",
                    continue_setup: "متابعة الإعداد",
                    recovery_codes_title: "رموز الاسترداد",
                    recovery_codes_description: "قم بتخزين رموز الاسترداد هذه في مدير كلمات مرور آمن. يمكن استخدامها لاستعادة الوصول إلى حسابك في حال فقدان جهاز المصادقة الثنائية الخاص بك.",
                    show_recovery_codes: "عرض رموز الاسترداد",
                    regenerate_recovery_codes: "إعادة إنشاء رموز الاسترداد",
                    setup_title: "تأمين حسابك",
                    setup_description: "أضف طبقة إضافية من الأمان باستخدام هاتفك",
                    finish_setup_description: "أكمل إعداد حماية حسابك",
                    recovery_codes_card_title: "رموز استرداد 2FA",
                    view: "عرض",
                    hide: "إخفاء",
                    recovery_codes_label: "رموز الاسترداد",
                    regenerate_codes: "إعادة إنشاء الرموز",
                    recovery_codes_usage_warning: "يمكن استخدام كل رمز استرداد مرة واحدة للوصول إلى حسابك وسيتم حذفه بعد استخدامه. إذا كنت بحاجة إلى المزيد، فانقر فوق",
                    above: "أعلاه."
                },
                appearance: {
                    breadcrumb: "المظهر",
                    page_title: "إعدادات المظهر",
                    sr_title: "إعدادات المظهر",
                    section_title: "إعدادات المظهر",
                    section_description: "خصص كيفية ظهور التطبيق وشعوره",
                    language_title: "اللغة",
                    language_description: "اختر لغتك المفضلة للتطبيق"
                }
            },
            components: {
                settings_layout: {
                    settings: "الإعدادات",
                    manage_preferences: "إدارة تفضيلات حسابك",
                    manage_settings: "إدارة ملفك الشخصي وإعدادات الحساب",
                    profile: "الملف الشخصي",
                    password: "كلمة المرور",
                    two_factor: "المصادقة الثنائية",
                    appearance: "المظهر",
                    admin_settings: "إعدادات المسؤول",
                    manage_admin_preferences: "إدارة التفضيلات الإدارية الخاصة بك"
                },
                delete_user: {
                    title: "حذف الحساب",
                    description: "احذف حسابك وجميع موارده",
                    warning: "تحذير",
                    warning_message: "يرجى المتابعة بحذر، لا يمكن التراجع عن هذا الإجراء.",
                    delete_button: "حذف الحساب",
                    confirm_title: "هل أنت متأكد أنك تريد حذف حسابك؟",
                    confirm_description: "بمجرد حذف حسابك، سيتم حذف جميع موارده وبياناته نهائيًا. يرجى إدخال كلمة المرور الخاصة بك لتأكيد رغبتك في حذف حسابك نهائيًا.",
                    password_label: "كلمة المرور",
                    password_placeholder: "كلمة المرور",
                    cancel: "إلغاء",
                    confirm_delete: "حذف الحساب"
                },
                two_factor_modal: {
                    enabled_title: "تم تمكين المصادقة الثنائية",
                    enabled_description: "تم تمكين المصادقة الثنائية الآن. امسح رمز QR أو أدخل مفتاح الإعداد في تطبيق المصادقة الخاص بك.",
                    verify_title: "تحقق من رمز المصادقة",
                    verify_description: "أدخل الرمز المكون من 6 أرقام من تطبيق المصادقة الخاص بك",
                    enable_title: "تمكين المصادقة الثنائية",
                    enable_description: "لإنهاء تمكين المصادقة الثنائية، امسح رمز QR أو أدخل مفتاح الإعداد في تطبيق المصادقة الخاص بك",
                    close: "إغلاق",
                    continue: "متابعة",
                    or_manual: "أو، أدخل الرمز يدويًا",
                    back: "رجوع",
                    confirm: "تأكيد",
                    setup_key: "مفتاح الإعداد"
                },
                appearance_tabs: {
                    light: "فاتح",
                    dark: "داكن",
                    system: "النظام"
                },
                app_sidebar: {
                    dashboard: "لوحة التحكم",
                    landing_page: "الصفحة الرئيسية",
                    repository: "المستودع"
                },
                user_menu: {
                    settings: "الإعدادات",
                    log_out: "تسجيل الخروج"
                },
                dashboard: {
                    title: "لوحة التحكم",
                    breadcrumb: "لوحة التحكم"
                }
            }
        }
    },
    en: {
        translation: {
            nav: {
                features: "Features",
                useCases: "Use Cases",
                howItWorks: "How It Works",
                pricing: "Pricing",
                dashboard: "Dashboard",
                login: "Log In",
                register: "Get Started"
            },
            hero: {
                tag: "Smart Queue Management System",
                title_prefix: "No Waiting Lines.",
                title_suffix: "Ever.",
                description: "Replace physical queues with digital tickets. Let your customers track their turn from their phones, and eliminate overcrowding forever.",
                cta_primary: "Start Free Trial",
                cta_secondary: "Watch Demo",
                preview_happy: "Happy Customer",
                preview_happy_desc: "Waiting at a coffee shop, not in line!",
                preview_me: "I'm here!",
                ticket_title: "Barber Shop",
                ticket_number: "Ticket #A42",
                ticket_turn: "Your Turn",
                ticket_serving: "Serving Now",
                ticket_time: "~15 mins",
                trusted_by: "Trusted by industry leaders"
            },
            socialProof: {
                title: "Trusted by over 2,000 companies"
            },
            problems: {
                title_prefix: "The Waiting Problem is",
                title_highlight: "Real & Costly",
                subtitle: "Traditional queues are the number one enemy of customer satisfaction and operational efficiency.",
                items: [
                    {
                        title: "Peak Hour Chaos",
                        desc: "Overcrowding during holidays and peak seasons causes stress for both staff and customers."
                    },
                    {
                        title: "Frustrated Customers",
                        desc: "Uncertain wait times lead to customer walk-aways and negative reviews."
                    },
                    {
                        title: "Inefficient Operations",
                        desc: "Manual queue management wastes staff time and reduces service quality."
                    },
                    {
                        title: "Lost Revenue",
                        desc: "Every customer who leaves because of the line is lost profit for your business."
                    }
                ]
            },
            solution: {
                title: "How NoWait Changes the Game",
                subtitle: "A simple, elegant solution that transforms queue chaos into a seamless digital experience.",
                steps: [
                    { title: "Get a Ticket", desc: "Customer scans a QR code or visits a link to get a digital ticket instantly." },
                    { title: "Track Your Turn", desc: "Real-time updates on their place in line and estimated wait time." },
                    { title: "Get Served", desc: "Automatic notification when it's their turn. No need to wait standing up." }
                ],
                stats: [
                    { value: "90%", label: "Less Anxiety" },
                    { value: "40%", label: "Faster Service" },
                    { value: "65%", label: "Time Saved" },
                    { value: "4.9", label: "Satisfaction" }
                ]
            },
            useCases: {
                title: "Designed for Every Sector",
                subtitle: "From small shops to large institutions, NoWait adapts flexibly to your needs.",
                cta: "Discover More",
                items: [
                    { title: "Barbershops", desc: "Multiple barbers, one smooth queue. Customers wait comfortably nearby." },
                    { title: "Clinics & Hospitals", desc: "Reduce waiting room congestion. Prioritize emergencies with a tap." },
                    { title: "Government Offices", desc: "Organize visitor flow in government and service offices efficiently." },
                    { title: "Events & Venues", desc: "Control entry and guest flow at parties and large events." }
                ]
            },
            features: {
                title: "Everything You Need for Pro Queue Management",
                subtitle: "Comprehensive features designed for your peace of mind and your customers' comfort.",
                items: [
                    { title: "Real-time Updates", desc: "Live tracking of position and estimated wait time for customers." },
                    { title: "Smart QR Tickets", desc: "No app installation required. Works directly from the browser." },
                    { title: "Multiple Queues", desc: "Separate queues per staff member with automatic load distribution." },
                    { title: "Smart Scheduling", desc: "Easily set up working days, holidays, and special events." },
                    { title: "Payments & Invoices", desc: "Integrated digital payments and automated invoicing." },
                    { title: "Analytics & Insights", desc: "Instant insights into business performance and staff efficiency." }
                ]
            },
            pricing: {
                title: "Simple, Transparent Pricing",
                subtitle: "One plan fits all. No hidden fees, no complexity.",
                popular: "Most Popular",
                plan_name: "Business Plan",
                plan_desc: "Everything you need to manage queues without limits",
                period: "per month",
                cta: "Start Free 90-Day Trial",
                note: "No credit card required • Cancel anytime",
                features: [
                    "1 Location Only",
                    "Unlimited digital tickets",
                    "Unlimited staff members",
                    "Live queue dashboard",
                    "Custom QR code generation",
                    "Service & pricing management",
                    "Advanced reports & analytics",
                    "Priority support"
                ],
                badge: "Transparent Pricing",
                monthly: "Monthly",
                annual: "Annual",
                save_percent: "Save 20%",
                save_amount: "Save $4/month",
                everything_included: "Everything included",
                all_features_desc: "All features you need to grow your business",
                feature_popular: "Popular",
                active_users: "500+ active users",
                join_community: "Join our community",
                guarantee: "30-day money-back guarantee",
                custom_plan: "Have questions?",
                contact_sales: "Contact Support"
            },
            finalCta: {
                title_prefix: "Stop Waiting.",
                title_suffix: "Start Now.",
                subtitle: "Join thousands of businesses improving efficiency and delighting customers with NoWait.",
                cta: "Create Account Now"
            },
            footer: {
                rights: "© 2024 NoWait. All rights reserved.",
                privacy: "Privacy Policy",
                terms: "Terms & Conditions",
                product: "Product",
                company: "Company",
                resources: "Resources",
                description: "NoWait helps businesses streamline operations and improve customer satisfaction by eliminating physical queues.",
                links: {
                    features: "Features",
                    pricing: "Pricing",
                    about: "About Us",
                    contact: "Contact",
                    blog: "Blog",
                    help: "Help Center"
                }
            },
            comparison: {
                title: "Ditch the Paper,",
                title_highlight: "Go Digital",
                subtitle: "Stop relying on messy notebooks. Switch to an all-in-one digital system that organizes your work automatically.",
                old_way: "The Old Way",
                new_way: "The Smart Way",
                paper_content: [
                    "John - 5:30",
                    "Sarah - 5:45 (Cancelled)",
                    "Mike - 6:00",
                    "David - ... ?"
                ],
                phone_ui: {
                    queue_status: "Queue Status",
                    active: "Active",
                    waiting: "Waiting",
                    manage_queue: "Manage Queue"
                }
            },
            auth: {
                login: {
                    title: "Log in to your account",
                    description: "Enter your email and password below to log in",
                    page_title: "Log in",
                    email: "Email address",
                    email_placeholder: "email@example.com",
                    password: "Password",
                    password_placeholder: "Password",
                    forgot_password: "Forgot password?",
                    remember_me: "Remember me",
                    submit: "Log in",
                    no_account: "Don't have an account?",
                    sign_up: "Sign up"
                },
                register: {
                    title: "Create an account",
                    description: "Enter your details below to create your account",
                    page_title: "Register",
                    name: "Name",
                    name_placeholder: "Full name",
                    email: "Email address",
                    email_placeholder: "email@example.com",
                    password: "Password",
                    password_placeholder: "Password",
                    confirm_password: "Confirm password",
                    confirm_password_placeholder: "Confirm password",
                    submit: "Create account",
                    have_account: "Already have an account?",
                    log_in: "Log in"
                },
                forgot_password: {
                    title: "Forgot password",
                    description: "Enter your email to receive a password reset link",
                    page_title: "Forgot password",
                    email: "Email address",
                    email_placeholder: "email@example.com",
                    submit: "Email password reset link",
                    return_to: "Or, return to",
                    log_in: "log in"
                },
                reset_password: {
                    title: "Reset password",
                    description: "Please enter your new password below",
                    page_title: "Reset password",
                    email: "Email",
                    password: "Password",
                    password_placeholder: "Password",
                    confirm_password: "Confirm password",
                    confirm_password_placeholder: "Confirm password",
                    submit: "Reset password"
                },
                verify_email: {
                    title: "Verify email",
                    description: "Please verify your email address by clicking on the link we just emailed to you.",
                    page_title: "Email verification",
                    link_sent: "A new verification link has been sent to the email address you provided during registration.",
                    resend: "Resend verification email",
                    log_out: "Log out"
                },
                confirm_password: {
                    title: "Confirm your password",
                    description: "This is a secure area of the application. Please confirm your password before continuing.",
                    page_title: "Confirm password",
                    password: "Password",
                    password_placeholder: "Password",
                    submit: "Confirm password"
                },
                two_factor: {
                    auth_code_title: "Authentication Code",
                    auth_code_description: "Enter the authentication code provided by your authenticator application.",
                    recovery_code_title: "Recovery Code",
                    recovery_code_description: "Please confirm access to your account by entering one of your emergency recovery codes.",
                    page_title: "Two-Factor Authentication",
                    recovery_code_placeholder: "Enter recovery code",
                    toggle_auth_code: "login using an authentication code",
                    toggle_recovery_code: "login using a recovery code",
                    continue: "Continue",
                    or_you_can: "or you can"
                }
            },
            settings: {
                profile: {
                    breadcrumb: "Profile settings",
                    page_title: "Profile settings",
                    sr_title: "Profile Settings",
                    section_title: "Profile information",
                    section_description: "Update your name and email address",
                    name: "Name",
                    name_placeholder: "Full name",
                    email: "Email address",
                    email_placeholder: "Email address",
                    email_unverified: "Your email address is unverified.",
                    resend_verification: "Click here to resend the verification email.",
                    verification_sent: "A new verification link has been sent to your email address.",
                    save: "Save",
                    saved: "Saved",
                    delete_account: "Delete Account",
                    delete_account_description: "Once your account is deleted, all of its resources and data will be permanently deleted.",
                    confirm_delete: "Delete account",
                    delete_account_password: "Enter password to confirm deletion"
                },
                password: {
                    breadcrumb: "Password settings",
                    page_title: "Password settings",
                    sr_title: "Password Settings",
                    section_title: "Update password",
                    section_description: "Ensure your account is using a long, random password to stay secure",
                    current_password: "Current password",
                    current_password_placeholder: "Current password",
                    new_password: "New password",
                    new_password_placeholder: "New password",
                    confirm_password: "Confirm password",
                    confirm_password_placeholder: "Confirm password",
                    save: "Save password",
                    saved: "Saved"
                },
                two_factor: {
                    breadcrumb: "Two-Factor Authentication",
                    page_title: "Two-Factor Authentication",
                    sr_title: "Two-Factor Authentication Settings",
                    section_title: "Two-Factor Authentication",
                    section_description: "Manage your two-factor authentication settings",
                    enabled_badge: "Enabled",
                    disabled_badge: "Disabled",
                    enabled_description: "With two-factor authentication enabled, you will be prompted for a secure, random pin during login, which you can retrieve from the TOTP-supported application on your phone.",
                    disabled_description: "When you enable two-factor authentication, you will be prompted for a secure pin during login. This pin can be retrieved from a TOTP-supported application on your phone.",
                    enable: "Enable 2FA",
                    disable: "Disable 2FA",
                    continue_setup: "Continue Setup",
                    recovery_codes_title: "Recovery Codes",
                    recovery_codes_description: "Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two-factor authentication device is lost.",
                    show_recovery_codes: "Show Recovery Codes",
                    regenerate_recovery_codes: "Regenerate Recovery Codes",
                    setup_title: "Secure your account",
                    setup_description: "Add an extra layer of security using your phone",
                    finish_setup_description: "Finish setting up your account protection",
                    recovery_codes_card_title: "2FA Recovery Codes",
                    view: "View",
                    hide: "Hide",
                    recovery_codes_label: "Recovery Codes",
                    regenerate_codes: "Regenerate Codes",
                    recovery_codes_usage_warning: "Each recovery code can be used once to access your account and will be removed after use. If you need more, click",
                    above: "above."
                },
                appearance: {
                    breadcrumb: "Appearance",
                    page_title: "Appearance settings",
                    sr_title: "Appearance Settings",
                    section_title: "Appearance settings",
                    section_description: "Customize how the application looks and feels",
                    language_title: "Language",
                    language_description: "Select your preferred language for the application"
                }
            },
            components: {
                settings_layout: {
                    settings: "Settings",
                    manage_preferences: "Manage your account preferences",
                    manage_settings: "Manage your profile and account settings",
                    profile: "Profile",
                    password: "Password",
                    two_factor: "Two-Factor",
                    appearance: "Appearance",
                    admin_settings: "Admin Settings",
                    manage_admin_preferences: "Manage your administrative preferences"
                },
                delete_user: {
                    title: "Delete account",
                    description: "Delete your account and all of its resources",
                    warning: "Warning",
                    warning_message: "Please proceed with caution, this cannot be undone.",
                    delete_button: "Delete account",
                    confirm_title: "Are you sure you want to delete your account?",
                    confirm_description: "Once your account is deleted, all of its resources and data will also be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.",
                    password_label: "Password",
                    password_placeholder: "Password",
                    cancel: "Cancel",
                    confirm_delete: "Delete account"
                },
                two_factor_modal: {
                    enabled_title: "Two-Factor Authentication Enabled",
                    enabled_description: "Two-factor authentication is now enabled. Scan the QR code or enter the setup key in your authenticator app.",
                    verify_title: "Verify Authentication Code",
                    verify_description: "Enter the 6-digit code from your authenticator app",
                    enable_title: "Enable Two-Factor Authentication",
                    enable_description: "To finish enabling two-factor authentication, scan the QR code or enter the setup key in your authenticator app",
                    close: "Close",
                    continue: "Continue",
                    or_manual: "or, enter the code manually",
                    back: "Back",
                    confirm: "Confirm",
                    setup_key: "Setup Key"
                },
                appearance_tabs: {
                    light: "Light",
                    dark: "Dark",
                    system: "System"
                },
                app_sidebar: {
                    dashboard: "Dashboard",
                    landing_page: "Landing Page",
                    repository: "Repository"
                },
                user_menu: {
                    settings: "Settings",
                    log_out: "Log out"
                },
                dashboard: {
                    title: "Dashboard",
                    breadcrumb: "Dashboard"
                }
            }
        }
    },
    fr: {
        translation: {
            nav: {
                features: "Fonctionnalités",
                useCases: "Cas d'usage",
                howItWorks: "Comment ça marche",
                pricing: "Tarifs",
                dashboard: "Tableau de bord",
                login: "Connexion",
                register: "S'inscrire"
            },
            hero: {
                tag: "Système de Gestion de File d'Attente Intelligent",
                title_prefix: "Plus de files,",
                title_suffix: "Jamais.",
                description: "Replacez les files d'attente physiques par des tickets numériques. Laissez vos clients suivre leur tour depuis leur téléphone et éliminez la cohue pour toujours.",
                cta_primary: "Essai Gratuit",
                cta_secondary: "Voir la Démo",
                preview_happy: "Client Heureux",
                preview_happy_desc: "Attend au café, pas dans la file !",
                preview_me: "Je suis là !",
                ticket_title: "Salon de Coiffure",
                ticket_number: "Ticket #A42",
                ticket_turn: "Votre Turn",
                ticket_serving: "En Service",
                ticket_time: "~15 min",
                trusted_by: "Reconnu par les leaders de l'industrie"
            },
            socialProof: {
                title: "Reconnu par plus de 2 000 entreprises"
            },
            problems: {
                title_prefix: "Le problème de l'attente est",
                title_highlight: "Réel & Coûteux",
                subtitle: "Les files d'attente traditionnelles sont l'ennemi numéro un de la satisfaction client et de l'efficacité opérationnelle.",
                items: [
                    {
                        title: "Chaos aux Heures de Pointe",
                        desc: "La surpopulation pendant les fêtes et les saisons hautes cause du stress pour le personnel et les clients."
                    },
                    {
                        title: "Clients Frustrés",
                        desc: "L'incertitude du temps d'attente pousse les clients à partir et à laisser de mauvais avis."
                    },
                    {
                        title: "Opérations Inefficaces",
                        desc: "La gestion manuelle des files perd du temps et réduit la qualité du service."
                    },
                    {
                        title: "Perte de Revenus",
                        desc: "Chaque client qui part à cause de la file est un profit perdu pour votre entreprise."
                    }
                ]
            },
            solution: {
                title: "Comment NoWait Change la Donne",
                subtitle: "Une solution simple et élégante qui transforme le chaos de l'attente en une expérience numérique fluide.",
                steps: [
                    { title: "Prendre un Ticket", desc: "Le client scanne un QR code ou visite un lien pour obtenir un ticket numérique instantanément." },
                    { title: "Suivre son Tour", desc: "Mises à jour en temps réel on sa place dans la file et le temps d'attente estimé." },
                    { title: "Être Servi", desc: "Notification automatique quand c'est son tour. Pas besoin d'attendre debout." }
                ],
                stats: [
                    { value: "90%", label: "Moins d'Anxiété" },
                    { value: "40%", label: "Service Plus Rapide" },
                    { value: "65%", label: "Temps Gagné" },
                    { value: "4.9", label: "Satisfaction" }
                ]
            },
            useCases: {
                title: "Conçu pour Chaque Secteur",
                subtitle: "Des petits magasins aux grandes institutions, NoWait s'adapte avec souplesse à vos besoins.",
                cta: "Découvrir Plus",
                items: [
                    { title: "Salons de Coiffure", desc: "Plusieurs coiffeurs, une file fluide. Les clients attendent confortablement à proximité." },
                    { title: "Cliniques & Hôpitaux", desc: "Réduisez l'encombrement des salles d'attente. Priorisez les urgences d'un clic." },
                    { title: "Bureaux Gouvernementaux", desc: "Organisez efficacement le flux des visiteurs dans les bureaux administratifs." },
                    { title: "Événements", desc: "Contrôlez l'entrée et le flux des invités lors des fêtes et grands événements." }
                ]
            },
            features: {
                title: "Tout pour une Gestion de File Pro",
                subtitle: "Des fonctionnalités complètes conçues pour votre tranquillité d'esprit et le confort de vos clients.",
                items: [
                    { title: "Mises à jour Temps Réel", desc: "Suivi en direct de la position et du temps d'attente estimé." },
                    { title: "Tickets QR Intelligents", desc: "Pas d'application à installer. Fonctionne directement depuis le navigateur." },
                    { title: "Files Multiples", desc: "Files séparées par employé avec distribution automatique de la charge." },
                    { title: "Planification Intelligente", desc: "Configurez facilement les jours ouvrables, les congés et les événements spéciaux." },
                    { title: "Paiements & Factures", desc: "Paiements numériques intégrés et facturation automatisée." },
                    { title: "Analyses & Insights", desc: "Aperçus instantanés sur la performance de l'entreprise et l'efficacité du personnel." }
                ]
            },
            pricing: {
                title: "Tarification Simple et Transparente",
                subtitle: "Un plan pour tous. Pas de frais cachés, pas de complexité.",
                popular: "Le Plus Populaire",
                plan_name: "Plan Business",
                plan_desc: "Tout ce dont vous avez besoin pour gérer les files sans limites",
                period: "par mois",
                cta: "Démarrer l'Essai Gratuit (90 jours)",
                note: "Pas de carte de crédit requise • Annulation à tout moment",
                features: [
                    "1 Seul Emplacement",
                    "Tickets numériques illimités",
                    "Membres du personnel illimités",
                    "Tableau de bord de file en direct",
                    "Génération de QR code personnalisé",
                    "Gestion des services et tarifs",
                    "Rapports et analyses avancés",
                    "Support prioritaire"
                ],
                badge: "Tarification Transparente",
                monthly: "Mensuel",
                annual: "Annuel",
                save_percent: "Économisez 20%",
                save_amount: "Économisez 4 $/mois",
                everything_included: "Tout est inclus",
                all_features_desc: "Toutes les fonctionnalités pour développer votre entreprise",
                feature_popular: "Populaire",
                active_users: "Plus de 500 utilisateurs actifs",
                join_community: "Rejoignez notre communauté",
                guarantee: "Garantie satisfait ou remboursé de 30 jours",
                custom_plan: "Vous avez des questions ?",
                contact_sales: "Contactez le support"
            },
            finalCta: {
                title_prefix: "Arrêtez d'Attendre.",
                title_suffix: "Commencez Maintenant.",
                subtitle: "Rejoignez des milliers d'entreprises qui améliorent leur efficacité et ravissent leurs clients avec NoWait.",
                cta: "Créer un Compte Maintenant"
            },
            footer: {
                rights: "© 2024 NoWait. Tous droits réservés.",
                privacy: "Politique de Confidentialité",
                terms: "Conditions Générales",
                product: "Produit",
                company: "Entreprise",
                resources: "Ressources",
                description: "NoWait aide les entreprises à simplifier leurs opérations et à améliorer la satisfaction client en éliminant les files d'attente physiques.",
                links: {
                    features: "Fonctionnalités",
                    pricing: "Tarifs",
                    about: "À Propos",
                    contact: "Contact",
                    blog: "Blog",
                    help: "Aide"
                }
            },
            comparison: {
                title: "Adieu Papier,",
                title_highlight: "Bonjour Digital",
                subtitle: "Arrêtez d'utiliser des cahiers et des registres manuels. Passez à un système numérique tout-en-un.",
                old_way: "L'ancienne méthode",
                new_way: "La solution intelligente",
                paper_content: [
                    "Jean - 5:30",
                    "Marie - 5:45 (Annulé)",
                    "Paul - 6:00",
                    "Luc - ... ?"
                ],
                phone_ui: {
                    queue_status: "État de la file",
                    active: "Actif",
                    waiting: "En attente",
                    manage_queue: "Gérer la file"
                }
            },
            auth: {
                login: {
                    title: "Connectez-vous à votre compte",
                    description: "Entrez votre email et mot de passe ci-dessous pour vous connecter",
                    page_title: "Connexion",
                    email: "Adresse e-mail",
                    email_placeholder: "email@exemple.com",
                    password: "Mot de passe",
                    password_placeholder: "Mot de passe",
                    forgot_password: "Mot de passe oublié ?",
                    remember_me: "Se souvenir de moi",
                    submit: "Se connecter",
                    no_account: "Pas encore de compte ?",
                    sign_up: "S'inscrire"
                },
                register: {
                    title: "Créer un compte",
                    description: "Entrez vos informations ci-dessous pour créer votre compte",
                    page_title: "Inscription",
                    name: "Nom",
                    name_placeholder: "Nom complet",
                    email: "Adresse e-mail",
                    email_placeholder: "email@exemple.com",
                    password: "Mot de passe",
                    password_placeholder: "Mot de passe",
                    confirm_password: "Confirmer le mot de passe",
                    confirm_password_placeholder: "Confirmer le mot de passe",
                    submit: "Créer un compte",
                    have_account: "Vous avez déjà un compte ?",
                    log_in: "Se connecter"
                },
                forgot_password: {
                    title: "Mot de passe oublié",
                    description: "Entrez votre email pour recevoir un lien de réinitialisation",
                    page_title: "Mot de passe oublié",
                    email: "Adresse e-mail",
                    email_placeholder: "email@exemple.com",
                    submit: "Envoyer le lien de réinitialisation",
                    return_to: "Ou, retour à",
                    log_in: "connexion"
                },
                reset_password: {
                    title: "Réinitialiser le mot de passe",
                    description: "Veuillez entrer votre nouveau mot de passe ci-dessous",
                    page_title: "Réinitialiser le mot de passe",
                    email: "E-mail",
                    password: "Mot de passe",
                    password_placeholder: "Mot de passe",
                    confirm_password: "Confirmer le mot de passe",
                    confirm_password_placeholder: "Confirmer le mot de passe",
                    submit: "Réinitialiser le mot de passe"
                },
                verify_email: {
                    title: "Vérifier l'e-mail",
                    description: "Veuillez vérifier votre adresse e-mail en cliquant sur le lien que nous venons de vous envoyer.",
                    page_title: "Vérification de l'e-mail",
                    link_sent: "Un nouveau lien de vérification a été envoyé à l'adresse e-mail que vous avez fournie lors de l'inscription.",
                    resend: "Renvoyer l'e-mail de vérification",
                    log_out: "Se déconnecter"
                },
                confirm_password: {
                    title: "Confirmez votre mot de passe",
                    description: "Ceci est une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer.",
                    page_title: "Confirmer le mot de passe",
                    password: "Mot de passe",
                    password_placeholder: "Mot de passe",
                    submit: "Confirmer le mot de passe"
                },
                two_factor: {
                    auth_code_title: "Code d'authentification",
                    auth_code_description: "Entrez le code d'authentification fourni par votre application d'authentification.",
                    recovery_code_title: "Code de récupération",
                    recovery_code_description: "Veuillez confirmer l'accès à votre compte en entrant l'un de vos codes de récupération d'urgence.",
                    page_title: "Authentification à deux facteurs",
                    recovery_code_placeholder: "Entrez le code de récupération",
                    toggle_auth_code: "se connecter avec un code d'authentification",
                    toggle_recovery_code: "se connecter avec un code de récupération",
                    continue: "Continuer",
                    or_you_can: "ou vous pouvez"
                }
            },
            settings: {
                profile: {
                    breadcrumb: "Paramètres du profil",
                    page_title: "Paramètres du profil",
                    sr_title: "Paramètres du profil",
                    section_title: "Informations du profil",
                    section_description: "Mettez à jour votre nom et adresse e-mail",
                    name: "Nom",
                    name_placeholder: "Nom complet",
                    email: "Adresse e-mail",
                    email_placeholder: "Adresse e-mail",
                    email_unverified: "Votre adresse e-mail n'est pas vérifiée.",
                    resend_verification: "Cliquez ici pour renvoyer l'e-mail de vérification.",
                    verification_sent: "Un nouveau lien de vérification a été envoyé à votre adresse e-mail.",
                    save: "Enregistrer",
                    saved: "Enregistré",
                    delete_account: "Supprimer le compte",
                    delete_account_description: "Une fois votre compte supprimé, toutes ses ressources et données seront définitivement supprimées.",
                    confirm_delete: "Supprimer le compte",
                    delete_account_password: "Entrez le mot de passe pour confirmer la suppression"
                },
                password: {
                    breadcrumb: "Paramètres du mot de passe",
                    page_title: "Paramètres du mot de passe",
                    sr_title: "Paramètres du mot de passe",
                    section_title: "Mettre à jour le mot de passe",
                    section_description: "Assurez-vous que votre compte utilise un mot de passe long et aléatoire pour rester sécurisé",
                    current_password: "Mot de passe actuel",
                    current_password_placeholder: "Mot de passe actuel",
                    new_password: "Nouveau mot de passe",
                    new_password_placeholder: "Nouveau mot de passe",
                    confirm_password: "Confirmer le mot de passe",
                    confirm_password_placeholder: "Confirmer le mot de passe",
                    save: "Enregistrer le mot de passe",
                    saved: "Enregistré"
                },
                two_factor: {
                    breadcrumb: "Authentification à deux facteurs",
                    page_title: "Authentification à deux facteurs",
                    sr_title: "Paramètres de l'authentification à deux facteurs",
                    section_title: "Authentification à deux facteurs",
                    section_description: "Gérez vos paramètres d'authentification à deux facteurs",
                    enabled_badge: "Activé",
                    disabled_badge: "Désactivé",
                    enabled_description: "Avec l'authentification à deux facteurs activée, vous serez invité à saisir un code PIN sécurisé et aléatoire lors de la connexion, que vous pouvez récupérer depuis l'application compatible TOTP sur votre téléphone.",
                    disabled_description: "Lorsque vous activez l'authentification à deux facteurs, vous serez invité à saisir un code PIN sécurisé lors de la connexion. Ce code peut être récupéré depuis une application compatible TOTP sur votre téléphone.",
                    enable: "Activer l'A2F",
                    disable: "Désactiver l'A2F",
                    continue_setup: "Continuer la configuration",
                    recovery_codes_title: "Codes de récupération",
                    recovery_codes_description: "Conservez ces codes de récupération dans un gestionnaire de mots de passe sécurisé. Ils peuvent être utilisés pour récupérer l'accès à votre compte si votre appareil d'authentification à deux facteurs est perdu.",
                    show_recovery_codes: "Afficher les codes de récupération",
                    regenerate_recovery_codes: "Régénérer les codes de récupération",
                    setup_title: "Sécurisez votre compte",
                    setup_description: "Ajoutez une couche de sécurité supplémentaire à l'aide de votre téléphone",
                    finish_setup_description: "Terminez la configuration de la protection de votre compte",
                    recovery_codes_card_title: "Codes de récupération 2FA",
                    view: "Afficher",
                    hide: "Masquer",
                    recovery_codes_label: "Codes de récupération",
                    regenerate_codes: "Régénérer les codes",
                    recovery_codes_usage_warning: "Chaque code de récupération ne peut être utilisé qu'une seule fois pour accéder à votre compte et sera supprimé après usage. Si vous en avez besoin de plus, cliquez sur",
                    above: "ci-dessus."
                },
                appearance: {
                    breadcrumb: "Apparence",
                    page_title: "Paramètres d'apparence",
                    sr_title: "Paramètres d'apparence",
                    section_title: "Paramètres d'apparence",
                    section_description: "Personnalisez l'apparence de l'application",
                    language_title: "Langue",
                    language_description: "Sélectionnez votre langue préférée pour l'application"
                }
            },
            components: {
                settings_layout: {
                    settings: "Paramètres",
                    manage_preferences: "Gérez les préférences de votre compte",
                    manage_settings: "Gérez votre profil et les paramètres de votre compte",
                    profile: "Profil",
                    password: "Mot de passe",
                    two_factor: "Authentification à deux facteurs",
                    appearance: "Apparence",
                    admin_settings: "Paramètres de l'administrateur",
                    manage_admin_preferences: "Gérez vos préférences administratives"
                },
                delete_user: {
                    title: "Supprimer le compte",
                    description: "Supprimez votre compte et toutes ses ressources",
                    warning: "Avertissement",
                    warning_message: "Veuillez procéder avec prudence, cette action est irréversible.",
                    delete_button: "Supprimer le compte",
                    confirm_title: "Êtes-vous sûr de vouloir supprimer votre compte ?",
                    confirm_description: "Une fois votre compte supprimé, toutes ses ressources et données seront également supprimées définitivement. Veuillez entrer votre mot de passe pour confirmer que vous souhaitez supprimer définitivement votre compte.",
                    password_label: "Mot de passe",
                    password_placeholder: "Mot de passe",
                    cancel: "Annuler",
                    confirm_delete: "Supprimer le compte"
                },
                two_factor_modal: {
                    enabled_title: "Authentification à deux facteurs activée",
                    enabled_description: "L'authentification à deux facteurs est maintenant activée. Scannez le code QR ou entrez la clé de configuration dans votre application d'authentification.",
                    verify_title: "Vérifier le code d'authentification",
                    verify_description: "Entrez le code à 6 chiffres de votre application d'authentification",
                    enable_title: "Activer l'authentification à deux facteurs",
                    enable_description: "Pour terminer l'activation de l'authentification à deux facteurs, scannez le code QR ou entrez la clé de configuration dans votre application d'authentification",
                    close: "Fermer",
                    continue: "Continuer",
                    or_manual: "ou, entrez le code manuellement",
                    back: "Retour",
                    confirm: "Confirmer",
                    setup_key: "Clé de configuration"
                },
                appearance_tabs: {
                    light: "Clair",
                    dark: "Sombre",
                    system: "Système"
                },
                app_sidebar: {
                    dashboard: "Tableau de bord",
                    landing_page: "Page d'accueil",
                    repository: "Dépôt"
                },
                user_menu: {
                    settings: "Paramètres",
                    log_out: "Se déconnecter"
                },
                dashboard: {
                    title: "Tableau de bord",
                    breadcrumb: "Tableau de bord"
                }
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'ar',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
