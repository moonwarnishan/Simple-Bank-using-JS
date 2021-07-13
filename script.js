function buttonclick(){
    document.getElementById("login-area").style.display="none";
    document.getElementById("bal").style.display="block";
}
document.getElementById("login").addEventListener('click',buttonclick);


function dep()
{   
    var depamount=parseFloat(document.getElementById('depamount').value);
    if(depamount>0){
        document.getElementById('balance').innerHTML=parseFloat(document.getElementById('balance').innerHTML)+depamount;
        document.getElementById('deposit').innerText=parseFloat(document.getElementById('deposit').innerText)+depamount;        
        document.getElementById('depamount').reset();
    }
    else
    {
        document.getElementById("aaa").innerText="invalid amount and deposit amount must be above 0"
    }

}

function wit()
{
    if(parseFloat(document.getElementById('balance').innerHTML)-parseFloat(document.getElementById('withamount').value)>0)
    {
        document.getElementById('balance').innerHTML=parseFloat(document.getElementById('balance').innerHTML)-parseFloat(document.getElementById('withamount').value);
        document.getElementById('withdraw').innerText=parseFloat(document.getElementById('withdraw').innerText)+parseFloat(document.getElementById('withamount').value);
        document.getElementById('withamount').reset();
    }
    else
    {
        document.getElementById("aaa").innerText="You dont have not enough balance"
    }
}

document.getElementById('btn2').addEventListener('click',wit);
document.getElementById('btn1').addEventListener('click',dep);




