CREATE VIEW top_2_hits_do_momento AS
SELECT
  c.nome AS cancao,
  count(*) AS reproducoes
FROM
  SpotifyClone.historico_de_reproducoes AS h
  INNER JOIN SpotifyClone.cancoes AS c ON c.cancao_id = h.cancao_id
GROUP BY
(h.cancao_id)
ORDER BY
  reproducoes DESC,
  cancao
LIMIT
  2;
