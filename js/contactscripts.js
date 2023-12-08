const myIframe = document.getElementById("cgi-results");
function checkform() {
    var cffname = document.forms["contactform"]["fname"].value;
    var cflname = document.forms["contactform"]["lname"].value;

    var cfemail = document.forms["contactform"]["email"].value;
    var cfphone = document.forms["contactform"]["phone"].value;

    if(cffname !== ""
        && cflname !== ""
        && cfemail !== ""
        && cfphone !== "") 
        {
        submitButton.disabled= false;
        }
}
function disableFields()
{
const iframeWindow = myIframe.contentWindow;
const iframeDocument = myIframe.contentDocument;
const iframeHeading = iframedocument.querySelector("form");
    document.getElementById("fname").disabled=true;
    document.getElementById("lname").disabled=true;
    document.getElementById("email").disabled=true;
    document.getElementById("phone").disabled=true;
    submitButton.disabled= true;
}