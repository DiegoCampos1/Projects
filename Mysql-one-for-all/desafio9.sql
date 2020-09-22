USE SpotifyClone;
DELIMITER $$

CREATE PROCEDURE albuns_do_artista(IN name VARCHAR(45))
BEGIN
  SELECT
    (SELECT nome FROM SpotifyClone.artistas WHERE albuns.artista_id = artistas.artista_id) AS artista,
    nome AS album
  FROM SpotifyClone.albuns
  WHERE albuns.artista_id = (
    SELECT artista_id FROM SpotifyClone.artistas WHERE artistas.nome = name
  );
END $$

DELIMITER ;
