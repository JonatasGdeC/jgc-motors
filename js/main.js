$(document).ready(function(){
    $('#telefone').mask('(00)00000-0000');
    $('#cep').mask('00000-000');

    $('#form').validate({
        rules:{
            name:{
                required:true
            },
            telefone:{
                required:true
            },
            email:{
                required:true
            },
            cep:{
                required:true
            },
            automovelInteresse:{
                required: false
            }
        }, messages:{
            name:'<span>Insira seu nome!</span>',
            telefone: '<span>Insira seu telefone!</span>',
            email:'<span>Insira um email válido!</span>',
            cep:'<span>Insira seu CEP!</span>'
        }
    })
})