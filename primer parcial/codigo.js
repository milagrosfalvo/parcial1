const btn_agregar = document.getElementById('agregar');
btn_agregar.addEventListener("click", function()){
    const div_principal = D.create('div');
    const div_ingresarpistas = D.create('div');
    const span_ingresarpistas = D.create('span', {innerHTML:'Nombre'});

    const input_ingresarpistas = D.create('input', {type:"text", name:'ingresar pista'})

    const borrar = D.create('a', {href:'javascript:void(0)', innerHTML: 'x', onclick:function(){
    D.remove}});

D.append(span_ingresarpistas, div_ingresarpistas);
D.append(input_ingresarpistas, div_ingresarpistas);
D.append(div_ingresarpistas, div_principal);

D.append(div_principal, D.id('contenedor-imput'))
    }



const button_agregar =document.getElementById('agregar')
btn_agregar.addEventListener('click', function(){

})
