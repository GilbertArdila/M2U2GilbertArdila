//getting inputs form html
const studentName=document.querySelector(".name");
const subject=document.querySelector(".subject");
const miscelanious=document.querySelector(".miscelanious");
const discount=document.querySelector(".discount");
const totalAmount=document.querySelector(".totalAmount");
const send=document.querySelector(".send");
const form_results=document.querySelector(".form-results");
const ej1=document.querySelector(".student");
const ej2=document.querySelector(".numbers");
const election=document.querySelector(".election");
const number1=document.querySelector(".number1");
const number2=document.querySelector(".number2");
const number3=document.querySelector(".number3");
const number4=document.querySelector(".number4");
const check=document.querySelector(".check");
const p=document.querySelector(".answer");
const section1=document.querySelector(".exercise1");
const section2=document.querySelector(".exercise2");
const back=document.querySelector(".back");
const showSubjectInput=document.querySelector(".showSubjectInput");

//listening click on anny option
ej1.onclick=()=>{
    election.classList.add("hidden");
    section2.classList.add("hidden");
    section1.classList.remove("hidden");
    back.classList.remove("hidden");
    send.classList.add("hidden");
   

}
ej2.onclick=()=>{
    election.classList.add("hidden");
    section1.classList.add("hidden");
    section2.classList.remove("hidden");
    back.classList.remove("hidden");
    
}
//listening click on back option
back.onclick=()=>{
election.classList.remove("hidden");
section1.classList.add("hidden");
section2.classList.add("hidden");
back.classList.add("hidden");
window.location.reload();
  
   }


/*---------First exercise---------------------------------*/ 
/* 
Crear un algoritmo que le permita al usuario ingresar:
                a. Nombre de un estudiante,
                b. Cantidad de materias o asignaturas a matricular.
                c. Valor de cada materia o asignatura,
                d. Valor de la papelería: que tiene un costo fijo de $20.000 y el carné con valor de $8.000.
                e. Descuento del 20% sobre el costo de las materias.
                Por medio del algoritmo imprimir el valor total de las materias que matriculó el estudiante con el
                descuento del 20% más los costos fijos.
*/

//showing number of ssubjects
showSubjectInput.onclick=(e)=>{
  e.preventDefault();
  const div=document.querySelector(".subjectsValues");
  let subjectAmount=subject.value;
  for(let i=0;i<subjectAmount;i++){
    const subjectLabel=document.createElement("label");
    const subjectLabelText=document.createTextNode(`Ingresa el nombre de la materia ${i+1} `);
    subjectLabel.appendChild(subjectLabelText);
    const subjectInput=document.createElement("input");
    subjectInput.classList.add("subjectName");
    subjectInput.setAttribute("type","text");

     const label=document.createElement("label");
     const labelText=document.createTextNode(`Ingresa el valor de la materia ${i+1} `);
     label.appendChild(labelText);
     const input=document.createElement("input");
     input.classList.add("subjectValue");
     input.setAttribute("type","number");

     div.appendChild(subjectLabel);
     div.appendChild( subjectInput);

     div.appendChild(label);
     div.appendChild(input);
 
  }
  showSubjectInput.classList.add("hidden");
  send.classList.remove("hidden");
}

//adding listener to the click button
send.addEventListener("click",function(e){
 e.preventDefault()
 //getting the inputs
 const subjectValue=document.querySelectorAll(".subjectValue");
  let values=[];
  //getting the inputs values and pushing into an array
  for(let i=0;i<subjectValue.length;i++){
    values.push(parseInt(subjectValue[i].value) );
  }
//adding values using reduce
const total=values.reduce((sum,element)=>sum+element,0);
//calculating total amount
const granTotal=20*total/100;
miscelanious.value=28000;
discount.value=granTotal;
totalAmount.value=(total- granTotal)+28000;
//showing results secction
form_results.classList.remove("hidden");

 send.disabled = true;


});
/*---------Second exercise---------------------------------*/ 

/*
Desarrolle un algoritmo que permita:
                f. Leer cuatro valores numéricos y almacenarlos en las variables A, B, C y D
                respectivamente.
                g. El algoritmo debe imprimir cual es el mayor valor y cual es el menor valor. Recuerde
                verificar que los cuatro valores introducidos por el teclado sean valores distintos.
                h. Crear un mensaje de alerta en caso que se detecte la introducción de valores iguales.
*/


check.addEventListener("click",function(e){
    e.preventDefault()
    //creating an array
   let numbers=[];
   let duplicados=[];
   //pushing numbers into array
   numbers.push(number1.value)
   numbers.push(number2.value)
   numbers.push(number3.value)
   numbers.push(number4.value)
   //creating new array and sorting it
   let newArray=[...numbers].sort();
  //ranging the newArray
  for(let i=0;i<newArray.length;i++){
    //verifiing if the numbers are equals
    if(newArray[i+1]===newArray[i]){
        //if yes pushing into duplicados array
        duplicados.push(newArray[i])
    }
  }
  if(number1.value==='' || number2.value==='' || number3.value==='' || number4.value===''){
    alert("No pueden haber campos vacíos")
  }else{
        //verifing min and max
   if(duplicados.length != 0){
    alert("Los números no pueden ser iguales")
   }else{
    const n1= parseInt(number1.value);
    const n2=parseInt(number2.value);
    const n3=parseInt(number3.value);
    const n4=parseInt(number4.value);
     
      const pText=document.createTextNode(`El número mayor es ${Math.max(n1,n2,n3,n4)}, y el número menor es ${Math.min(n1,n2,n3,n4)}`);
      p.appendChild(pText);
      
     
      check.disabled = true;
    
   }
  }
 
   })


