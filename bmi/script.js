// logic
// jab calculate pe click karega toh weight / height ^2 return ho jaye 
// weight and height ko access karo const banao - float ho sakta hai
// calculator pe event listener lagao
// bmi = formula - decimal mein kitne digit 
// category 
// res mein bmi and category daal do
// weight and height ko clear kar do

const weightinput=document.getElementById('weight');
const heightinput=document.getElementById('height');

const result=document.getElementById('res');

// const bmi='';
// const category='';
// function updateResult(bmi, category){
//     result.innerHTML=`<h3>BMI:${bmi.tofixed(2)}</h3> <p>Category:${category}</p>`
// }

document.getElementById('calculate').addEventListener('click', ()=>{
    // covert into value into the float
    const weight=parseFloat(weightinput.value);
    const height=parseFloat(heightinput.value);
    // check for the valid input
    if(isNaN(weight)|| isNaN(height) || weight<=0 || height<=0){
        result.innerHTML=`<p style="color:red;"> please enter valid weight & height!</p>`
        return;
    }

    bmi=weight/(height*height);
    let category='';
    if(bmi<=18){
        category='underweight';
    }
    else if(bmi>18 && bmi<=22){
        category='Normal';
    }else if(bmi>22 && bmi<=25){
        category='overweight';
    }else{
        category='obesed'
    }
    
    // updateResult(bmi, category);

    result.innerHTML=`
    <h2> BMI: ${bmi.toFixed(2)} </h2>
    <p> CATEGORY: ${category}</p>
    `;

    weightinput.value='';
    heightinput.value='';
});


