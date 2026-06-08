# Album Dashboard

A secure, responsive, and neumorphic-themed web application designed for personal album management. This project demonstrates secure client-side routing, responsive UI design, and modern CSS aesthetic implementation using React.

## 🚀 Key Features

* **Secure Authentication:** Implements a Private Route wrapper to prevent unauthorized access to protected dashboard pages.
* **Neumorphic Design:** A sophisticated, soft-shadow aesthetic ("Soft UI") applied consistently across all interfaces.
* **Fully Responsive:** Fluid layout using Flexbox and CSS media queries, ensuring the app scales seamlessly from mobile devices to desktop monitors.
* **Persistent Session:** Utilizes browser `localStorage` to manage authentication states effectively.

## 🛠 Tech Stack

* **Core:** React (TypeScript), React Router (v6)
* **Styling:** Custom CSS (Flexbox, Media Queries, Box-Shadows)
* **State Management:** `localStorage`

## 📂 Project Structure

```text
/src
  /pages
    Login.tsx       # User authentication and registration
    Dashboard.tsx   # Protected user album view
  App.tsx           # Router configuration and private route wrapper
  PrivateRoute.tsx  # Route gatekeeper logic
  Login.css         # Login/Register interface styles
  Dashboard.css     # Dashboard interface styles
