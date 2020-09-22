CREATE DATABASE IF NOT EXISTS SpotifyClone;

USE SpotifyClone;

CREATE TABLE planos(
  plano_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  valor DECIMAL(6,2) NOT NULL
);

INSERT INTO
  planos (nome, valor)
VALUES
  ('gratuito', 0),
  ('familiar', 7.99),
  ('universitario', 5.99);

CREATE TABLE usuarios(
  usuario_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  idade INT NOT NULL,
  plano_id INT NOT NULL,
  CONSTRAINT FOREIGN KEY (`plano_id`) REFERENCES `SpotifyClone`.`planos` (`plano_id`)
);

INSERT INTO
  usuarios (nome, idade, plano_id)
VALUES
  ('Thati', 23, 1),
  ('Cintia', 35, 2),
  ('Bill', 20, 3),
  ('Roger', 45, 1);

CREATE TABLE artistas(
  artista_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL
);

INSERT INTO
  artistas (nome)
VALUES
  ('Walter Phoenix'),
  ('Peter Strong'),
  ('Lance Day'),
  ('Freedie Shannon');

CREATE TABLE albuns(
  album_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  artista_id INT NOT NULL,
  CONSTRAINT FOREIGN KEY (`artista_id`) REFERENCES `SpotifyClone`.`artistas` (`artista_id`)
);

INSERT INTO
  albuns (nome, artista_id)
VALUES
  ('Envious', 1),
  ('Exuberant', 1),
  ('Hallowed Steam', 2),
  ('Incandescent', 3),
  ('Temporary Culture', 4);

CREATE TABLE cancoes(
  cancao_id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(200) NOT NULL,
  album_id INT NOT NULL,
  artista_id INT NOT NULL,
  CONSTRAINT FOREIGN KEY (`artista_id`) REFERENCES `SpotifyClone`.`artistas` (`artista_id`),
  CONSTRAINT FOREIGN KEY (`album_id`) REFERENCES `SpotifyClone`.`albuns` (`album_id`)
);

INSERT INTO
  cancoes (nome, album_id, artista_id)
VALUES
  ('Soul For Us', 1, 1),
  ('Reflections Of Magic', 1, 1),
  ('Dance With Her Own', 1, 1),
  ('Troubles Of My Inner Fire', 2, 1),
  ('Time Fireworks', 2, 1),
  ('Magic Circus', 3, 2),
  ('Honey, So Do I', 3, 2),
  ("Sweetie, Let's Go Wild", 3, 2),
  ('She Knows', 3, 2),
  ('Fantasy For Me', 4, 3),
  ('Celebration Of More', 4, 3),
  ('Rock His Everything', 4, 3),
  ('Home Forever', 4, 3),
  ('Diamond Power', 4, 3),
  ("Honey, Let's Be Silly", 4, 3),
  ('Thang Of Thunder', 5, 4),
  ('Words Of Her Life', 5, 4),
  ('Without My Streets', 5, 4);

CREATE TABLE seguindo_artistas(
  usuario_id INT NOT NULL,
  artista_id INT NOT NULL,
  PRIMARY KEY (`artista_id`, `usuario_id`),
  CONSTRAINT FOREIGN KEY (`artista_id`) REFERENCES `SpotifyClone`.`artistas` (`artista_id`),
  CONSTRAINT FOREIGN KEY (`usuario_id`) REFERENCES `SpotifyClone`.`usuarios` (`usuario_id`)
);

INSERT INTO
  seguindo_artistas (usuario_id, artista_id)
VALUES
  (1, 1),
  (1, 4),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 1),
  (4, 4);

CREATE TABLE historico_de_reproducoes(
  usuario_id INT NOT NULL,
  cancao_id INT NOT NULL,
  PRIMARY KEY (`usuario_id`, `cancao_id`),
  CONSTRAINT FOREIGN KEY (`usuario_id`) REFERENCES `SpotifyClone`.`usuarios` (`usuario_id`),
  CONSTRAINT `fk_usuarios_has_cancoes_cancoes1` FOREIGN KEY (`cancao_id`) REFERENCES `SpotifyClone`.`cancoes` (`cancao_id`)
);

INSERT INTO
  historico_de_reproducoes (usuario_id, cancao_id)
VALUES
  (1, 1),
  (1, 6),
  (1, 14),
  (1, 16),
  (2, 13),
  (2, 17),
  (2, 2),
  (2, 15),
  (3, 4),
  (3, 16),
  (3, 6),
  (4, 3),
  (4, 18),
  (4, 11);
