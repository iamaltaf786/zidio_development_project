## Building frontend side

1. done /home page
   -- it has Navbar, dashboardSection right now

2. done /login and /signup page withRouting.
   -- routing done, Backend STILL REMAINS

3. Route like
   -- when user enters username, password
   -> check from server is it correct or not
   -> when user successfully logged in he nevigate to /home page.
   -> show password/username if wrongly entered password

   -- if both unmatched nevigate to /signup

## Building server folder/ Backend using Node.js

<!-- https://chatgpt.com/share/67d95c28-c6b4-8000-b0d3-7c6ef129c9da -->

1. Initiate Node.js Project

```bash
   mkdir server
   cd server
   npm init -y
```

2. Install the necessary packages for your backend.

```bash
   npm install express mongoose dotenv cors bcryptjs jsonwebtoken cookie-parser nodemon
```

3. Create the Project Structure in Server Folder.

```
auth-backend/
│── models/
│   ├── User.js
│── routes/
│   ├── authRoutes.js
│── config/
│   ├── db.js
│── middleware/
│   ├── authMiddleware.js
│── .env
│── server.js

```

4. Backend codes are at link :

<!-- ```bash
https://chatgpt.com/share/67d95c28-c6b4-8000-b0d3-7c6ef129c9da
``` -->

5. Nodemon automate code are at :

<!-- ```bash
https://chatgpt.com/share/67d95cbb-8520-8000-8e01-a036cbfd82d3
``` -->

<h2>Test the API</h2>
<p>There are several methods/tools to test API</p>
<ul>
<li>Postman/Thunder Client – Best for testing APIs quickly.</li>
<li>Terminal (cURL) – Useful if you prefer command-line tools.</li>
<li>Browser Console / Axios – Good if you're integrating with your frontend.</li>
</ul>
   -> Using Thunder Client to test the API

<p>-->Steps</p>
<ol>
<li>Open Thunder Client.</li>
<li>Click **New Request**.</li>
<li>Select **POST**, enter the URL </li>
```bash
http://localhost:5000/api/auth/signup
```

<li>Go to the Body section and select JSON.</li>
<li>Enter the signup data (same JSON as above).</li>
<li>Click Send.</li>
</ol>

<h1>To run the app</h1>

```bash
#Backend (inside server folder)
npm start  

# Frontend (inside client folder)
npm run dev


```