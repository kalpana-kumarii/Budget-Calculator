// alert("hiii");
const defaultResult=0
let currentBudget=defaultResult;
const defaultIncome=0;
let income=defaultIncome;
const defaultExpense=0;
let expense=defaultExpense;

// let selectedValue=0;
function getUserInput(){
    return parseInt(userInput.value);
}
function selectValue(){
    // let selectedValue=document.getElementById("selectOption").value;
   
    // alert(selectedValue);
    // console.log(selectedValue);
    return document.getElementById("selectOption").value;
    
}
// submitBtn.addEventListener('click', selectValue);
// selectOption.addEventListener(onchange,selectValue);
// function totalbudget(){
//  const enteredNumber=getUserInput();  
//  const enteredOption=selectValue();
//  currentBudget=currentBudget+ enteredNumber
// if(enteredOption=="income"){
//     income=90;
// }
// if(enteredOption=="expense"){
//     expense=80;
// }
//  outputResult(currentBudget,income,expense);
// }
// submitBtn.addEventListener('click', totalbudget);


// function createAndWriteOutput(opertor, resultBeforeCalc, calcNumber){
//     const calDescription=`${resultBeforeCalc} ${opertor} ${calcNumber}`;
//     outputResult(currentResult,calDescription);
// }

function budgetcalculator(){
    const enteredNumber=getUserInput();  
    const enteredOption=selectValue();
 

    // const initialBudget=currentBudget;
    // const income=defaultIncome;
    // const expense=defaultExpense;
    if(enteredOption=="income"){
        currentBudget=currentBudget+enteredNumber;
        income=income+enteredNumber;
        outputResult(currentBudget,income,expense);
        const divBody= document.querySelector("#incomeInput");
        divBody.innerHTML+=`
            <div class="row bg-red px-5 py-2 alert-danger m-2">${enteredNumber}</div>
            `;
        userInput.value=" ";
    }
    if(enteredOption=="expense"){
        currentBudget=currentBudget-enteredNumber;
        expense=expense+enteredNumber;
        outputResult(currentBudget,income,expense);
        // if(enteredNumber!==' ' || enteredNumber!=='NaN'){
        // }
            const divBody= document.querySelector("#expenseInput");
        divBody.innerHTML+=`
            <div class="row bg-red px-5 py-2 alert-success m-2">${enteredNumber}</div>
            `;
        
        
        userInput.value=" ";
    }
    // function sub(){
       
       
    //     currentResult=currentResult - enteredNumber;
    //     createAndWriteOutput('-',initialResult,enteredNumber);
    //     writeToLog('-',initialResult,enteredNumber,currentResult);
    
    // }
  

}

submitBtn.addEventListener('click',budgetcalculator);
