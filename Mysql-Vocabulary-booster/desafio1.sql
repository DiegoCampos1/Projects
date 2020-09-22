SELECT
  country_name AS País,
  IF(region_id = 1, 'incluído', 'não incluído') AS 'Status Inclusão'
FROM
  hr.countries
ORDER BY
  País;
