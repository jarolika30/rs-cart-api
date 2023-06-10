CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS cart_items (
  cart_id uuid NOT NULL REFERENCES carts(id),
  product_id uuid NOT NULL DEFAULT uuid_generate_v4(),
  count integer
);

  INSERT INTO cart_items (cart_id, count) VALUES 
  ('c2231735-96b1-49a2-a1be-5385ff646970', 2),
  ('dc21ffb7-0a67-40f1-833b-a9745b15bd68', 1),
  ('c661ffc3-77e5-4931-9747-64c4d0d6a913', 3);
