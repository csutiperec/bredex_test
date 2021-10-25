CREATE DATABASE bredex_f1;

\c bredex_f1

CREATE TABLE users (
    username VARCHAR(255) NOT NULL UNIQUE,
    password_ VARCHAR(255) NOT NULL,
    PRIMARY KEY(username)
);

CREATE TABLE teams(
    ID SERIAL NOT NULL,
    name_ VARCHAR(255) NOT NULL,
    founded INTEGER NOT NULL,
    win_nr INTEGER NOT NULL,
    paid BOOLEAN NOT NULL,
    created_by_user VARCHAR(255),
    CONSTRAINT fk_user FOREIGN KEY(created_by_user) REFERENCES users(username)
);

INSERT INTO users(username, password_) VALUES('admin', (SELECT sha256('f1test2018')));


INSERT INTO teams(name_, founded, win_nr, paid, created_by_user) VALUES('McLaren', 1963, 183, 'true', 'admin');
INSERT INTO teams(name_, founded, win_nr, paid, created_by_user) VALUES('RedBull', 2004, 72, 'true', 'admin');
INSERT INTO teams(name_, founded, win_nr, paid, created_by_user) VALUES('Ferrari', 1929, 237, 'true', 'admin');