<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 8</title>
    <link rel="stylesheet" href="../css/modelo.css">
</head>
<body>
    <?php include('../template/header.php') ?>


    <h1>Conversor de Unidades </h1>
    <h2>Escolha o tipo de Conversão que deseja realizar: </h2>

    <div id="divButtons">
        <button onclick="javascript:temperaturaConverter();">Temperatura (Celsius ↔ Fahrenheit)</button>
        <button onclick="javascript:pesoConverter();">Peso (Quilogramas ↔ Libras) </button>
        <button onclick="javascript:distanciaConverter();">Distância (Metros ↔ Quilômetros)</button>
    </div>

    <div id="result"></div>

    <script src="../scripts/exc8.js"></script>
</body>
</html>