// JS logic here 
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter" && taskInput.value.trim()) {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    li.addEventListener("click", () => li.remove());
    taskList.appendChild(li);
    taskInput.value = "";
    saveTasks();
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
    li.addEventListener("click", () => li.remove());
    taskList.appendChild(li);
  });
}
loadTasks();

// Journaling
const journal = document.getElementById("journal");
journal.value = localStorage.getItem("journal") || "";
journal.addEventListener("input", () => {
  localStorage.setItem("journal", journal.value);
});

// Theme
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// Language
function setLanguage(lang) {
  const strings = translations[lang];
  if (!strings) return;

  document.getElementById("app-title").textContent = strings.title;
  document.getElementById("todo-title").textContent = strings.todo;
  document.getElementById("journal-title").textContent = strings.journal;
  journal.placeholder = strings.placeholder;
}

// Quote
const quoteBox = document.getElementById("quote");
const quotes = [
  "Μην αναβάλλεις για αύριο ό,τι μπορείς να κάνεις σήμερα.",
  "Small steps every day lead to big change.",
  "Η συνήθεια είναι ο καλύτερος φίλος της πειθαρχίας.",
  "Focus on progress, not perfection.",
  "Η δύναμη είναι μέσα σου."
];
quoteBox.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

// 🔓 Κάνε τις συναρτήσεις διαθέσιμες στο HTML
window.setLanguage = setLanguage;
window.toggleTheme = toggleTheme;

