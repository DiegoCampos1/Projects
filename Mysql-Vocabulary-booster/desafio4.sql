SELECT
    j.job_title as Cargo,
    round(AVG(e.salary), 2) as 'Média salarial',
    CASE
        WHEN AVG(e.salary) <= 5800 THEN 'Júnior'
        WHEN AVG(e.salary) <= 7500 THEN 'Pleno'
        WHEN AVG(e.salary) <= 10500 THEN 'Sênior'
        ELSE 'CEO'
    END AS Senioridade
FROM
    hr.jobs AS j
    INNER JOIN hr.employees AS e ON j.job_id = e.job_id
group by
    Cargo
ORDER BY
    AVG(e.salary),
    Cargo;
