const app = {
  pages: [],
  show: new Event('show'),
  init: function(){
    pages = document.queryselectorAll('.page');
  },
  nav: function(ev){
    ev.preventDefault();
  },
  pageShown: function(ev){
  },
  poppin: function(ev){
  }
}

document.addEventListener('DOMContentLoaded', app.init);
