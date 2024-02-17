em=document.getElementById('floatingInput');
pwd=document.getElementById('floatingPassword');
// lg(em,pwd,display);

function auth()
{
    if(em.value.trim() ==""||pwd.value.trim() =="")
    {
        alert('Fields cannot be empty');
        return false
    }
    else if(em.value !='admin')
    {
        lg(em.value,alart);
    }
    else if(pwd.value !='12345')
    {
       lg(pwd.value,alart) ;
    }
    else
    {
        return true
    }
}
function alart(m)
{
    alert(`${m} is invalid`);
    return false
}
function lg(m,callback)
{
callback(m);
}