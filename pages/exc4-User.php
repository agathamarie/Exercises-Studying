<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 4</title>
    <link rel="stylesheet" href="../css/modelo.css">
    <link rel="stylesheet" href="../css/exc4.css">
</head>
<body>
    <?php include('../template/header.php') ?>

    <h1>APP de Táxi</h1>

    <div id="nomeUser">
        <label for="nameUser">Seu nome: </label>
        <input type="text" name="nameUser" id="nameUser">
    </div>

    <div id="divButtons">
        <button id="chamarTaxi">Chamar Táxi</button>
        <button id="sair">Sair</button>
    </div>

    <div id="resultUser"></div>

    <script src="../scripts/exc4User.js"></script>
</body>
</html>