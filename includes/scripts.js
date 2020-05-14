function lenname()
{
    var first="rozeen";
    var last="hillo";
    var total=first.length*last.length;
    return total;
}
window.onload=function init() 
{
    var main = document.getElementById("id_main")
    var articles = "";
    var i;
    for (i = 0; i < this.lenname(); i++)
    {
        articles +=  '<article></article>';
    }
    main.innerHTML = articles;

    var art = document.getElementsByTagName('article');
    art[0].onmousemove = function()
    {
        art[0].style.backgroundImage = "url('./images/R.png')";

    }
    art[0].onmouseout = function()
    {
        art[0].style.backgroundImage = 'none';  
    }
    
}

 var x = document.getElementById("id_main");
 //var y = x.getElementsByClassName("laodbok")[6].style.backgroundColor;
document.getElementById("buttonColor").onclick = function()
{
    for ( i =0; i < 5 ; i++)
        x.getElementsByTagName("article")[i].style.backgroundColor = "blue";
}
document.getElementById("buttonMain").onclick = function()
{
    for ( i =0; i < 5 ; i++)
        x.getElementsByTagName("article")[i].style.backgroundColor = "white";
}

