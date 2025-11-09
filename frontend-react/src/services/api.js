const API_URL = "http://localhost:5000/api";

export async function signup(userData) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
    credentials: "include",
  });
  return res.json();
}

export async function login(credentials) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
    credentials: "include",
  });
  return res.json();
}

export async function logout() {
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}

export async function getTasks() {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "GET",
    credentials: "include",
  });
  return res.json();
}

export async function addTask(taskData) {
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
    credentials: "include",
  });
  return res.json();
}

export async function updateTask(id, updates) {
  const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updates),
    credentials: "include",
  });
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
    method: "DELETE",
    credentials: "include",
  });
  return res.json();
}

