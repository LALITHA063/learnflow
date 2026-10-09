# 🎓 LearnFlow – Online Learning Management System

LearnFlow is a responsive, frontend-only web application designed to simplify online learning. Students can explore courses, enroll in courses, simulate payments, access learning materials, submit assignments, receive notifications, and track their learning progress.

## ✨ Features

* **Dashboard:** View learning activities and progress.
* **Course Management:** Browse, search, and filter available courses.
* **Enrollment:** Enroll in courses with an interactive interface.
* **Simulated Payments:** Demonstrate a payment workflow without real transactions.
* **My Learning:** Access enrolled courses.
* **Assignments:** Submit assignments through the application.
* **Notifications:** View enrollment and payment updates.
* **Progress Tracking:** Monitor course completion.
* **Responsive Design:** Works across desktop and mobile devices.
* **Local Storage:** Preserve application data in the browser.

## 🛠️ Tech Stack

* React.js
* Vite
* CSS
* JavaScript
* Browser Local Storage

## 📁 Project Structure

```text
learnflow/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── README.md
```

## 🚀 Installation and Setup

**Prerequisites:** Node.js and npm installed on your system.

1. Clone the repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Navigate to the project folder:

   ```bash
   cd learnflow
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal, usually `http://localhost:5173`.

## 🌐 Deployment

LearnFlow can be deployed using Vercel.

1. Push the project to GitHub.
2. Sign in to Vercel using GitHub.
3. Import the LearnFlow repository.
4. Select Vite as the framework preset.
5. Set the build command to `npm run build`.
6. Set the output directory to `dist`.
7. Click **Deploy**.

## ⚠️ Limitations

* This is a frontend-only application.
* Payments are simulated and do not process real transactions.
* Data is stored in browser Local Storage.
* User data is not shared across browsers or devices.
* Production authentication and secure payment processing require a backend or external services.

## 🎯 Project Objective

To develop a simple, interactive online learning platform that demonstrates course enrollment, simulated payment workflows, assignment submission, notifications, and progress tracking using modern frontend technologies.

## 👩‍💻 Author

Developed as a learning project using React.js and Vite.

---

⭐ If you find this project useful, consider giving the repository a star!
