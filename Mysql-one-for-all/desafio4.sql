CREATE VIEW top_3_artistas AS
SELECT
  a.nome AS artista,
  count(*) AS seguidores
FROM
  SpotifyClone.seguindo_artistas AS s
  INNER JOIN SpotifyClone.artistas AS a ON a.artista_id = s.artista_id
GROUP BY
(a.artista_id)
ORDER BY
  seguidores DESC,
  artista
LIMIT
  3;
