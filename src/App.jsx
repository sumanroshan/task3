
import React, { useState } from "react";
import "./App.css";

// Student Data - List Rendering
const students = [
  {
    id: 1,
    name: "Arun Kumar",
    email: "arun@gmail.com",
    age: 21,
    city: "Chennai",
    role: "Frontend Developer"
  },
  {
    id: 2,
    name: "Priya",
    email: "priya@gmail.com",
    age: 22,
    city: "Coimbatore",
    role: "UI Designer"
  },
  {
    id: 3,
    name: "Karthik",
    email: "karthik@gmail.com",
    age: 23,
    city: "Madurai",
    role: "Backend Developer"
  },
  {
    id: 4,
    name: "Divya",
    email: "divya@gmail.com",
    age: 21,
    city: "Salem",
    role: "Full Stack Developer"
  },
  {
    id: 5,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 24,
    city: "Trichy",
    role: "React Developer"
  }
];

// Login Component
function Login({ onLogin }) {
  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Welcome Back!</h1>
        <p>Please login to continue</p>

        <input
          type="text"
          placeholder="Enter your username"
        />

        <input
          type="password"
          placeholder="Enter your password"
        />

        <button onClick={onLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

// Home Component
function Home({ onLogout }) {
  return (
    <div className="home-container">
      <div className="welcome">
        <h1>Welcome to Student Dashboard 🎓</h1>
        <p>You have successfully logged in!</p>

        <button onClick={onLogout}>
          Logout
        </button>
      </div>

      <h2>Student Details</h2>

      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>

            <p><b>Email:</b> {student.email}</p>
            <p><b>Age:</b> {student.age}</p>
            <p><b>City:</b> {student.city}</p>
            <p><b>Role:</b> {student.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main App Component
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
