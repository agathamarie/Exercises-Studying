<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 5</title>
    <link rel="stylesheet" href="../css/modelo.css">
    <style>
        #avisos{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    </style>

</head>
<body>
    <?php include('../template/header.php') ?>

    <h1>Monitoramento de Temperatura</h1>

    <div id="divButtons">
        <button onclick="javascript:addInputs();">Adicionar Temperaturas</button>
        <button onclick="javascript:addLimite();">Adicionar Limite Critico</button>
        <button onclick="javascript:verTemperatura();">Ver Temperaturas</button>
    </div>

    <div id="result"></div>

    <div id="avisos"></div>

    <script src="../scripts/exc5.js"></script>
</body>
</html>