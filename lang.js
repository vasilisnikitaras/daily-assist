{const translations = {
  el: {
    title: "📅 Daily Assist",
    todo: "📝 Λίστα Εργασιών",
    journal: "✍️ Καθημερινό Σημειωματάριο",
    placeholder: "Σημείωσε τις σκέψεις σου..."
  },
  en: {
    title: "📅 Daily Assist",
    todo: "📝 Task List",
    journal: "✍️ Daily Journal",
    placeholder: "Jot down your thoughts..."
  }
};

// Προσθήκη αυτόματης επιλογής based on browser (προαιρετικά)
window.addEventListener("DOMContentLoaded", () => {
  const lang = navigator.language.startsWith("el") ? "el" : "en";
  setLanguage(lang);
});
} 
