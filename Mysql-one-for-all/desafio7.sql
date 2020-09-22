CREATE VIEW perfil_artistas AS

SELECT
  (
    SELECT
      nome
    FROM
      SpotifyClone.artistas
    WHERE
      artistas.artista_id = albuns.artista_id
  ) AS artista,
  nome AS album,
  (
    SELECT
      COUNT(*)
    FROM
      SpotifyClone.seguindo_artistas
    WHERE
      seguindo_artistas.artista_id = albuns.artista_id
  ) AS seguidores
FROM
  SpotifyClone.albuns
ORDER BY
  seguidores DESC,
  artista,
  album;
