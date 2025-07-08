# Full-Stack E-commerce CRUD Application

![Python](https://img.shields.io/badge/Python-3.11-3776AB?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-0.104-009688?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-4169E1?style=for-the-badge&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-24.0-2496ED?style=for-the-badge&logo=docker)

A complete, containerized e-commerce application demonstrating full-stack development principles. This project features a Python FastAPI backend serving a RESTful API and a React.js frontend for a dynamic user interface. The entire stack is orchestrated with Docker Compose for seamless setup and deployment.

### ✨ Live Demo / Screenshot

*(It is highly recommended to add a GIF or screenshot of your application in action here. You can use a tool like Giphy Capture or LICEcap to record a short GIF.)*

 <!-- Replace with your actual screenshot URL -->

---

### 📋 Table of Contents

- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Startup](#installation--startup)
- [API Endpoints](#-api-endpoints)
- [Architectural Decisions](#-architectural-decisions)
- [License](#-license)

---

### 🚀 Key Features

-   **Full CRUD Functionality:** Create, Read, Update, and Delete products.
-   **RESTful API:** A well-structured API built with FastAPI for high performance.
-   **Containerized Environment:** Fully containerized with Docker and Docker Compose for easy setup, consistency, and portability across environments.
-   **Single-Page Application (SPA):** A reactive and modern frontend built with React.js.
-   **Modular Codebase:** The backend and frontend code is organized into logical, reusable components and modules.
-   **ORM Integration:** Uses SQLAlchemy for efficient and safe database interactions with PostgreSQL.
-   **Data Validation:** Leverages Pydantic for robust data validation on the backend.

---

### 🛠️ Tech Stack

| Area              | Technology                                                                                                    |
| ----------------- | ------------------------------------------------------------------------------------------------------------- |
| **Backend**       | Python 3.11, FastAPI, Uvicorn                                                                                 |
| **Frontend**      | React.js, Axios                                                                                               |
| **Database**      | PostgreSQL                                                                                                    |
| **ORM / Driver**  | SQLAlchemy, psycopg2                                                                                          |
| **Containerization** | Docker, Docker Compose                                                                                        |
| **API Testing**   | FastAPI's built-in Swagger UI (`/docs`) & ReDoc (`/redoc`)                                                    |

---

### 📁 Project Structure

The project is organized into two main services: `backend` and `frontend`, each with its own Dockerfile and source code.

```
ecommerce-project/
├── docker-compose.yml      # Orchestrates all services
├── backend/
│   ├── Dockerfile          # Defines the backend container
│   ├── requirements.txt
│   └── app/                # Main application package
│       ├── __init__.py
│       ├── main.py         # API endpoints
│       ├── database.py     # Database connection & session
│       ├── models.py       # SQLAlchemy ORM models
│       └── schemas.py      # Pydantic data schemas
└── frontend/
    ├── Dockerfile          # Defines the frontend container
    ├── package.json
    └── src/                # React source code
        ├── App.js          # Main application component
        └── components/     # Reusable React components
```

---

### 🏁 Getting Started

Follow these instructions to get the project up and running on your local machine.

#### Prerequisites

-   [Docker](https://www.docker.com/products/docker-desktop/)
-   [Docker Compose](https://docs.docker.com/compose/install/) (usually included with Docker Desktop)

#### Installation & Startup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/ecommerce-project.git
    cd ecommerce-project
    ```

2.  **Build and run the services using Docker Compose:**
    ```sh
    docker-compose up --build
    ```
    This command will build the Docker images for the frontend and backend, start all the containers, and set up the database.

3.  **Access the application:**
    -   **Frontend:** Open your browser and navigate to [http://localhost:3000](http://localhost:3000)
    -   **Backend API Docs:** Access the interactive API documentation at [http://localhost:8000/docs](http://localhost:8000/docs)

---

### 🔌 API Endpoints

The backend exposes the following RESTful API endpoints for managing products.

| Method | Endpoint                    | Description                                  |
| :----- | :-------------------------- | :------------------------------------------- |
| `POST` | `/products/`                | Creates a new product.                       |
| `GET`  | `/products/`                | Retrieves a list of all products.            |
| `GET`  | `/products/{product_id}`    | Retrieves a single product by its ID.        |
| `PUT`  | `/products/{product_id}`    | Updates an existing product by its ID.       |
| `DELETE` | `/products/{product_id}`  | Deletes a product by its ID.                 |

---

### 🏛️ Architectural Decisions

-   **Why Docker?** Containerization ensures a consistent development, testing, and production environment. It simplifies dependency management and makes the application easy to run on any machine.
-   **Why FastAPI?** Chosen for its high performance, asynchronous support, automatic interactive documentation, and Pydantic-based data validation, which greatly accelerates development.
-   **Why React?** Its component-based architecture is ideal for building scalable and maintainable user interfaces. The virtual DOM ensures efficient updates and a smooth user experience.
-   **Why a modular structure?** Separating concerns (e.g., `database.py`, `models.py`, `schemas.py`, `main.py`) makes the backend code cleaner, easier to test, and more maintainable as the application grows.

---

### 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.