
// function getdata(data, getotherfun) {
//     setTimeout(() => {
//         console.log(data)
//         if (getotherfun) {
//             getotherfun();
//         }
//     }, 2000)

// }
//callbackhell
// console.log("getting data 1....")
// getdata(10, () => {
//     console.log("getting data 2....")
//     getdata(20, () => {
//         console.log("getting data 3....")
//         getdata(30,() => {
//             console.log("getting data 4....")
//             getdata(40,()=>{
//                 console.log("succusfully finished")

//             })
//         })
//     })
// });

//promises 
//   function firstFunction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("First function completed");
//             resolve("success");
//         }, 2000);
//     });
// }

// function secondFunction(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Second function completed with data:", data);
//             resolve("Data from second function");
//         }, 2000);
//     });
// }

// function thirdFunction(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Third function completed with data:", data);
//             reject("Data from third function");
//         }, 2000);
//     });
// }


// Chaining the promises
// firstFunction()
//     .then(result => {
//         console.log(result)
//         return secondFunction(result);
//     })
//     .then(result => {
//         return thirdFunction(result);
//     })
//     .then(result => {
//         console.log("All functions completed. Final result:", result);
//     })
//     .catch(error => {
//         console.error("An error occurred:", error);
//     });

// function firstFunction(data) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data :",data);
//                 resolve("success");
//             }, 2000);
//         });
//     }

//     async function getfunction(){
//         await firstFunction(1);
//         await firstFunction(2);
//         await firstFunction(3);
//         await firstFunction(4);
//     }



const BASE_URL=  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
 const dropdowns = document.querySelector(".dropdown select");

 for (code in countryList){
    for(currcode in countryList)
{
    let newoption =document.createElement("option");
    newoption.innerText =currcode;
    newoption.value =currcode;
    if(select.name==="from" && currcode ==="USD"){
        newoption.selected = "selected";
    }
    else if(select.name==="to" && currcode ==="INR"){
        newoption.selected = "selected";

    }
    select .append(newoption);
}
select.addEventListener("change",(evt)=>{
    updateFlge(evt.target);
})
 }
 const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
  
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  };
  
  const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
  };
  
  btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    updateExchangeRate();
  });
  
  window.addEventListener("load", () => {
    updateExchangeRate();
  });