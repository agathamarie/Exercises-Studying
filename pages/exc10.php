<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 10</title>
    <link rel="stylesheet" href="../css/modeloexc10.css">
</head>
<body>
    <?php include('../template/header.php') ?>


    <h1>Simulador de Roleta do Tigrinho </h1>

    <div id="divButtons">
        <h2>Escolha uma das áreas para apostar: </h2>
        <form id="formTigre">
            <select id="mySelect">
            <option value="1">Área 1 - Prêmio: R$ 100</option>
            <option value="2">Área 2 - Prêmio: R$ 500</option>
            <option value="3">Área 3 - Prêmio: R$ 1000</option>
            <option value="4">Área 4 - Prêmio: R$ 10</option>
            <option value="5">Área 5 - Prêmio: R$ 100000</option>
            <option value="6">Área 6 - Prêmio: R$ 50000</option>        
        </select>
        </form>
        <button id="" onclick="javascript:apostarTigrinho();">Apostar</button>
    </div>

    <div id="result"></div>

    <script src="../scripts/exc10.js"></script>
</body>
</html>