console.log("THis is script");
let result=
{
    "tag": "",
    "free": true,
    "role": false,
    "user": "kusum9418177125",
    "email": "kusum9418177125@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
  }

submitBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    console.log("clicked");
    resultCont.innerHTML=`<img width="123px" src="img/loading.svg "alt="">`
    let key="ema_live_FO20137QSIWN76ymtqmJJjq5JGTDnVixgofIKyHh";
    let email= document.getElementById("username").value;
    let url=  `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
    let res=await fetch(url);
    let result=await res.json();
    let str=``;
    for(key of Object.keys(result)){
      str=str + `<div>${key}: ${result[key]}</div>`
    }
    resultCont.innerHTML = str;
})
