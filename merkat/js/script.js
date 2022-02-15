$(document).ready(function(){
    
    $('#btnSend').click(function(){
        
        var errores  = '';

        //Validando el nombre Clinica********************
        if( $('#nameClinic').val()== '' ){
            errores += '<p>Escriba el nombre de la clínica</p>';
        }
        
        //Validando el nombre Solicitante******************** 
        if( $('#name').val()== '' ){
            errores += '<p>Escriba su nombre</p>';
        }

        //Validando el email******************** 
        if( $('#email').val()== '' ){
            errores += '<p>Escriba su correo electrónico</p>';
        }

        //Validando el mensaje*******************
        if( $('#message').val()== '' ){
            errores += '<p>Escriba un mensaje para nosotros</p>';
        }

        //Enviando mensaje*************
        if( errores == '' == false ){
            var msgModal = '<div class="modal_wrap">'+
                                '<div class="mensaje_modal">' +
                                    '<h3>Campos incompletos</h3>' +
                                    errores +
                                    '<span id="btnClose">Cerrar</span>'+
                                '</div>'+
                            '</div>'
            $('body').append(msgModal);
        }else{
            var msgModal = '<div class="modal_wrap">'+
                                '<div class="mensaje_modal">' +
                                    '<h3>Correo enviado con éxito</h3>' +
                                    '<p>Muy pronto nos contactaremos con usted</p>'+
                                    '<span id="btnClose">Cerrar</span>'+
                                '</div>'+
                            '</div>'
            $('body').append(msgModal);
        }

        //Cerrando modal******************
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();
        });

    });
});