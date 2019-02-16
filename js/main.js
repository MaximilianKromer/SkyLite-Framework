

/* Used for expandable Content */
var coll = document.getElementsByClassName("expand");
var others = document.getElementsByClassName("add");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display == 'block'){
      content.style.display = "none";
    } else {
      var n;
      for (n = 0; n < others.length; n++) {
        others[n].style.display = "none";
      }
      content.style.display = "block";
    } 
  });
}


/* Set the width of the side navigation and add a black overlay */
function openNav() {
  document.getElementById("sidenav").style.width = "270px";
  document.getElementById("overlay").style.display = "block";
}
  
/* Set the width of the side navigation and remove the black overlay */
function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
}