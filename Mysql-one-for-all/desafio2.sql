CREATE VIEW estatisticas_musicais AS
SELECT
  count(cancao_id) AS cancoes,
  (
    SELECT
      count(artista_id)
    FROM
      SpotifyClone.artistas
  ) AS artistas,
  (
    SELECT
      count(album_id)
    FROM
      SpotifyClone.albuns
  ) AS albuns
FROM
  SpotifyClone.cancoes;
