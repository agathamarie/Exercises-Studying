<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>1 - Exercicios</title>
    <link rel="stylesheet" href="../css/modelo.css">
</head>
<body>
    <?php include('../template/header.php') ?>

    <h1>Pedra, Papel ou Tesoura</h1>

    <div id="initial">
        <form>
            <!-- <label for="nameUser">Digite seu nome: </label>
            <input id="nameUser" type="text" placeholder="Digite seu nome... "> -->

            <input type="button" onclick="javascript:startGame();" value="Jogar">
        </form>
    </div>
    
    <div id="divForm"></div>

    <div id="resultGame"></div>

    <script type="text/javascript" src="../scripts/exc1.js"></script>
</body>
</html>