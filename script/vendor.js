const userInput=document.getElementById("input1");
const submitBtn= document.getElementById("subBtn");
const totalBudget= document.getElementById("totalBudget");
const totalIncome= document.getElementById("totalIncome");
const totalExpenses= document.getElementById("totalExpenses");


function outputResult(budget,income,expense){
    totalBudget.textContent=budget;
    totalIncome.textContent=income;
    totalExpenses.textContent=expense;
}


// function onAddwebsite(e){
// const website=document.getElementById('input1')
// e.preventDefault();
// const divBody= document.querySelector("#incomeInput");
// const ip=userInput.value;
// divBody.innerHTML+=`
// <div class="row bg-red px-5 py-2 alert-danger m-2">${ip}</div>
// `;
// alert("this works"+ip);
// }
// submitBtn.addEventListener('click', onAddwebsite)