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


//This part of the code will pick the highlighted section and will add a class active
$(document).ready(function() {
  $("section").mouseenter(function() {
    var id = $(this).attr('id');
    //this will log section1 or section2 or something like that
    console.log(id)
    console.log($('a'))
    $('a').removeClass('active');
    $("[href=\"#" + id + "\"]").addClass('active');

  });
});
