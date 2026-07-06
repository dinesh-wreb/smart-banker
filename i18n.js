/* ================================================================
   Smart Banker — Internationalization (i18n)
   Supports 16 Indian languages with full UI string coverage
   ================================================================ */

const I18N = {
  currentLang: 'en',

  languages: [
    { code: 'en',  name: 'English',    native: 'English',        script: 'latin' },
    { code: 'hi',  name: 'Hindi',      native: 'हिन्दी',          script: 'devanagari' },
    { code: 'te',  name: 'Telugu',     native: 'తెలుగు',          script: 'telugu' },
    { code: 'ta',  name: 'Tamil',      native: 'தமிழ்',           script: 'tamil' },
    { code: 'kn',  name: 'Kannada',    native: 'ಕನ್ನಡ',            script: 'kannada' },
    { code: 'ml',  name: 'Malayalam',  native: 'മലയാളം',          script: 'malayalam' },
    { code: 'mr',  name: 'Marathi',    native: 'मराठी',            script: 'devanagari' },
    { code: 'gu',  name: 'Gujarati',   native: 'ગુજરાતી',          script: 'gujarati' },
    { code: 'pa',  name: 'Punjabi',    native: 'ਪੰਜਾਬੀ',           script: 'gurmukhi' },
    { code: 'bn',  name: 'Bengali',    native: 'বাংলা',            script: 'bengali' },
    { code: 'or',  name: 'Odia',       native: 'ଓଡ଼ିଆ',            script: 'odia' },
    { code: 'as',  name: 'Assamese',   native: 'অসমীয়া',          script: 'bengali' },
    { code: 'ur',  name: 'Urdu',       native: 'اردو',             script: 'arabic' },
    { code: 'ko',  name: 'Konkani',    native: 'कोंकणी',           script: 'devanagari' },
    { code: 'ma',  name: 'Manipuri',   native: 'মণিপুরী',          script: 'bengali' },
    { code: 'sa',  name: 'Sanskrit',   native: 'संस्कृतम्',        script: 'devanagari' }
  ],

  strings: {
    en: {
      appName: 'Smart Banker',
      tagline: 'AI Banking Assistant for Every Indian',
      loading: 'Loading...', back: 'Back', next: 'Next', submit: 'Submit',
      cancel: 'Cancel', save: 'Save Changes', close: 'Close', edit: 'Edit',
      delete: 'Delete', confirm: 'Confirm', success: 'Success!', error: 'Error',
      or: 'OR', search: 'Search banking topics...', noResults: 'No results found',
      seeAll: 'See All', learnMore: 'Learn More', comingSoon: 'Coming Soon',
      newBadge: 'NEW', hot: 'HOT', updated: 'UPDATED',
      login: 'Login', register: 'Register', logout: 'Logout',
      emailAddr: 'Email Address', password: 'Password', confirmPwd: 'Confirm Password',
      mobile: 'Mobile Number', fullName: 'Full Name',
      forgotPwd: 'Forgot Password?', sendOtp: 'Send OTP', verifyOtp: 'Verify OTP',
      otpSent: 'OTP sent to', resendOtp: 'Resend OTP', otpExpires: 'OTP expires in',
      createAccount: 'Create Account', alreadyAccount: 'Already have an account?',
      noAccount: "Don't have an account?", signIn: 'Sign In', signUp: 'Sign Up',
      continueGoogle: 'Continue with Google', continueMobile: 'Login with Mobile OTP',
      selectLang: 'Select Language', changeLang: 'Change Language',
      profile: 'Profile', myProfile: 'My Profile', prefLang: 'Preferred Language',
      state: 'State', district: 'District', gender: 'Gender', age: 'Age',
      occupation: 'Occupation', male: 'Male', female: 'Female', other: 'Other',
      updateProfile: 'Update Profile', deleteAccount: 'Delete Account',
      home: 'Home', goodMorning: 'Good Morning', goodAfternoon: 'Good Afternoon',
      goodEvening: 'Good Evening', goodNight: 'Good Night',
      askAnything: 'Ask anything about banking...',
      popularTopics: 'Popular Topics', latestNews: 'Latest Banking News',
      govtSchemes: 'Government Schemes', quickTips: 'Banking Tips',
      emergencyHelp: 'Emergency Help',
      aiAssistant: 'AI Assistant', typeMessage: 'Type your banking question...',
      voiceInput: 'Voice Input', listening: 'Listening...',
      thinking: 'AI is thinking...', playAnswer: 'Play Answer',
      stopReading: 'Stop Reading', clearChat: 'Clear Chat',
      modules: 'Banking Modules', topics: 'Topics', article: 'Article',
      emergency: 'Emergency Help', cyberCrime: 'Cyber Crime Helpline',
      fraudAlert: 'Report Fraud', blockCard: 'Block Card/UPI',
      notifications: 'Notifications', markAllRead: 'Mark all read',
      settings: 'Settings', darkMode: 'Dark Mode',
      helpfulLinks: 'Helpful Links',
      welcomeBack: 'Welcome back', howCanIHelp: 'How can I help you today?',
      startConversation: 'Start a new conversation',
      suggested: 'Suggested Questions',
      readingMode: 'Reading Mode', textSize: 'Text Size',
      biometricLogin: 'Biometric Login', sessionTimeout: 'Session Timeout',
    },
    hi: {
      appName: 'स्मार्ट बैंकर',
      tagline: 'हर भारतीय के लिए AI बैंकिंग सहायक',
      loading: 'लोड हो रहा है...', back: 'वापस', next: 'आगे', submit: 'जमा करें',
      cancel: 'रद्द करें', save: 'सहेजें', close: 'बंद करें',
      or: 'या', search: 'बैंकिंग विषय खोजें...', seeAll: 'सभी देखें',
      newBadge: 'नया', login: 'लॉगिन', register: 'पंजीकरण', logout: 'लॉगआउट',
      emailAddr: 'ईमेल पता', password: 'पासवर्ड', mobile: 'मोबाइल नंबर',
      fullName: 'पूरा नाम', forgotPwd: 'पासवर्ड भूल गए?',
      sendOtp: 'OTP भेजें', verifyOtp: 'OTP सत्यापित करें',
      otpSent: 'OTP भेजा गया', resendOtp: 'OTP दोबारा भेजें',
      createAccount: 'खाता बनाएं', alreadyAccount: 'पहले से खाता है?',
      noAccount: 'खाता नहीं है?', signIn: 'साइन इन', signUp: 'साइन अप',
      continueGoogle: 'Google से जारी रखें', continueMobile: 'मोबाइल OTP से लॉगिन',
      selectLang: 'भाषा चुनें', changeLang: 'भाषा बदलें',
      profile: 'प्रोफ़ाइल', myProfile: 'मेरी प्रोफ़ाइल',
      state: 'राज्य', district: 'जिला', gender: 'लिंग', age: 'आयु',
      occupation: 'व्यवसाय', male: 'पुरुष', female: 'महिला', other: 'अन्य',
      updateProfile: 'प्रोफ़ाइल अपडेट करें', deleteAccount: 'खाता हटाएं',
      home: 'होम', goodMorning: 'सुप्रभात', goodAfternoon: 'नमस्ते',
      goodEvening: 'शुभ संध्या', goodNight: 'शुभ रात्रि',
      askAnything: 'बैंकिंग के बारे में कुछ भी पूछें...',
      popularTopics: 'लोकप्रिय विषय', latestNews: 'ताज़ा बैंकिंग समाचार',
      govtSchemes: 'सरकारी योजनाएं', quickTips: 'बैंकिंग टिप्स',
      emergencyHelp: 'आपातकालीन सहायता',
      aiAssistant: 'AI सहायक', typeMessage: 'अपना बैंकिंग प्रश्न टाइप करें...',
      voiceInput: 'आवाज़ इनपुट', listening: 'सुन रहा हूं...',
      thinking: 'AI सोच रहा है...', playAnswer: 'उत्तर सुनें',
      modules: 'बैंकिंग मॉड्यूल', topics: 'विषय',
      emergency: 'आपातकालीन सहायता', cyberCrime: 'साइबर क्राइम हेल्पलाइन',
      fraudAlert: 'धोखाधड़ी रिपोर्ट', blockCard: 'कार्ड/UPI ब्लॉक करें',
      notifications: 'सूचनाएं', settings: 'सेटिंग्स',
      welcomeBack: 'स्वागत है', howCanIHelp: 'आज मैं आपकी कैसे मदद करूं?',
    },
    te: {
      appName: 'స్మార్ట్ బ్యాంకర్',
      tagline: 'ప్రతి భారతీయుడికి AI బ్యాంకింగ్ సహాయకుడు',
      loading: 'లోడ్ అవుతోంది...', back: 'వెనక్కి', next: 'తదుపరి',
      or: 'లేదా', search: 'బ్యాంకింగ్ విషయాలు వెతకండి...', seeAll: 'అన్నీ చూడండి',
      newBadge: 'కొత్త', login: 'లాగిన్', register: 'నమోదు', logout: 'లాగ్ అవుట్',
      emailAddr: 'ఇమెయిల్ చిరునామా', password: 'పాస్‌వర్డ్', mobile: 'మొబైల్ నంబర్',
      fullName: 'పూర్తి పేరు', forgotPwd: 'పాస్‌వర్డ్ మర్చిపోయారా?',
      sendOtp: 'OTP పంపించు', verifyOtp: 'OTP ధృవీకరించు',
      createAccount: 'ఖాతా సృష్టించు', selectLang: 'భాష ఎంచుకోండి',
      home: 'హోమ్', goodMorning: 'శుభోదయం', goodAfternoon: 'శుభ మధ్యాహ్నం',
      goodEvening: 'శుభ సాయంత్రం',
      askAnything: 'బ్యాంకింగ్ గురించి ఏదైనా అడగండి...',
      popularTopics: 'ప్రసిద్ధ అంశాలు', latestNews: 'తాజా బ్యాంకింగ్ వార్తలు',
      govtSchemes: 'ప్రభుత్వ పథకాలు', quickTips: 'బ్యాంకింగ్ చిట్కాలు',
      emergencyHelp: 'అత్యవసర సహాయం', aiAssistant: 'AI సహాయకుడు',
      typeMessage: 'మీ బ్యాంకింగ్ ప్రశ్న టైప్ చేయండి...',
      listening: 'వింటున్నాను...', thinking: 'AI ఆలోచిస్తోంది...',
      modules: 'బ్యాంకింగ్ మాడ్యూల్స్', notifications: 'నోటిఫికేషన్లు',
      settings: 'సెట్టింగులు', profile: 'ప్రొఫైల్',
    },
    ta: {
      appName: 'ஸ்மார்ட் பேங்கர்',
      tagline: 'ஒவ்வொரு இந்தியருக்கும் AI வங்கி உதவியாளர்',
      loading: 'ஏற்றுகிறது...', back: 'திரும்பு', seeAll: 'அனைத்தும் காண்க',
      newBadge: 'புதிய', login: 'உள்நுழை', register: 'பதிவு', logout: 'வெளியேறு',
      emailAddr: 'மின்னஞ்சல் முகவரி', password: 'கடவுச்சொல்', mobile: 'மொபைல் எண்',
      fullName: 'முழு பெயர்', forgotPwd: 'கடவுச்சொல் மறந்துவிட்டதா?',
      sendOtp: 'OTP அனுப்பு', verifyOtp: 'OTP சரிபார்',
      createAccount: 'கணக்கை உருவாக்கு', selectLang: 'மொழியை தேர்ந்தெடு',
      home: 'முகப்பு', goodMorning: 'காலை வணக்கம்', goodAfternoon: 'மதிய வணக்கம்',
      goodEvening: 'மாலை வணக்கம்',
      askAnything: 'வங்கி பற்றி எதையும் கேளுங்கள்...',
      popularTopics: 'பிரசித்தமான தலைப்புகள்', govtSchemes: 'அரசு திட்டங்கள்',
      emergencyHelp: 'அவசர உதவி', aiAssistant: 'AI உதவியாளர்',
      typeMessage: 'உங்கள் வங்கி கேள்வியை தட்டச்சு செய்யுங்கள்...',
      listening: 'கேட்கிறேன்...', thinking: 'AI யோசிக்கிறது...',
      modules: 'வங்கி தொகுதிகள்', notifications: 'அறிவிப்புகள்',
      profile: 'சுயவிவரம்',
    },
    kn: {
      appName: 'ಸ್ಮಾರ್ಟ್ ಬ್ಯಾಂಕರ್',
      tagline: 'ಪ್ರತಿ ಭಾರತೀಯರಿಗೆ AI ಬ್ಯಾಂಕಿಂಗ್ ಸಹಾಯಕ',
      loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...', back: 'ಹಿಂದೆ', seeAll: 'ಎಲ್ಲಾ ನೋಡಿ',
      newBadge: 'ಹೊಸ', login: 'ಲಾಗಿನ್', register: 'ನೋಂದಣಿ',
      home: 'ಮನೆ', goodMorning: 'ಶುಭ ಬೆಳಿಗ್ಗೆ',
      askAnything: 'ಬ್ಯಾಂಕಿಂಗ್ ಬಗ್ಗೆ ಏನಾದರೂ ಕೇಳಿ...',
      popularTopics: 'ಜನಪ್ರಿಯ ವಿಷಯಗಳು', govtSchemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
      modules: 'ಬ್ಯಾಂಕಿಂಗ್ ಮಾಡ್ಯೂಲ್‌ಗಳು', aiAssistant: 'AI ಸಹಾಯಕ',
      listening: 'ಕೇಳುತ್ತಿದ್ದೇನೆ...', profile: 'ಪ್ರೊಫೈಲ್',
    },
    ml: {
      appName: 'സ്മാർട്ട് ബാങ്കർ',
      tagline: 'ഓരോ ഭാരതീയനും AI ബാങ്കിംഗ് സഹായി',
      loading: 'ലോഡ് ചെയ്യുന്നു...', back: 'മടങ്ങുക',
      newBadge: 'പുതിയ', login: 'ലോഗിൻ', register: 'രജിസ്റ്റർ',
      home: 'ഹോം', goodMorning: 'സുപ്രഭാതം',
      askAnything: 'ബാങ്കിംഗിനെ കുറിച്ച് എന്തും ചോദിക്കൂ...',
      govtSchemes: 'സർക്കാർ പദ്ധതികൾ', aiAssistant: 'AI സഹായി',
      listening: 'ശ്രദ്ധിക്കുന്നു...', modules: 'ബാങ്കിംഗ് മൊഡ്യൂളുകൾ',
    },
    mr: {
      appName: 'स्मार्ट बॅंकर',
      tagline: 'प्रत्येक भारतीयासाठी AI बँकिंग सहाय्यक',
      loading: 'लोड होत आहे...', back: 'मागे', seeAll: 'सर्व पहा',
      newBadge: 'नवीन', login: 'लॉगिन', register: 'नोंदणी',
      home: 'मुख्यपृष्ठ', goodMorning: 'सुप्रभात',
      askAnything: 'बँकिंगबद्दल काहीही विचारा...',
      govtSchemes: 'सरकारी योजना', aiAssistant: 'AI सहाय्यक',
      listening: 'ऐकत आहे...', modules: 'बँकिंग मॉड्यूल्स',
    },
    gu: {
      appName: 'સ્માર્ટ બૅંકર',
      tagline: 'દરેક ભારતીય માટે AI બૅન્કિંગ સહાયક',
      loading: 'લોડ થઈ રહ્યું છે...', back: 'પાછળ',
      newBadge: 'નવું', login: 'લૉગઇન', register: 'નોંધણી',
      home: 'હોમ', goodMorning: 'સુ-પ્રભાત',
      askAnything: 'બૅન્કિંગ વિશે કંઈ પણ પૂછો...',
      aiAssistant: 'AI સહાયક', listening: 'સાંભળી રહ્યો છું...',
    },
    bn: {
      appName: 'স্মার্ট ব্যাংকার',
      tagline: 'প্রতিটি ভারতীয়ের জন্য AI ব্যাংকিং সহকারী',
      loading: 'লোড হচ্ছে...', back: 'ফিরে যান',
      newBadge: 'নতুন', login: 'লগইন', register: 'নিবন্ধন',
      home: 'হোম', goodMorning: 'সুপ্রভাত',
      askAnything: 'ব্যাংকিং সম্পর্কে যেকোনো কিছু জিজ্ঞেস করুন...',
      aiAssistant: 'AI সহকারী', listening: 'শুনছি...',
    },
    pa: {
      appName: 'ਸਮਾਰਟ ਬੈਂਕਰ',
      tagline: 'ਹਰ ਭਾਰਤੀ ਲਈ AI ਬੈਂਕਿੰਗ ਸਹਾਈਕ',
      loading: 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...', back: 'ਵਾਪਸ',
      newBadge: 'ਨਵਾਂ', login: 'ਲੌਗਇਨ', register: 'ਰਜਿਸਟਰ',
      home: 'ਹੋਮ', goodMorning: 'ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ',
      askAnything: 'ਬੈਂਕਿੰਗ ਬਾਰੇ ਕੁਝ ਵੀ ਪੁੱਛੋ...',
      aiAssistant: 'AI ਸਹਾਈਕ', listening: 'ਸੁਣ ਰਿਹਾ ਹਾਂ...',
    },
  },

  t(key) {
    const langStrings = this.strings[this.currentLang] || this.strings.en;
    return langStrings[key] || this.strings.en[key] || key;
  },

  setLanguage(code) {
    const lang = this.languages.find(l => l.code === code);
    if (lang) {
      this.currentLang = code;
      localStorage.setItem('sb_lang', code);
      this.applyLanguage();
    }
  },

  applyLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.getAttribute('data-i18n-placeholder'));
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      el.title = this.t(el.getAttribute('data-i18n-title'));
    });
    document.documentElement.lang = this.currentLang;
    // RTL support for Urdu
    document.documentElement.dir = this.currentLang === 'ur' ? 'rtl' : 'ltr';
    window.dispatchEvent(new CustomEvent('langChange', { detail: { lang: this.currentLang } }));
  },

  getLangInfo(code) {
    return this.languages.find(l => l.code === code) || this.languages[0];
  },

  getCurrentLangNative() {
    return this.getLangInfo(this.currentLang)?.native || 'English';
  },

  getVoiceLang() {
    const voiceMap = {
      en: 'en-IN', hi: 'hi-IN', te: 'te-IN', ta: 'ta-IN',
      kn: 'kn-IN', ml: 'ml-IN', mr: 'mr-IN', gu: 'gu-IN',
      pa: 'pa-IN', bn: 'bn-IN', ur: 'ur-IN', or: 'or-IN', as: 'as-IN'
    };
    return voiceMap[this.currentLang] || 'en-IN';
  },

  init() {
    const saved = localStorage.getItem('sb_lang');
    if (saved && this.languages.find(l => l.code === saved)) {
      this.currentLang = saved;
    } else {
      const browserLang = (navigator.language || 'en').split('-')[0];
      if (this.strings[browserLang]) this.currentLang = browserLang;
    }
    this.applyLanguage();
  }
};

window.I18N = I18N;
