var taskInput=document.getElementById('taskInput');
var submitTask=document.getElementById('submitTask');
var displayBtn=document.getElementById('displayBtn');
var list=document.getElementById('list');
var cnt=0;
var divid="divid";
var btnid="btnid";
displayBtn.addEventListener("click",function display(){
    if(list.style.visibility==='hidden')
    list.style.visibility='visible';
    else
    list.style.visibility='hidden';
});
submitTask.addEventListener("click",function clicked(){
        if(taskInput.value.length===0)
        window.alert("Task cannot be empty")
        else if(taskInput.value.length!==0)
        {   if(list.style.visibility!=='visible')
            list.style.visibility = "hidden";
            list.innerHTML+='<div id='+divid+cnt+' class="mt-3"><span class="mr-4">'+taskInput.value+'</span><button id='+btnid+cnt+' type="button">Delete</button></div>';
            cnt++;
        }

});
document.addEventListener('click',function(e){
if(e.target.id.includes('btnid')){
let id=e.target.id;
document.getElementById(divid+id.charAt(id.length-1)).outerHTML="";
}
});