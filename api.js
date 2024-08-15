const url = "https://ifsc.razorpay.com/"

const btn = document.querySelector("#btn");

const para = document.querySelector("#para");
const cls = document.querySelector(".row-cols-1")
const BANK = document.querySelector(".col-BANK");
const IFSC = document.querySelector(".col-IFSC");
const BANKCODE = document.querySelector(".col-BANKCODE");
const BRANCH = document.querySelector(".col-BRANCH");
const ADDRESS = document.querySelector(".col-ADDRESS");
const STATE = document.querySelector(".col-STATE");
const CITY = document.querySelector(".col-CITY");
const DISTRICT = document.querySelector(".col-DISTRICT");
const ISO3166 = document.querySelector(".col-ISO3166");
const MICR = document.querySelector(".col-MICR");
const SWIFT = document.querySelector(".col-SWIFT");
const CENTRE = document.querySelector(".col-CENTRE");
const CONTACT = document.querySelector(".col-CONTACT");
const UPI = document.querySelector(".col-UPI");
const NEFT = document.querySelector(".col-NEFT");
const RTGS = document.querySelector(".col-RTGS");
const IMPS = document.querySelector(".col-IMPS");

    const resultParagraph = document.getElementById('result');

  
    btn.addEventListener('click', async () => {
        // Get values from the input fields
        const ifsc = document.querySelector('#ifsc').value.trim();

        // Validate input fields
        if (ifsc === '') {
            resultParagraph.textContent = 'Please Enter IFSC Code.';
            resultParagraph.style.color = 'red'; // Optional: Change text color to red for error
            resultParagraph.style.visibility = "visiable";
            alert("Enter IFSC Code")
        } else {
                        
            let response = await fetch(url + ifsc);
            let data = await response.json()
            if(!response.ok){
                cls.style.visibility = "hidden";
                resultParagraph.style.visibility = "hidden";
               alert(data)
            }
            else{
           
            BANK.innerText = `Bank Name : ${data.BANK}`;
            IFSC.innerText = `Bank IFSC : ${data.IFSC}`;
            BANKCODE.innerText = `Bank BANKCODE : ${data.BANKCODE}`;
            BRANCH.innerText = `Bank BRANCH : ${data.BRANCH}`;
            ADDRESS.innerText = `Bank ADDRESS : ${data.ADDRESS}`;
            STATE.innerText = `Bank STATE : ${data.STATE}`;
            CITY.innerText = `Bank CITY : ${data.CITY}`;
            DISTRICT.innerText = `Bank DISTRICT : ${data.DISTRICT}`;
            ISO3166.innerText = `Bank ISO3166 : ${data.ISO3166}`;
            MICR.innerText = `Bank MICR : ${data.MICR}`;
            SWIFT.innerText = `Bank SWIFT : ${data.SWIFT}`;
            CENTRE.innerText = `Bank CENTRE : ${data.CENTRE}`;
            CONTACT.innerText = `Bank CONTACT : ${data.CONTACT}`;
            UPI.innerText = `Bank UPI : ${data.UPI}`;
            NEFT.innerText = `Bank NEFT : ${data.NEFT}`;
            RTGS.innerText = `Bank RTGS : ${data.RTGS}`;
            IMPS.innerText = `Bank IMPS : ${data.IMPS}`;
            cls.style.visibility = "visible";
            resultParagraph.style.visibility = "hidden";
        }


            

        }
    });
// });
