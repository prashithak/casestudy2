async function display()
{    
   
        var res1=await fetch('https://jsonplaceholder.typicode.com/todos');
        
        const data1=await res1.json();
        console.log(data1);
        
        show(data1);
   
    
}
display();

function show(data1) {
    
    let tab = 
        `<tr>
          <th>Duties</th>
          <th> </th>
         </tr>`;
   
    // Loop to access all rows 
    for (let r of data1) 
    {
        tab += `<tr class="table-danger"> 
    <td class="table-success align-middle">${r.title} </td>
    <td class="table-success align-middle"><input type="checkbox" id="cbox"  class="checkbox" ${r.completed?' checked':''}/></td>            
</tr>`;
    }
   
    document.getElementById('duty').innerHTML = tab;
    
}

let checkedCount=0;


function todocount(checkedCount)
{
    return new Promise((resolve,reject)=>{
        if (checkedCount===5)
        {
            resolve(checkedCount);
        }
        else
        {
            reject('count not equal to 5');
        }
    });

}
todocount().then((data)=>{
    alert(`congrats,you have done ${data}  duties today`);
})
.catch((err)=>{
    alert(`you have only ${data} duties today.try again`);
})


$('#duty').on('change','.checkbox',function(e){
   if($(this).prop('checked'===true))
   {
    console.log('checked');
    checkedCount++;
    $(this).parent().addClass('active');

   }
   else
   {
    checkedCount--;
    console.log('unchecked');
    $(this).parent().removeClass('active');
   }

   todocount(checkedCount);
});


    



   
