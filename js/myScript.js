
function buttonHighlight()
{
  
  var w = document.getElementsByClassName('code');
  var x = document.getElementsByClassName('video');
  var y = document.getElementsByClassName('photo');
  var z = document.getElementsByClassName('GraphicDesign');
  
  if (w[0].style.display == "block")
  {
    a = document.getElementsByClassName("codingButton");
    a[0].style.fontWeight = "bold";

    b = document.getElementsByClassName("videographyButton");
    b[0].style.fontWeight = "normal";

    c = document.getElementsByClassName("photographyButton");
    c[0].style.fontWeight = "normal";

    d = document.getElementsByClassName("graphicDesignButton");
    d[0].style.fontWeight = "normal";
  }
  else if (x[0].style.display == "block")
  {
    a = document.getElementsByClassName("videographyButton");
    a[0].style.fontWeight = "bold";

    b = document.getElementsByClassName("codingButton");
    b[0].style.fontWeight = "normal";

    c = document.getElementsByClassName("photographyButton");
    c[0].style.fontWeight = "normal";

    d = document.getElementsByClassName("graphicDesignButton");
    d[0].style.fontWeight = "normal";
  }
  else if (y[0].style.display == "block")
  {
    a = document.getElementsByClassName("photographyButton");
    a[0].style.fontWeight = "bold";

    b = document.getElementsByClassName("videographyButton");
    b[0].style.fontWeight = "normal";

    c = document.getElementsByClassName("codingButton");
    c[0].style.fontWeight = "normal";

    d = document.getElementsByClassName("graphicDesignButton");
    d[0].style.fontWeight = "normal";
  }
  else if (z[0].style.display == "block")
  {
    a = document.getElementsByClassName("graphicDesignButton");
    a[0].style.fontWeight = "bold";

    b = document.getElementsByClassName("videographyButton");
    b[0].style.fontWeight = "normal";

    c = document.getElementsByClassName("photographyButton");
    c[0].style.fontWeight = "normal";

    d = document.getElementsByClassName("codingButton");
    d[0].style.fontWeight = "normal";
  }
}




function WebsiteDisclaimer()
{
  alert("This website is under construction, so please be patient...");
}

function showHideElements(class1, class2, class3, class4)
{
  var w = document.getElementsByClassName(class1);
  var x = document.getElementsByClassName(class2);
  var y = document.getElementsByClassName(class3);
  var z = document.getElementsByClassName(class4);

  /*|| class1 == 'video'|| class1 == 'photo'|| class1 == 'GraphicDesign')*/

  x[0].style.display = "none";
  y[0].style.display = "none";
  z[0].style.display = "none";

  if (w[0].style.display == "" || w[0].style.display == "none")
  {
    w[0].style.display = "block";
  }

  buttonHighlight();

  /*else
  {
    w[0].style.display = "none";
  }
  */
}

//modal Test

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
