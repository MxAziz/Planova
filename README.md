# Planova

A simple and efficient Task Management application with **drag-and-drop**, **due date indicators**, and **activity log tracking**.

## 🚀 Features
- **Task Creation & Deletion** – Add new tasks and remove completed ones.
- **Drag & Drop Support** – Easily move tasks between different statuses.
- **Due Date Indicators** – Overdue tasks appear **red**, upcoming tasks appear **yellow**, and completed tasks appear **green**.
- **Activity Log** – Tracks changes like task status updates.
- **Persistent Storage** – Data stored in local storage or database.
- **Responsive UI** – Built with **React, Tailwind CSS, and dnd-kit**.

## 📂 Technologies Used
- **Frontend:** React, Tailwind CSS, dnd-kit
- **Backend:** Express.js , Mongodb
- **State Management:** React Hooks, TanStack Query

## 🛠 Installation & Setup

1️⃣ **Clone the Repository**
```sh
git clone https://github.com/MxAziz/planova.git
cd planova
```

2️⃣ **Install Dependencies**
```sh
yarn install  # or npm install
```

3️⃣ **Run the Development Server**
```sh
yarn dev  # or npm run dev
```

🔗 Open `http://localhost:5173` in your browser.

## 📜 API Endpoints (If Backend is Used)
| Method | Endpoint        | Description        |
|--------|---------------|--------------------|
| GET    | `/tasks`      | Fetch all tasks    |
| POST   | `/tasks`      | Add a new task     |
| PUT    | `/tasks/:id`  | Update a task      |
| DELETE | `/tasks/:id`  | Delete a task      |

## 📸 Screenshots
_Include some screenshots of your application here._

## 📌 Deployment
To deploy on **Vercel**, run:
```sh
yarn build && vercel
```
Or deploy on **Netlify**:
```sh
yarn build && netlify deploy
```

## 👨‍💻 Developer
- **Name:** Muhammad Aziz
- **GitHub:** [MxAziz](https://github.com/MxAziz)
- **LinkedIn:** [Muhammad Aziz](https://linkedin.com/in/mxaziz)

---
**⭐ If you like this project, please give it a star!**
