// --- TASKS LIST ---
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && taskInput.value.trim()) {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });
    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
  }
});

function saveTasks() {
  const tasks = Array.from(taskList.children).map(li => li.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = JSON.parse(localStorage.getItem("tasks")) || [];
  saved.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    li.addEventListener("click", () => {
      li.remove();
      saveTasks();
    });
    taskList.appendChild(li);
  });
}

// --- JOURNAL SECTION ---
const journal = document.getElementById("journal");

function loadJournal() {
  journal.value = localStorage.getItem("journal") || "";
  journal.addEventListener("input", () => {
    localStorage.setItem("journal", journal.value);
  });
}

// --- THEME PERSISTENCE ---
function toggleTheme() {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

// Apply saved theme on load
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
}

// --- LANGUAGE TOGGLE + PERSISTENCE ---
function setLanguage(lang) {
  const strings = translations[lang];
  if (!strings) return;
  document.getElementById("app-title").textContent = strings.title;
  document.getElementById("todo-title").textContent = strings.todo;
  document.getElementById("journal-title").textContent = strings.journal;
  document.getElementById("journal").placeholder = strings.placeholder;
  localStorage.setItem("lang", lang);
}

function applySavedLanguage() {
  const lang = localStorage.getItem("lang") || (navigator.language.startsWith("el") ? "el" : "en");
  setLanguage(lang);
}

// --- DAILY QUOTE ---
const quotes = [
  "Μην αναβάλλεις για αύριο ό,τι μπορείς να κάνεις σήμερα.",
  "Small steps every day lead to big change.",
  "Η συνήθεια είναι ο καλύτερος φίλος της πειθαρχίας.",
  "Focus on progress, not perfection.",
  "Η δύναμη είναι μέσα σου."
];

function loadQuote() {
  const quoteBox = document.getElementById("quote");
  quoteBox.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
}

// --- INIT ---
window.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  applySavedLanguage();
  loadTasks();
  loadJournal();
  loadQuote();
});

// --- Export για χρήση από HTML onclick
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
