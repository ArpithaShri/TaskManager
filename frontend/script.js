const API_URL = "http://localhost:5000/api/tasks";
const taskList = document.getElementById("taskList");
const addBtn = document.getElementById("addBtn");

async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.title}</span>
      <div>
        <button onclick="deleteTask('${task._id}')">🗑️</button>
      </div>`;
    taskList.appendChild(li);
  });
}

addBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (!title) return alert("Enter a title");
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  fetchTasks();
});

async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchTasks();
}

fetchTasks();
