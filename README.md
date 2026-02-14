# HRMS Lite

## Project Overview

HRMS Lite is a lightweight web-based Human Resource Management System designed to manage basic HR operations.  
The application allows an admin to manage employee records and track daily attendance through a simple, clean, and professional user interface.

The system focuses on core HR functionality such as employee creation, attendance marking, and record viewing, without including advanced features like authentication, payroll, or leave management.

---
# HRMS Lite

## Project Overview

HRMS Lite is a lightweight web-based Human Resource Management System designed to manage basic HR operations.
The application allows an admin to manage employee records and track daily attendance through a simple, clean, and professional user interface.

The system focuses on core HR functionality such as employee creation, attendance marking, and record viewing, without including advanced features like authentication, payroll, or leave management.

---

## Tech Stack Used

### Frontend
- React (Vite)
- JavaScript (ES6+)
- Axios
- CSS (custom styling)

### Backend
- Python
- FastAPI
- Pydantic
- Uvicorn

### Database
- MongoDB

---

## Steps to Run the Project Locally

### Prerequisites
- Node.js (v16 or later)
- Python (v3.10 or later)
- MongoDB (local instance or MongoDB Atlas)

---

### Backend Setup

Run these commands in a terminal:

```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements.txt
```

Create a `.env` file inside the `backend` directory with the following content:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the backend server:

```bash
uvicorn app.main:app --reload
```

Backend will run at:

http://127.0.0.1:8000

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:

http://localhost:5173

## Assumptions and Limitations

- The system assumes a single admin user (no authentication or authorization).
- Payroll, leave management, and advanced HR features are intentionally out of scope.
- Designed for small-scale internal usage.
- No role-based access control.
- Focus is on correctness, usability, and clean implementation rather than feature expansion.

