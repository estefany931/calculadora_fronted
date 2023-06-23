
const boton_1=document.getElementById("boton_1");


boton_1.addEventListener(
    'click',
    async (event)=>{
        
        event.preventDefault();

        const numero_1=parseFloat(document.getElementById("num1").value);
        const numero_2=parseFloat(document.getElementById("num2").value);
        
        const respuesta= await fetch(
            'http://localhost:3025/sumar', 
            {
                "method": "POST", 
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );
        const dato= await respuesta.json();

        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
    }
);

const boton_2=document.getElementById("boton_2"); 

boton_2.addEventListener(
    'click',
    async(event)=>{
        event.preventDefault();
        const numero_1=parseFloat(document.getElementById("num1").value);
        const numero_2=parseFloat(document.getElementById("num2").value);

        const respuesta= await fetch(
            'http://localhost:3025/restar',
            {
                "method": "POST",
                "headers":{
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );
        const dato= await respuesta.json();

        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;

    }

);

const boton_4=document.getElementById("boton_4");

boton_4.addEventListener(
    'click',
    async(event)=>{
        event.preventDefault();
        const numero_1=parseFloat(document.getElementById("num1").value);
        const numero_2=parseFloat(document.getElementById("num2").value);

        const respuesta= await fetch(
            'http://localhost:3025/api/dividir',
            {
                "method":"POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1,numero_2})
            }
        );
        const dato= await respuesta.json();

        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;


    }
);

const boton_3=document.getElementById("boton_3");

boton_3.addEventListener(
    'click',
    async(event)=>{
        event.preventDefault();
        const numero_1=parseFloat(document.getElementById("num1").value);
        const numero_2=parseFloat(document.getElementById("num2").value);

        const respuesta= await fetch(
            'http://localhost:3025/api/multiplicar',
            {
                "method": "POST",
                "headers":{
                    "Content-Type":"application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }
        );
        const dato= await respuesta.json();

        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;
    }
)

