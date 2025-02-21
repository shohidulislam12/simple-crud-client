
# Simple CRUD Admin & User Search App

## Short Description

This project is a full-stack CRUD application with two main sections:

1. **Admin Dashboard:**  
   - Allows administrators to create, edit, and delete cards (records) using a responsive UI.
   - Cards contain details like name, NID, date of birth, parent's names, roll number, program, session, passing year, and CGPA.
   - Includes night mode (dark theme) support for a modern look.
  
2. **User Search:**  
   - Users can search for their information by entering search criteria (e.g., roll number, passing year).
   - The app displays their information if found.

Additionally, the application uses JWT-based authentication and authorization to secure routes and manage user sessions.

## Live Links

- **Live App:** [https://your-live-app-link.com](https://your-live-app-link.com)
- **GitHub Repository:**  
  - [Frontend Repository](https://github.com/yourusername/simple-crud-frontend)
  - [Backend Repository](https://github.com/yourusername/simple-crud-backend)

## Dependencies

### Frontend

- **React** – For building the user interface.
- **Vite** – For fast development and build process.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **DaisyUI** – Pre-built UI components for Tailwind CSS.
- **Axios** – For making HTTP requests.
- **React Router** – For client-side routing.
- **JWT Decode (optional)** – For decoding JWT tokens on the client.
- **React Toastify** – For notifications.
- **@tanstack/react-query** – For data fetching and caching.
- **react-beautiful-dnd** – For drag-and-drop functionality in the admin dashboard.
- **Dark Mode Support:** Built-in with Tailwind’s dark mode classes.

### Backend

- **Express.js** – For building the REST API.
- **MongoDB & Mongoose** – For data storage and schema modeling.
- **jsonwebtoken** – For JWT creation and verification.
- **bcryptjs** – For password hashing.
- **cors** – For cross-origin resource sharing.
- **dotenv** – For managing environment variables.
- **Nodemon** (optional) – For automatic server restarts during development.

## Installation Steps

### Prerequisites

- Node.js (v14 or above recommended)
- npm or yarn
- A MongoDB instance (local or Atlas)

### Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/simple-crud-frontend.git
   cd simple-crud-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the project root and add:
   ```
   VITE_BASE_URL=http://localhost:5000
   ```
   (Adjust the URL to your backend if necessary.)

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
5. **Access the Application:**
   Open your browser at `http://localhost:3000`.

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/simple-crud-backend.git
   cd simple-crud-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the project root with:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_secret_key
   ```
   Replace `your_mongodb_connection_string` and `your_secret_key` with your actual values.

4. **Start the Server:**
   ```bash
   npm start
   ```
   or, if using nodemon:
   ```bash
   npx nodemon server.js
   ```

## API Endpoints

- **User Authentication:**
  - `POST /auth/register` – Register a new user.
  - `POST /auth/login` – Authenticate user and return JWT.
- **Admin CRUD for Cards (Records):**
  - `POST /records` – Create a new record.
  - `GET /records` – Get all records.
  - `GET /records/:id` – Get a specific record.
  - `PUT /records/:id` – Update a record.
  - `DELETE /records/:id` – Delete a record.
- **User Search:**
  - `GET /user?roll=xxx&year=yyy` – Retrieve user information based on roll number and passing year.

## Technologies Used

- **Frontend:** React, Vite, Tailwind CSS, DaisyUI, Axios, React Router, React Query, react-beautiful-dnd.
- **Backend:** Express.js, MongoDB, Mongoose, JWT, bcryptjs, cors, dotenv.

## Features

- **CRUD Operations:**  
  Admins can create, update, and delete cards containing user details.
  
- **User Search:**  
  Users can search for their details using a search form.
  
- **JWT & Authentication:**  
  Secure authentication using JWT tokens with protected routes.
  
- **Dark Mode:**  
  A fully responsive design with night mode support using Tailwind CSS.
  
- **Drag & Drop:**  
  Drag-and-drop functionality for reordering items in the admin dashboard.
  
- **Real-Time Feedback:**  
  User notifications via React Toastify.

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

---

This README file covers all key aspects of your project, including a short description, live links, dependencies, installation steps, API endpoints, technologies used, and key features. Customize any section as needed to better fit your project’s specifics.