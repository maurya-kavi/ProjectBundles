

let currentinput='';
const screen=document.getElementById('screen');

let lastresult=false;

function updateScreen(){
    screen.textContent=currentinput ||'0';
}

document.getElementById('buttons').addEventListener('click', (event)=>{
    const value=event.target.dataset.value; // data-value jo value hai string ke form mein 

    if(!value) return ;
    
    if(lastresult && value>='0' && value<='9'){
        currentinput=''; // clear the previous result
    }
    lastresult=false; //reset the flag

    if( value>='0' && value<='9' || value==='.'  || value==='(' || value===')'){
        currentinput+=value;
    }else if('+-/*%'.includes(value)){ //agar value mein ye sab mein se kuchh bhi milta hai
        if(currentinput && !'+-/*%'.includes(currentinput.slice(-1))){
            // screen mein pahle se kuchh value hai or kio operator nhi hai last mein toh add kar do
            currentinput+=value;
            lastresult=false;
        }

    }
    else if(value==='='){
// try and catch is using to prevent the system from crashing
// if the system will find the condition it will execute try otherwise catch error instead of crashing system

// JS not solve the expression of string by its own 
// it can be solved by either using new function or eval(), 
// more preferred is new function
// return 5+6/3 in new function will gives ans -> 8 
// () is called to execute the function immediatly
// toString is use to store the currentinput as string

        try{
            currentinput=new Function(`return ${currentinput}`)().toString();
            lastresult=true;
        }catch{
            currentinput='Error';
        }
        
    }else if(value==='←'){
        currentinput=currentinput.slice(0,-1);
        // to delete last char from screen
    }
    else if(value==='C'){ // this function is not added for now
        // clear the input i.e, screen
        currentinput='';
    }

    else if(value==='π'){
        currentinput+=Math.PI.toFixed(6); //upto 6 decimal digits
    }
    else if(value==='sin'){
        // currentinput+=Math.sin(new Function(`return ${currentinput}*(Math.PI/180)`)).toFixed(6);
        currentinput = Math.sin(eval(currentinput) * (Math.PI / 180)).toFixed(6);
    }

    else if(value==='cos'){
        currentinput=Math.cos(eval(currentinput)*(Math.PI/180)).toFixed(6);
    }

    else if(value==='tan'){
        currentinput=Math.tan(eval(currentinput)*(Math.PI/180)).toFixed(6);
    }

    else if(value==='e'){
        currentinput+=Math.E.toFixed(6);
    }

    else if(value==='log'){
        currentinput=Math.log(eval(currentinput)).toFixed(6);
    }


    updateScreen();
});

