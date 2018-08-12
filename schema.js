// -- create table users (
//   --   user_id SERIAL PRIMARY KEY,
//   --   auth_id text,
//   --   username varchar(50)
//   -- )

//   -- create table tags (
//   --   tag_id SERIAL PRIMARY KEY,
//   --   tag_name text,
//   --   tag_desc text
//   -- )

//   -- create table Builds (
//   --   build_id SERIAL PRIMARY KEY,
//   --   user_id INTEGER REFERENCES users (user_id),
//   --   tag_id INTEGER REFERENCES tags (tag_id),
//   --   name varchar(50),
//   --   year INTEGER,
//   --   make varchar(25),
//   --   model varchar(50),
//   --   likes Integer,
//   --   comments text,
//   --   views Integer,
//   --   time text
//   -- )
