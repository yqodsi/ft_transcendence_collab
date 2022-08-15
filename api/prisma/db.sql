-- CREATE TYPE room_access AS ENUM ('private', 'protected', 'public');
-- CREATE TYPE room_status AS ENUM ('opened', 'closed', 'deleted');
-- CREATE TYPE room_user_role AS ENUM ('owner', 'admin', 'user');

CREATE TABLE IF NOT EXISTS users (
	id INT PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	twentyFourId VARCHAR ( 50 ) UNIQUE NOT NULL,
	customName VARCHAR ( 50 ) UNIQUE NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	avatarUrl VARCHAR ( 255 ) UNIQUE NOT NULL,
	isTwoFactorAuthenticationEnabled BOOLEAN DEFAULT FALSE,
  	twoFactorAuthenticationCode VARCHAR ( 10 ),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS friends (
	user1 INT ,
	user2 INT,
	CONSTRAINT fk_user1 FOREIGN KEY(user1) REFERENCES users("id"),
	CONSTRAINT fk_user2 FOREIGN KEY(user2) REFERENCES users("id"),
	PRIMARY KEY(user1, user2),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS blocked_users (
	blocker INT ,
	"blocked" INT,
	CONSTRAINT fk_blocker FOREIGN KEY(blocker) REFERENCES users("id"),
	CONSTRAINT fk_blocked FOREIGN KEY("blocked") REFERENCES users("id"),
	PRIMARY KEY(blocker, "blocked"),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS chat_rooms (
	id INT PRIMARY KEY,
	"name" VARCHAR ( 255 ) NOT NULL,
	status room_status NOT NULL,
	"access" room_access  NOT NULL,
	"password" VARCHAR ( 255 ) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS rooms_users (
	room_id INT NOT NULL,
	user_id INT NOT NULL,
	"role" room_user_role NOT NULL,
	ban INT DEFAULT 0,
	mute INT DEFAULT 0,
	CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users("id"),
	CONSTRAINT fk_room FOREIGN KEY("room_id") REFERENCES chat_rooms("id"),
	PRIMARY KEY(room_id, user_id),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS room_user_msg (
	id INT PRIMARY KEY,
	room_id INT NOT NULL,
	user_id INT NOT NULL,
	msg TEXT NOT NULL,
	CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users("id"),
	CONSTRAINT fk_room FOREIGN KEY("room_id") REFERENCES chat_rooms("id"),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  	updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
