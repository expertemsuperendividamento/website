<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST['nome'];
  $email = $_POST['email'];
  $objetivo = $_POST['objetivo'];
  mail("comercial@expertemsuperendividamento.com.br", 
       "Novo Agendamento: $nome", 
       "Nome: $nome\nEmail: $email\nObjetivo: $objetivo",
       "From: contato@expertemsuperendividamento.com.br");
  header("Location: obrigado.html");
  exit();
}
?>
