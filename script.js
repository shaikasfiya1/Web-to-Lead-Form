//this is to populate the lead date in salesforce because it will not populate directly
let captchachecked=true;
function beforesubmit(event)
{   
    if(captchachecked)
    {
        let outputdate=document.querySelector('.outputdate');
        let inputdate=document.querySelector('.inputdate');
        console.log('inputdate'+ inputdate.value+'outputdate'+outputdate.value );
        let datevar=new Date(inputdate.value).toLocaleDateString("en-IN");
        outputdate.value=datevar;
       
    }
    else{
        alert("Please check the recaptcha!");
        event.preventDefault();
    }
    
}
function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
function capthasuccess()
{
    captchachecked=true;

}
