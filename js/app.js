//List generated Dynamically

const navbar__list = document.getElementsByClassName('navbar-nav')[0];
var sections = document.querySelectorAll('.landing__container h2');
var ph = '';
for (section of sections) {
  var sectionstr = section.innerHTML
  var splits = sectionstr.split(" ");
  var newName = splits[0].toLowerCase() + splits[1]
  // console.log(newName);
  ph = ph + '<li class="nav-item"><a class="nav-link" href="#' + newName + '">' + sectionstr + '</a></li>'
};
console.log(ph);
navbar__list.innerHTML = ph;

$(document).ready(function(){

   $("div").mouseenter(function(){
   	 var id = $(this).attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');
   });

});
