DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);
--
DROP TABLE IF EXISTS questions;

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT,
  author_id INTEGER,

  FOREIGN KEY(author_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_follow;

CREATE TABLE question_follow(
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

DROP TABLE IF EXISTS replies;

CREATE TABLE replies(
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  parent_id INTEGER,
  user_id INTEGER,
  body TEXT,

  FOREIGN KEY(question_id) REFERENCES questions(id),
  FOREIGN KEY(parent_id) REFERENCES replies(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

DROP TABLE IF EXISTS question_likes;

CREATE TABLE question_likes(
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,

  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(question_id) REFERENCES questions(id)
);

INSERT INTO users (fname, lname) VALUES ('Bryan', 'Tsai');
INSERT INTO users (fname, lname) VALUES ('Drew', 'Stukey');
INSERT INTO users (fname, lname) VALUES ('Test', 'Three');
INSERT INTO users (fname, lname) VALUES ('Test', 'Four');
INSERT INTO users (fname, lname) VALUES ('Test', 'Five');
INSERT INTO users (fname, lname) VALUES ('Real', 'Name');
INSERT INTO users (fname, lname) VALUES ('Real', 'Name_two');
INSERT INTO users (fname, lname) VALUES ('Real', 'Name_two_three');
INSERT INTO users (fname, lname) VALUES ('Jean', 'Simmons');
INSERT INTO users (fname, lname) VALUES ('Gene', 'Simmons');
INSERT INTO users (fname, lname) VALUES ('Gene', 'Splicing');
INSERT INTO users (fname, lname) VALUES ('Hersheys', 'Kiss');
INSERT INTO users (fname, lname) VALUES ('Mars', 'Bars');
INSERT INTO users (fname, lname) VALUES ('Wheaties', 'Cereal');
INSERT INTO users (fname, lname) VALUES ('Wheat', 'Bix');

INSERT INTO questions (title, body, author_id) VALUES ('I pooped today', 'I drank so much whiskey, I pooped a loaf of ryebread', 1);
INSERT INTO questions (title, body, author_id) VALUES ('Reeses for break', 'Cereal is not a real food', 2);
INSERT INTO questions (title, body, author_id) VALUES ('Bruno mars is cool', 'NOT. Mars bars are cooler',13 );
INSERT INTO questions (title, body, author_id) VALUES ('RE: Mars Bars', 'Imma up town funk you up for that last question',12 );
INSERT INTO questions (title, body, author_id) VALUES ('I wanna rock and roll', 'all night long', 10 );
INSERT INTO questions (title, body, author_id) VALUES ('I wanna rock and roll', 'out those denim jeans all night long', 9 );
INSERT INTO questions (title, body, author_id) VALUES ('Test values are people too', 'Test Value Society', 8 );
INSERT INTO questions (title, body, author_id) VALUES ('Can you eat ryebread for breakfast', '#Ryse and shine', 1);

INSERT INTO question_follow(user_id, question_id) VALUES (1, 5);
INSERT INTO question_follow(user_id, question_id) VALUES (3, 7);
INSERT INTO question_follow(user_id, question_id) VALUES (4, 7);
INSERT INTO question_follow(user_id, question_id) VALUES (5, 7);
INSERT INTO question_follow(user_id, question_id) VALUES (6, 7);
INSERT INTO question_follow(user_id, question_id) VALUES (7, 7);
INSERT INTO question_follow(user_id, question_id) VALUES (8, 7);
INSERT INTO question_follow(user_id, question_id) VALUES (10, 1);
INSERT INTO question_follow(user_id, question_id) VALUES (2, 5);

INSERT INTO question_likes(user_id, question_id) VALUES (3,7);
INSERT INTO question_likes(user_id, question_id) VALUES (4,7);
INSERT INTO question_likes(user_id, question_id) VALUES (5,7);
INSERT INTO question_likes(user_id, question_id) VALUES (6,7);
INSERT INTO question_likes(user_id, question_id) VALUES (7,7);
INSERT INTO question_likes(user_id, question_id) VALUES (8,7);
INSERT INTO question_likes(user_id, question_id) VALUES (2,5);
INSERT INTO question_likes(user_id, question_id) VALUES (1,4);

INSERT INTO replies(question_id, parent_id, user_id, body) VALUES (2, NULL, 14, 'That is so not true.  Triggered!');
INSERT INTO replies(question_id, parent_id, user_id, body) VALUES (2, 1, 15, 'Yeah, eat wheatbix instead');
INSERT INTO replies(question_id, parent_id, user_id, body) VALUES (2, 2, 2, 'Cereal was created as a ploy to weaken I don''t know');
INSERT INTO replies(question_id, parent_id, user_id, body) VALUES (2, 3, 15, 'You don''t know becuz you don''t eat wheetbix fo breakfast');
