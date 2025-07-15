function clickButton(val)
{
    document.getElementById("screen").value+=val

}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    var number=document.getElementById("screen").value
    var result=eval(number)
    document.getElementById("screen").value=result
}