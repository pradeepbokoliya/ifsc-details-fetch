const url = "https://ifsc.razorpay.com/"


const btn = document.querySelector("#btn");
const input = document.querySelector("#myInput");
const para = document.querySelector("#para");





const getData = async() => {
    const inputValue = input.value;
    
    let response = await fetch(url + inputValue);
    let data = await response.json();
   let dataa = JSON.stringify (data, undefined, 4, "\n")
    console.log(data);
    
    para.innerText = dataa;
}

btn.addEventListener("click", getData);




