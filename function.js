// Shane Murdock 2899741
var text2display = "";
var answers = new Array(5);
	answers[0] = "Leon";
	answers[1] = "blue"
	answers[2] = "Toyota Starlet"
	answers[3] = "fish"+"vegetables"
	answers[4] = "Kickboxing"

var questions = new Array(5);
	questions[0] = "q1";
	questions[1] = "q2";
	questions[2] = "q3";
	questions[3] = "q4";
	questions[4] = "q5";


function checkQs()
{
	var qs = document.getElementsByName("q1");
	var qs = document.getElementsByName("q2");
	var qs = document.getElementsByName("q3");
	var noOfRadios = qs.length;

	for(var i = 0; i<noOfRadios; i++)
	{
		if(qs[i].checked)
		{
			if(qs[i].value=="correct")
			{
				quiz.answersBox.value = "Well done!";
				break;
			}
		}
	}

}



/*function is_checked
{
	var leon = document.getElementById('leon').checked;
	var  pirates= document.getElementById('pirates').checked;
	var click = document.getElementById('click').checked;
	var  highlander= document.getElementById('highlander').checked;
}

	if(leon==true
	{
				
	}

	if(leon==false&&pirates==false&&click==false)
	{
		alert('Please make a guess');
		return false;
	}

	else
	{
		return true;
	}
	function eyeColour()
	{
		var green = document.getElementById('green').checked;
		var blue = document.getElementById('blue').checked;
		var brown= document.getElementById('brown').checked;
	}if(blue = true)
	{

	}if(brown==true||green==true)
	{
		alert('incorrect guess');
		return false;

	}if(green==false&&blue==false&&brown==false){
		alert('Please insert a value for eye colour.');
		return false;
	}
	function favSports()
	{
		var mylist=document.getElementById('mylist');
		document.getElementById('favourite').value mylist.options(mylist.selectedIndes).text;
	}if(kicboxing==true)
	{

	}if(kickboxing==false&&fooball==false&&golf==false)
	{
		alert('Please make a guess');
		return false;
	}
	function myFunction() 
	{
		document.getElementById("demo").innerHTML = "Hello World";
	}*/