Album Dashboard Project
A secure, responsive, and neumorphic-themed personal album management application.

🚀 Project Overview
The Album Dashboard is a React-based web application that allows users to manage their personal photo collections. It features a modern, "soft-ui" neumorphic design and a secure authentication flow to protect user data.

🛠 Features
Secure Authentication: Protected route management ensuring only logged-in users can access the dashboard.

Responsive Design: Optimized layout using Flexbox and CSS media queries to ensure the app looks great on mobile, tablet, and desktop.

Modern UI/UX: A consistent neumorphic (soft-shadow) aesthetic across the Login, Register, and Dashboard interfaces.

Persistent Auth State: Uses localStorage to manage session status securely.

⚙️ Tech Stack
Frontend: React, React Router (v6+), TypeScript

Styling: Custom CSS (Neumorphic Design Pattern)

State Management: localStorage for session persistence

📂 Project Structure
Plaintext
/src
  /pages
    Login.tsx       # User authentication and registration
    Dashboard.tsx   # Protected user album view
  App.tsx           # Router configuration and private route wrapping
  PrivateRoute.tsx  # Gatekeeper for route protection
  Login.css         # Styling for login/register pages
  Dashboard.css     # Styling for dashboard interface
🔐 Security Implementation
The application prevents unauthorized access through a Private Route Wrapper:

Login: Sets an isAuthenticated flag in localStorage.

Gatekeeping: PrivateRoute.tsx checks this flag; if missing, it redirects users to the root (/) login page.

Logout: Explicitly removes the isAuthenticated key, immediately invalidating the session.

💻 Setup Instructions
Clone the repository.

Install dependencies:

Bash
npm install react-router-dom
Run the application:

Bash
npm run dev
