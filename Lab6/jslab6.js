/*********************************************************************/
//Global Area




/***************** Function definition area *************/
//write a function to change the size of the box (css)
function changeColor()
{
    var boxx = document.getElementsByClassName("box");
    var c = document.getElementById("inputColor").value;
    console.log(c);

    console.log(c);
    boxx[0].style.color = c;

}

    var a = document.createElement('a');
    
function createLink()
{
    var link = document.createTextNode("Click Me!");
    a.appendChild(link);
    a.title = "Click here";
    a.href = "http://tri-c.edu";
    document.body.append(a); 

}

function removeLink()
{
   a.remove();
}

function changeSq()
{
    //I want to get all the divs that have class = "square"
    var squares = document.getElementsByClassName("square1");//returns more than 1 element
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "yellow";
        squares[i].style.borderRadius = "50px";
        squares[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares[i].innerHTML;
        squares[i].innerHTML = x+ " Box";

    }

    var squares = document.getElementsByClassName("square2");//returns more than 1 element
    //squares is an array
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.backgroundColor = "yellow";
        squares[i].style.borderRadius = "50px";
        squares[i].style.boxShadow = "2px 2px 2px grey";
        var x = squares[i].innerHTML;
        squares[i].innerHTML = x+ " Box";

    }
}

function changeShape()
{
    console.log("CShape");
    var w = document.getElementById("inputRadius").value;
    
    var squares = document.getElementsByClassName("square1");
    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.width = w;
        squares[i].style.height = w;
    }var squares = document.getElementsByClassName("square2");

    for(var i=0; i<squares.length;i++)
    {
        squares[i].style.width = w;
        squares[i].style.height = w;
    }
}