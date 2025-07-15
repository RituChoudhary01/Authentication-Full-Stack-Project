# 🔐 Authentication Full Stack App

A complete authentication system built with the MERN stack (MongoDB, Express, React, Node.js). It includes essential features like user registration, login, logout, email verification via OTP, password reset, via OTP.

---

## 🚀 Features

- ✅ User Signup with Email & Password
- ✅ Email Verification via OTP
- ✅ Login with JWT Authentication (Stored in Cookies)
- ✅ Forgot Password & Reset Password Flow
- ✅ Secure Password Hashing using `bcrypt`
- ✅ Backend Validation & Error Handling
- ✅ Fully Responsive Frontend with React

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, Cookies, bcrypt
- **Email**: nodemailer

---

## 📁 Folder Structure
```
/client // React frontend
/server // Node.js backend
├── controllers // Auth controllers
├── models // Mongoose schemas
├── routes // Express routes
├── config // Helper functions (OTP, mailer,connect with db etc.)
├── middlewares // JWT Auth middleware
 ```


🌐 API Endpoint
- POST /api/auth//register 
- POST /api/auth/login
- POST /api/auth/send-verify-otp
- POST /api/auth/verify-account
- POST /api/auth/reset-password
- POST /api/auth/send-reset-otp
- POST /api/auth/logout
- GET /api/auth/is-auth
- GET /api/user/data

## 🔒 Authentication Flow

1. **User signs up** → Account is created, and a confirmation email is sent:  
   _“Your account has been successfully created.”_

2. **User verifies their email** by entering the OTP sent to their inbox → Account is marked as verified.

3. **User logs in** → On successful login, a JWT token is generated and stored in an **HTTP-only cookie** for secure session management.

4. **Protected routes** can only be accessed if the user is authenticated (i.e., has a valid token).

5. **Forgot Password** → User enters their email to receive an OTP.  
   Using this OTP, the user can securely reset their password.

6. **Logout** → JWT cookie is cleared.  
   To access the system again, the user must log in.
## Home Page
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 45 37 AM" src="https://github.com/user-attachments/assets/cfa252df-0c4f-4013-a572-5c395cdd6c53" />
## SignUp page
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 48 18 AM" src="https://github.com/user-attachments/assets/a00d3a9b-d6d3-43b0-ba51-3c4b7dccecb0" />
## Login Page
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 49 36 AM" src="https://github.com/user-attachments/assets/54527ca0-f89c-44b2-bed8-5345c4c2d6cf" />
## Home Page After SignUp
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 46 58 AM" src="https://github.com/user-attachments/assets/9afdb74f-a544-40fc-a59f-72692f2a921b" />
## Forget Password Pages
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 50 16 AM" src="https://github.com/user-attachments/assets/e2141d1e-76ca-42cf-9364-31d367517b08" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 50 25 AM" src="https://github.com/user-attachments/assets/72e29ae2-1704-4f73-95db-33f39d5e3011" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 51 46 AM" src="https://github.com/user-attachments/assets/2aa49e1a-e32b-48fa-a82d-c3e67ec72c0d" />
## verify Email Pages
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 53 13 AM" src="https://github.com/user-attachments/assets/3539d6b8-fcf4-43a6-a404-dc04a69807ec" />
<img width="1470" height="831" alt="Screenshot 2025-07-15 at 5 53 18 AM" src="https://github.com/user-attachments/assets/ef7729d9-ccc4-4483-97eb-76f5b7a7bcda" />

## 🤝 Contributing
PRs are welcome! If you find bugs or want to add features, feel free to open an issue or submit a pull request.

---

## 🧑‍💻 Author

Built with ❤️ by **Ritu Chaudhary**
- 🌐 [Portfolio](https://personal-portfolio-website-gamma-sage.vercel.app)
- 💼 [LinkedIn](https://www.linkedin.com/in/rituchoudhary01)
- 💻 [GitHub](https://github.com/RituChoudhary01)



