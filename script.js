//this is to populate the lead date in salesforce because it will not populate directly
function beforesubmit()
{
    let outputdate=document.querySelector('.outputdate');
    let inputdate=document.querySelector('.inputdate');
    console.log('inputdate'+ inputdate.value+'outputdate'+outputdate.value );
    let datevar=new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value=datevar;
}
