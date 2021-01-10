var input = document.getElementById("inputText");
var hist = document.getElementById("hist");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8,9];
var strNumbers = [":one: ", ":two: ", ":three: ", ":four: ", ":five: ", ":six: ", ":seven: ", ":eight: ", ":nine: "];

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function formatAMPM(date) {
  var seconds = date.getSeconds();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
  return strTime;
}

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
	  i = input.value;
	  i = i.toLowerCase();
	  o = "";
	  for(var x = 0; x < i.length; x++)
	  {
		  cur = i.charAt(x);
		  if(cur == ' ')
		  {
			  o = o.concat("	");
		  }
		  else if(cur == 'a' || cur == 'b')
		  {
			  o = o.concat(":" + cur + ": ");
		  }
		  else if(cur == "o")
		  {
			  o = o.concat(":o2: ");
		  }
		  else if(cur == "p")
		  {
			  o = o.concat(":parking:")
		  }
		  else if(isLetter(cur))
		  {
			  o = o.concat(":regional_indicator_" + cur + ": ");
		  }
		  else if(numbers.includes(parseInt(cur)))
		  {
			  o = o.concat(strNumbers[numbers.indexOf(parseInt(cur))]);
		  }
		  else
		  {
			  o = o.concat(cur);
		  }
	  }
	  //Character limit
	  if(o.length > 2000)
	  {
		  alert("Your message is greater than the 2000 character limit.");
	  }
	  else
	  {
		input.value = o;
		input.select();
		document.execCommand("copy");
		input.value = "";
	  }
	  
	  var date = new Date();
	  var line = "\n\n" + formatAMPM(date) + ": " + i + "\n" + o;
	  hist.innerText = line.concat(hist.innerText);
  }
});