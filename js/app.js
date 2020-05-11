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


// // This part of the code will pick the highlighted section and will add a class active
// $(document).ready(function() {
//   $("section").mouseenter(function() {
//     var id = $(this).attr('id');
//     //this will log section1 or section2 or something like that
//     console.log(id)
//     console.log($('a'))
//     $('a').removeClass('active');
//     $("[href=\"#" + id + "\"]").addClass('active');
//
//   });
// });

document.addEventListener("scroll", function() {
  makeActive();
});

// Add class 'active' to section when it is near top of viewport
function makeActive() {
  var sections = document.querySelectorAll('.landing__container h2');
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    console.log(box);
    var allSections = ['#section1', '#section2', '#section3', '#section4', '#section5']
    // You can play with the values in the "if" condition to further make it more accurate.
    if (box.top <= 700 && box.bottom >= 150) {
      var sectionstr = section.innerHTML
      var splits = sectionstr.split(" ");
      var newName = '#' + splits[0].toLowerCase() + splits[1]
      console.log(newName)
      // Apply active state on the current section and the corresponding Nav link.

      $('nav a[href^="' + newName + '"]').addClass('active');
    } else {
      // Remove active state from other section and corresponding Nav link.
      for (var sec of allSections) {
        if (sec == newName) {
          console.log(sec)

        } else {
          $('nav a[href^="' + sec + '"]').removeClass('active');
        }
      }
    }
  }
}
