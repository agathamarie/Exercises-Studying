<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 6</title>
    <link rel="stylesheet" href="../css/modelo.css">
</head>
<body>
    <?php include('../template/header.php') ?>
    
    <h1>Controle de Chamados de Suporte Técnico</h1>

    <div id="divButtons">
        <button onclick="javascript:registrarChamado();">Registrar novo chamado</button>
        <button onclick="javascript:listarChamado();">Listar chamados</button>
        <button onclick="javascript:resolverChamado();">Resolver chamado</button>
        <button onclick="javascript:sair();">Sair</button>
    </div>

    <div id="result"></div>

    <script src="../scripts/exc6.js"></script>
</body>
</html>