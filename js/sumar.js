    document.getElementById('sumar').addEventListener('click', function(){
        
        let numeroA = document.getElementById('numero1').value;
        console.log('el valor del numero A es: '+numeroA);

        let numeroB = document.getElementById('numero2').value;
        console.log('el valor del numero B es: '+numeroB);

        let resultado = sumar (parseInt(numeroA) , parseInt(numeroB));  
        console.log('el resultado es: '+resultado);

        document.getElementById('resultado').innerHTML = resultado;
        document.getElementById('contenedor').style.display = 'block';  
    });

    function sumar(a,b){
        return a + b;
    }