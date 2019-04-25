// toggle menu
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarMenu = document.getElementById('menu');

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbarMenu.classList.toggle("open");
}
// scroll_down
function scrollBottom(x,y){
    window.scrollTo(0, document.body.scrollHeight);
}

//autorization's box
  var login = document.getElementById('login'); 
  var autorization = document.getElementById('autorization');
  var close_auto = document.getElementById('close_auto');

  login.addEventListener('click', function(){
     autorization.classList.add('open')
  }, false)

  close_auto.addEventListener('click', function(){
    autorization.classList.remove('open')
  }, false)

  autorization.addEventListener('click', function(e){
    if(e.target == this){
      autorization.classList.remove('open')
    }
  }, false)

// box
var pop_more_back = document.getElementById('pop_more_back'); 
var pop_title = document.getElementById('pop_title')
var pop_desc = document.getElementById('pop_desc')
var pop_img = document.getElementById('pop_img')
var close = document.getElementById('close');

// list item's button
var product_info = document.getElementsByClassName('product_more_info');
var product_rimg = document.getElementsByClassName('product_rimg');
var product_content_title = document.getElementsByClassName('product_content_title');

if (product_info[0]) {
  // console.log(product_info[0])
    for(let i = 0; i < product_info.length; i++) {

     // add event on btn
     product_info[i].addEventListener('click', function(){
      fillPopUp(i)
    }, false)

     // add event on img
     product_rimg[i].addEventListener('click', function(){
      fillPopUp(i)
    }, false)

     // add event on title
     product_content_title[i].addEventListener('click', function(){
      fillPopUp(i)
    }, false)
  }

  // fill pop
  function fillPopUp(i){
   pop_title.textContent =  product_info[i].getAttribute('product-name');
   pop_desc.textContent = product_info[i].getAttribute('product-desc');
   pop_img.setAttribute('src', product_info[i].getAttribute('product-imgurl'));
   pop_more_back.classList.add('open')
  }

  close.addEventListener('click', function(){
    pop_more_back.classList.remove('open')
  }, false)

  pop_more_back.addEventListener('click', function(e){
    if(e.target == this){
      pop_more_back.classList.remove('open')
    }
  }, false)
}

  // category page
//active category item

var hero_item_img = document.getElementsByClassName('hero_item_img');

if(hero_item_img) {

}
for (let i = 0; i < hero_item_img.length; i++) {
   hero_item_img[i].addEventListener('click', function(){
    hero_item_img[i].classList.toggle('active');
  })
}

//produt's filter
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product_filter_content");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
if(btns) {
  var btnContainer = document.getElementById("filter_titles");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}


  // cards page
var choose_product_item_close = document.getElementsByClassName('choose_product_item_close');
var choose_product_item = document.getElementsByClassName('choose_product_item');

for (let i = 0; i < choose_product_item_close.length; i++) {
  choose_product_item_close[i].addEventListener('click', function(){ 
      console.log()
    this.parentElement.parentElement.parentElement.remove()
  })
}

// pay page modal
var continue_btn = document.getElementById('continue');
var pay_model_content = document.getElementById('modal_content');

if(continue_btn) {
  continue_btn.addEventListener('click', function(){
    pay_model_content.style.display = 'block'
  })
}
if((window.location.href).endsWith('pay.html') ) {
  continue_btn.style.display = 'none'
}

//remove delete btn - გაუქმება
var delete_btn = document.getElementsByClassName('delete');
var delivery = document.getElementsByClassName('delivery')

if(delete_btn) {
  for (let i = 0; i < delete_btn.length; i++) {
    delete_btn[i].addEventListener('click', function(){
      delivery[i].style.display = 'none'
    })
  }
}

  // contact page
function initMap() {
      //Map options

      var options = {
        zoom: 8,
        center: {lat: 41.729483, lng: 44.4884286}
      }

      // New Map
      var map = new google.maps.Map(document.getElementById('map'), options);

      // Add Marker
      var marker = new google.maps.Marker({
        position: {lat: 42.4668, lng: 45.9495}, // 41.7386896,44.7556937
        map:map,
        icon:'/assets/images/static/pin_map.png'
      });

      var infoWindow = new google.maps.InfoWindow({
        content:'<h4>Machavariani STR. 6</h4>'
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }


//სურათების ოპტიმიზაცია, დასქროლვამდე არ ჩაიტვირთოს

document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          // lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } 
});
