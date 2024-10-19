

function removecookiebox()
{
    var cookiebox=document.querySelector(".cookiesbar");
    cookiebox.remove();

}


function changeunit(element){
    
    var Hnumber=document.querySelectorAll(".numbershighets");
    var Lnumber=document.querySelectorAll(".numberslowest");
  
    if(element.value=="F")
        {
            for(i=0;i<Hnumber.length;i++)
                {
                    Hnumber[i].innerText=Number(Hnumber[i].innerText)+33;
                    Lnumber[i].innerText=Number(Lnumber[i].innerText)+33;
                } 
        }
        else if(element.value=="C")
        {
            for(i=0;i<Hnumber.length;i++)
                {
                    Hnumber[i].innerText=Number(Hnumber[i].innerText)-33;
                    Lnumber[i].innerText=Number(Lnumber[i].innerText)-33;
                } 
        }
}