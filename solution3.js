const req = "SELECT niveau, COUNT(niveau) as nombre_admis FROM resultat_examen WHERE code_madiere = 'ALG' AND note >= 10 AND nombre_admis >= 30 GROUP BY NIVEAU "