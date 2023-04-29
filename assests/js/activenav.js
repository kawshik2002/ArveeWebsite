
// window.onscroll = () => {
//     var current = "";
  
//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       if (pageYOffset >= sectionTop ) {
//         current = section.getAttribute("id"); }
//     });
  
//     navLi.forEach((li) => {
//       li.classList.remove(".active");
//       if (li.classList.contains(current)) {
//         li.classList.add("active");
//       }
      
//     });
//     $(".navbar-nav li a").on("click",function(){
// $(".navbar-nav").hide();
//     });
        
//     };

   
//   // };

  

// $(document).ready(function() {
//   $('nav ul li a:not(:only-child)').click(function(e) {
//       $(this).siblings('.nav-dropdown').toggle();
//       e.stopPropagation();
//   });

//   $('.nav-link').click(function(){
//       $('.navbar-nav').hide();
//   });
//   // $('.nav-link').click(function(){
//   //     $('nav ul').slideToggle();
//   // })
//   $('#nav-toggle').on('click', function(){
//       this.classList.toggle('active');
//   });
//   document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))
// });












// $(document).on('click', '.nav-link.active', function() {
//   var href = $(this).attr('href').substring(1);
//   //alert(href);
//   $(this).removeClass('active');
//   $('.tab-pane[id="' + href + '"]').removeClass('active');
  
// });
// $(document).mouseup(function(e) {
//     var container = $("#tablist"); // target ID or class
//     // if the target of the click isn't the container nor a descendant of the container
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//         // get Event here
//         $('.active').removeClass('active');
//     }
// });











// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//   l.classList.remove("active");
//   l.classList.add("active");
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })
 