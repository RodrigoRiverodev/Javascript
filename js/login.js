

function login(){

    let user =document.getElementById('usuario').value;
    let pass =document.getElementById('contraseña').value;

    if(user =='rivero' && pass =='123456' || user =='pia' && pass=='123456'){

        window.location="jokes.html"

        alert('bienvenido a mi app web!!');
}
    else{
        alert("usuario o contraseña incorrectas, intentelo nuevamente");
    }

}

//function saludo(){

    //let name = document.getElementById("txtEntrada").value;
    //document.getElementById("salida").innerHTML = 'Hola, como estas '+ name + '?';

