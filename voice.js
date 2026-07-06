/* ================================================================
   Smart Banker — Voice Module
   Web Speech API: Speech-to-Text + Text-to-Speech
   ================================================================ */

const VoiceEngine = {
  recognition: null,
  synthesis: window.speechSynthesis,
  isListening: false,
  isSpeaking: false,
  currentUtterance: null,
  onResult: null,
  onEnd: null,

  // ── Speech-to-Text ────────────────────────────────────────────
  initRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      console.warn('Speech Recognition not supported in this browser.');
      return false;
    }
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;
    this.setRecognitionLanguage();
    return true;
  },

  setRecognitionLanguage() {
    if (!this.recognition) return;
    const lang = window.I18N ? window.I18N.getVoiceLang() : 'en-IN';
    this.recognition.lang = lang;
  },

  startListening(callbacks = {}) {
    if (this.isListening) { this.stopListening(); return; }
    if (!this.recognition && !this.initRecognition()) {
      if (callbacks.onError) callbacks.onError('Speech recognition not supported');
      Toast.show('Voice input not supported in your browser. Please try Chrome.', 'warning');
      return;
    }
    this.setRecognitionLanguage();
    this.isListening = true;
    if (callbacks.onStart) callbacks.onStart();

    this.recognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const t = event.results[i][0].transcript;
        if (event.results[i].isFinal) final += t;
        else interim += t;
      }
      if (callbacks.onInterim) callbacks.onInterim(interim);
      if (final && callbacks.onFinal) callbacks.onFinal(final.trim());
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      if (callbacks.onEnd) callbacks.onEnd();
      const msg = event.error === 'no-speech' ? 'No speech detected. Please try again.' :
                  event.error === 'not-allowed' ? 'Microphone access denied. Please allow microphone.' :
                  'Voice input error: ' + event.error;
      if (callbacks.onError) callbacks.onError(msg);
      else Toast.show(msg, 'error');
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (callbacks.onEnd) callbacks.onEnd();
    };

    try {
      this.recognition.start();
    } catch (e) {
      this.isListening = false;
      if (callbacks.onEnd) callbacks.onEnd();
    }
  },

  stopListening() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  },

  // ── Text-to-Speech ────────────────────────────────────────────
  speak(text, options = {}) {
    if (!this.synthesis) {
      console.warn('Speech synthesis not supported.');
      return;
    }
    this.stopSpeaking();

    // Clean markdown from text
    const cleaned = text
      .replace(/#{1,6}\s/g, '')
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/`(.*?)`/g, '$1')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/^\s*[-*+]\s/gm, '')
      .replace(/\n+/g, '. ')
      .substring(0, 2000); // Limit length

    this.currentUtterance = new SpeechSynthesisUtterance(cleaned);
    const lang = window.I18N ? window.I18N.getVoiceLang() : 'en-IN';
    this.currentUtterance.lang = options.lang || lang;
    this.currentUtterance.rate = options.rate || parseFloat(localStorage.getItem('sb_voice_rate') || '0.9');
    this.currentUtterance.pitch = options.pitch || 1.0;
    this.currentUtterance.volume = options.volume || 1.0;

    // Try to find a matching voice
    const voices = this.synthesis.getVoices();
    const preferred = voices.find(v => v.lang === this.currentUtterance.lang) ||
                      voices.find(v => v.lang.startsWith(this.currentUtterance.lang.split('-')[0])) ||
                      voices.find(v => v.lang === 'en-IN') ||
                      voices[0];
    if (preferred) this.currentUtterance.voice = preferred;

    this.currentUtterance.onstart = () => { this.isSpeaking = true; if (options.onStart) options.onStart(); };
    this.currentUtterance.onend   = () => { this.isSpeaking = false; if (options.onEnd) options.onEnd(); };
    this.currentUtterance.onerror = () => { this.isSpeaking = false; if (options.onEnd) options.onEnd(); };

    this.isSpeaking = true;
    this.synthesis.speak(this.currentUtterance);
  },

  stopSpeaking() {
    if (this.synthesis) { this.synthesis.cancel(); this.isSpeaking = false; }
  },

  pauseSpeaking() {
    if (this.synthesis && this.isSpeaking) this.synthesis.pause();
  },

  resumeSpeaking() {
    if (this.synthesis) this.synthesis.resume();
  },

  setRate(rate) {
    const r = Math.max(0.5, Math.min(2.0, parseFloat(rate)));
    localStorage.setItem('sb_voice_rate', r);
    if (this.currentUtterance) this.currentUtterance.rate = r;
  },

  getVoices() {
    return this.synthesis ? this.synthesis.getVoices() : [];
  },

  isSupported() {
    return !!(window.SpeechRecognition || window.webkitSpeechRecognition) && !!window.speechSynthesis;
  },

  init() {
    if (this.synthesis) {
      // Load voices (some browsers load them async)
      if (this.synthesis.getVoices().length === 0) {
        this.synthesis.addEventListener('voiceschanged', () => {
          console.log(`Loaded ${this.synthesis.getVoices().length} voices.`);
        });
      }
    }
  }
};

window.VoiceEngine = VoiceEngine;
