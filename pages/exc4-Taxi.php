<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 4</title>
    <link rel="stylesheet" href="../css/modelo.css">
</head>
<body>
    <?php include('../template/header.php') ?>


    <h1>Gerenciador de Chamadas de Táxi</h1>

    <div id="divButtons">
        <button id="addTaxis">Adicionar Táxis de Hoje</button>
        <button id="statusTaxis">Mostrar Status dos Táxis</button>
        <button id="apagarTaxis">Apagar Taxistas</button>
        <button id="sair">Sair</button>
    </div>

    <div id="resultTaxi"></div>
    
    <div id="corridas"></div>

    <script src="../scripts/exc4Taxi.js"></script>
</body>
</html>