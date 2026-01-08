# Node.js File-Based Login System

This is a simple **Node.js mini project** that implements a **user login system** using core Node.js modules.  
The project is designed to understand how backend login logic works without using any frameworks or databases.

---

## Features
- Login form built with **HTML and CSS**
- Backend server created using **Node.js HTTP module**
- User credentials stored in a **JSON file**
- Handles **GET and POST requests**
- Uses **fs** and **path** modules for file handling

---

## Technologies Used
- Node.js
- HTTP module
- File System (`fs`)
- Path module
- HTML
- CSS

---

## Project Structure
nodejs-file-based-login-system/
│
├── server.js
├── package.json
│
├── data/
│ └── users.json
│
├── public/
│ ├── login.html
│ └── style.css
│
└── README.md


---

## How the Project Works
1. The server serves the login page to the browser
2. User submits login credentials using a form
3. Credentials are sent to the server via a POST request
4. Server reads user data from `users.json`
5. Login is validated and a response is sent back

---

## How to Run
1. Make sure Node.js is installed
2. Open terminal in the project folder
3. Run the server:
   ```bash
   node server.js
4. Open browser and visit : http://localhost:3000

## Note
This project is created for learning purposes only.
It does not include security features like password hashing or databases.