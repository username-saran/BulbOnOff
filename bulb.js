document.getElementById("button").innerText = "On";

function OnOff(event)
{
     if(document.getElementById("button").innerText == "On")
     {
          document.getElementById("image").src="on.gif";
          event.srcElement.innerText = "Off";
     }
     else{
          document.getElementById("image").src="off.gif";
          event.srcElement.innerText = "On";
     }
}