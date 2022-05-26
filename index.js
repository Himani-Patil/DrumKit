
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    var name = this.innerHTML;
    switch (name)
    {
      case "w":
        var v1 = new Audio("sounds/tom-1.mp3");
        v1.play();
        addAnimatio(".w");
        break;

      case "a":
        var v2 = new Audio("sounds/tom-2.mp3");
        v2.play();
        addAnimatio(".a");
        break;

      case "s":
        var v3 = new Audio("sounds/tom-3.mp3");
        v3.play();
        addAnimatio(".s");
        break;

      case "d":
        var v4 = new Audio("sounds/tom-4.mp3");
        v4.play();
        addAnimatio(".d");
        break;

      case "j":
        var v5 = new Audio("sounds/snare.mp3");
        v5.play();
        addAnimatio(".j");
        break;

      case "k":
        var v6 = new Audio("sounds/crash.mp3");
        v6.play();
        addAnimatio(".k");
        break;

      case "l":
        var v7 = new Audio("sounds/kick-bass.mp3");
        v7.play();
        addAnimatio(".l");
        break;
      default:
        break;
    }
  });
}

function addAnimatio(keyp)
{
  document.querySelector(keyp).classList.add("pressed");
  setTimeout(function(){document.querySelector(keyp).classList.remove("pressed");}, 100);
}
