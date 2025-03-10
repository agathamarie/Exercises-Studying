<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exc 9</title>
    <link rel="stylesheet" href="../css/modelo.css">
</head>
<body>
    <?php include('../template/header.php') ?>

    <h1>Controle de Senhas - Clínica Médica</h1>

    <div id="divButtons">
        <button onclick="javascript:gerarSenha();">Gerar nova senha</button>
        <button onclick="javascript:chamarPaciente();">Chamar paciente para atendimento</button>
        <button onclick="javascript:senhasPendentes();">Exibir senhas pendentes</button>
        <button onclick="javascript:sair();">Sair</button>
    </div>

    <div id="result"></div>

    <script src="../scripts/exc9.js"></script>
</body>
</html>