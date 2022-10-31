var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.top='-80px';
  }
  else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop;
});
