const temperatura_inicial=document.getElementById('temp_inicial')
const fc=document.getElementsByTagName('input')
const pantalla=document.getElementById('pantalla')
const pantalla2=document.getElementById('pantalla2')
const mercurio=document.getElementById('mercurio')




function convertir(){
    let resultado= '-';
    let cambio={}
    if(isNaN(temperatura_inicial.value)){
        alert("esto no es un numero")
    }else{
        if(fc[1].checked==true){
            resultado=(temperatura_inicial.value-32)/1.8
            cambio= resultado.toFixed(2)
        }else if(fc[2].checked==true){
            resultado=(temperatura_inicial.value*1.8)+32
            cambio= resultado.toFixed(2)
        }else{
            alert("celeccione hermano ")
        }
        if(cambio>=100){
            mercurio.style.height=`100%`
        }else if(cambio <=0){
            mercurio.style.height=`0%`
        }else{
            mercurio.style.height=`${cambio}%`
        }
        pantalla.innerHTML=`${cambio}°`
        pantalla2.innerHTML=`${cambio}°`
        temperatura_inicial.value=""
    }
}