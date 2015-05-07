/**
 * Created by Stanislav on 4/18/2015.
 */
var btn;
btn = document.getElementsByClassName("oneB");
function backgroundColor(){

    $(this).find(".ui-collapsible-heading-toggle").css( 'background' , '');

    console.log("test")
    btn.style.backgroundColor='yellow'
    setTimeout("ChangeColor2()",2000);
}
function ChangeColor2()
{
    btn.style.backgroundColor='red'
}
