# backend/app/schemas.py

from pydantic import BaseModel

# This is a base model that contains fields common to
# both creating a new product and reading an existing one.
class ProductBase(BaseModel):
    name: str
    description: str | None = None
    price: float
    inventory: int

# This model is used when creating a new product.
# It inherits all fields from ProductBase.
# We don't expect an 'id' when creating a product.
class ProductCreate(ProductBase):
    pass

# This model is used when reading a product from the database.
# It inherits from ProductBase and adds the 'id' which is
# assigned by the database.
class Product(ProductBase):
    id: int

    # This configuration class tells Pydantic to work with
    # ORM models, allowing it to read data directly from
    # our SQLAlchemy model objects (e.g., product.id).
    class Config:
        orm_mode = True