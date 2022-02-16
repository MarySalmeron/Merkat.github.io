<?php

    //Llamando a los campos
    $nameClinic = $_POST['nameClinic'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];

    // Datos para el correo
    $destinatario = "marymorrera12@gmail.com";
    $Asunto= "Hey,$name quiere contactar contigo.";

    $carta = "De: $name \n";
    $carta .= "Nombre de la Clínica/Farmacia/Hospital: $nameClinic\n";
    $carta .= "Correo: $email\n";
    $carta .= "Teléfono: $phone\n";
    $carta .= "Mensaje: $msg \n";
    $carta .= "\nEste mensaje fue enviado a través de la página web merkatmedico.com"

    //Enviando el Mensaje
    mail($destinatario, $Asunto, $carta);
    header('Location = index.html')
?>
