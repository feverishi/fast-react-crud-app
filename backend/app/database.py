# backend/app/database.py

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# The database URL.
# The format is: "postgresql://<user>:<password>@<host>/<dbname>"
# IMPORTANT: The host is 'db', which is the service name we defined
# in our docker-compose.yml file. Docker's internal DNS resolves this.
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@db/ecommercedb"

# The engine is the main entry point for SQLAlchemy to communicate with the DB.
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Each instance of SessionLocal will be a new database session.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# This Base class will be inherited by all our ORM models.
Base = declarative_base()