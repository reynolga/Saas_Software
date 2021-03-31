var softwareBanner = document.getElementById("software-banner");
var header = document.getElementsByClassName("second-header")[0];
var priceCards = document.getElementsByClassName("mini-price-card");

window.onscroll = function() {
  
    if(window.pageYOffset > 200) { header.classList.add("sticky");  }
    else                         { header.classList.remove("sticky");  }      
            
    if(window.pageYOffset > 400) { softwareBanner.classList.add("software-banner-animation"); }               
    
    if(window.pageYOffset > 2900)
    {
      for(let card of priceCards){                         
          card.classList.add("price-card-animation");
      }
    }               
}

// Toggle Navigation button
const navButton = document.querySelector('button[aria-expanded]');
    function toggleNav({target}) {
      const expanded = navButton.getAttribute('aria-expanded') === 'true';
      navButton.setAttribute('aria-expanded', !expanded);
    }

    navButton.addEventListener('click', toggleNav);