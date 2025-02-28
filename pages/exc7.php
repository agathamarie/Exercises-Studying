<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 7</title>
    <link rel="stylesheet" href="../css/modeloexc7.css">
</head>
<body>
    <?php include('../template/header.php') ?>

    <div id="menu">
        <h1>Menu do Restaurante:</h1>
        <p>Chocolate Cremoso - R$ 12,00</p>
        <p>Morango com Chantilly - R$ 14,00</p>
        <p>Baunilha Clássica - R$ 12,00</p>
        <p>Menta com Chiclete - R$ 13,00</p>
        <p>Ninho com Nutella - R$ 16,00</p>
    </div>

    <div id="divButtons">
        <button id="buttonPedido" onclick="javascript:fazerPedido();">Fazer pedido</button>
    </div>

    <div id="result"></div>

    <script src="../scripts/exc7.js"></script>
</body>
</html>