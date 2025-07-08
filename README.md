# Full-Stack E-commerce CRUD Application

> A complete, containerized e-commerce application demonstrating CRUD (Create, Read, Update, Delete) functionality for managing products. Built with FastAPI, PostgreSQL, and React.

This project provides a robust foundation for a modern web application. The backend is a RESTful API built with Python and FastAPI, which communicates with a PostgreSQL database. The frontend is a dynamic single-page application built with React.js. The entire stack is orchestrated using Docker and Docker Compose for seamless development and deployment.



## ✨ Features

-   **Full CRUD Operations:** Create, read, update, and delete products through an intuitive user interface.
-   **RESTful API:** A well-structured backend API for managing product data. Interactive API documentation is available via Swagger UI.
-   **Containerized Environment:** Uses Docker and Docker Compose to set up the entire application stack (backend, frontend, database) with a single command.
-   **Live Reloading:** Both the FastAPI backend and the React frontend are configured for live reloading, providing an efficient development experience.
-   **Modular Codebase:** The code is organized into logical modules and components for better maintainability and scalability.
-   **Database Persistence:** Product data is stored in a PostgreSQL database, with data persisting across container restarts using a Docker volume.

## 🛠️ Tech Stack

| Component         | Technology                               |
| ----------------- | ---------------------------------------- |
| **Backend**       | Python 3.11, FastAPI                     |
| **Frontend**      | React.js, Axios                          |
| **Database**      | PostgreSQL 15                            |
| **ORM / Driver**  | SQLAlchemy, psycopg2                     |
| **Containerization** | Docker, Docker Compose                   |
| **API Server**    | Uvicorn                                  |

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You must have **Docker** and **Docker Compose** installed on your system.

-   [Install Docker Desktop](https://www.docker.com/products/docker-desktop/) (includes Docker Compose)

### Installation & Running the Application

1.  **Clone the repository:**
    ```sh
    git clone <your-repository-url>
    cd ecommerce-project
    ```

2.  **Build and run the services using Docker Compose:**
    From the root `ecommerce-project` directory, run the following command. This will build the images for the frontend and backend, and start all the services.
    ```sh
    docker-compose up --build
    ```
    The `--build` flag ensures that the Docker images are rebuilt if you've made any changes to the Dockerfiles or source code.

3.  **Access the Application:**
    Once the containers are running, you can access the different parts of the application:
    -   **Frontend Application:** [http://localhost:3000](http://localhost:3000)
    -   **Backend API Docs (Swagger):** [http://localhost:8000/docs](http://localhost:8000/docs)

The first time you run the application, Docker will download the necessary base images, which might take a few minutes.

## 🛑 Stopping the Application

To stop and remove the running containers, press `Ctrl + C` in the terminal where `docker-compose` is running, and then execute:

```sh
docker-compose down
```
This command will stop the containers. If you want to remove the database volume as well (deleting all product data), you can run `docker-compose down -v`.

## 📂 Project Structure

```
ecommerce-project/
├── docker-compose.yml
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── app/
│       ├── __init__.py
│       ├── main.py
│       ├── database.py
│       ├── models.py
│       └── schemas.py
└── frontend/
    ├── Dockerfile
    ├── package.json
    └── src/
        ├── App.css
        ├── App.js
        ├── index.js
        └── components/
            ├── ProductForm.js
            ├── ProductCard.js
            └── EditProductForm.js
```

## 📝 API Endpoints

The backend provides the following RESTful API endpoints for managing products.

#### `POST /products/`

-   **Description:** Creates a new product.
-   **Request Body:**
    ```json
    {
      "name": "string",
      "description": "string",
      "price": 0.0,
      "inventory": 0
    }
    ```
-   **Success Response (200 OK):**
    ```json
    {
      "name": "string",
      "description": "string",
      "price": 0.0,
      "inventory": 0,
      "id": 1
    }
    ```

---

#### `GET /products/`

-   **Description:** Retrieves a list of all products.
-   **Query Parameters:**
    -   `skip` (int, optional, default: 0): Number of products to skip.
    -   `limit` (int, optional, default: 100): Maximum number of products to return.
-   **Success Response (200 OK):**
    ```json
    [
      {
        "name": "string",
        "description": "string",
        "price": 0.0,
        "inventory": 0,
        "id": 1
      }
    ]
    ```

---

#### `GET /products/{product_id}`

-   **Description:** Retrieves a single product by its ID.
-   **Path Parameter:** `product_id` (int).
-   **Success Response (200 OK):**
    ```json
    {
      "name": "string",
      "description": "string",
      "price": 0.0,
      "inventory": 0,
      "id": 1
    }
    ```
-   **Error Response (404 Not Found):**
    ```json
    {
      "detail": "Product not found"
    }
    ```

---

#### `PUT /products/{product_id}`

-   **Description:** Updates an existing product's details.
-   **Path Parameter:** `product_id` (int).
-   **Request Body:**
    ```json
    {
      "name": "string",
      "description": "string",
      "price": 0.0,
      "inventory": 0
    }
    ```
-   **Success Response (200 OK):**
    Returns the updated product object.
-   **Error Response (404 Not Found):**
    ```json
    {
      "detail": "Product not found"
    }
    ```

---

#### `DELETE /products/{product_id}`

-   **Description:** Deletes a product by its ID.
-   **Path Parameter:** `product_id` (int).
-   **Success Response (200 OK):**
    ```json
    {
      "detail": "Product deleted successfully"
    }
    ```
-   **Error Response (404 Not Found):**
    ```json
    {
      "detail": "Product not found"
    }
    ```

## ⚙️ Environment Variables

The application uses environment variables for configuration, primarily for the database connection. These are set within the `docker-compose.yml` file.

| Service | Variable          | Value       | Description                       |
| ------- | ----------------- | ----------- | --------------------------------- |
| `db`    | `POSTGRES_USER`   | `myuser`    | The username for the PostgreSQL DB. |
| `db`    | `POSTGRES_PASSWORD` | `mypassword`| The password for the PostgreSQL DB. |
| `db`    | `POSTGRES_DB`     | `ecommercedb` | The name of the database to use.  |

The backend service connects to the database using the service name `db` as the hostname: `postgresql://myuser:mypassword@db/ecommercedb`.