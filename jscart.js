var amt;
var show;

bill.onclick=function()
{
    amt=0;

    if(sandwich.checked==true)
    amt+=150;

    if(mac.checked==true)
    amt+=65
    
    if(Cookies.checked==true)
    amt+=45
    
    if(donuts.checked==true)
    amt+=15

    if(hotdogs.checked==true)
    amt+=25
    
    if(momos.checked==true)
    amt+=100
    
    total.innerHTML="Total = " + amt + " Rs";
    
}

gst.onchange=function()
{
    show=0;
    if(gst.value==1)
        show=amt*5/100
    
    if(gst.value==2)
        show=amt*10/100
    
    if(gst.value==3)
        show=amt*20/100

    if(gst.value==4)
        show=amt*50/100

    Gamt.innerHTML="Tax ="+ show + " Rs";
    ntot=amt+show;
    Gtotal.innerHTML="Net Pay ="+ ntot + " Rs";

}
cash.onclick=function()
{
    pay.innerHTML="Paid From Cash"
}

upi.onclick=function()
{
    pay.innerHTML="Paid From Credit"
}

wallet.onclick=function()
{
    pay.innerHTML="Paid From Wallet"
}
