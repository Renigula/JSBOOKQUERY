let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  let  topMenuElement = document.getElementById('top-menu');
  
  menuLinks.forEach(function(link) {
    let aElement = document.createElement('a');
    aElement.setAttribute('href', link.href);
    aElement.textContent = link.text;
    topMenuElement.appendChild(aElement);
  });
  


let mainE1 = document.querySelector("main");

mainE1.style.backgroundColor = "var(--main-bg)";

mainE1.innerHTML = "<h1> SEI ROCKS!</h1>";

mainE1.textContent += " Rene is testing this. "

mainE1.classList.add("flex-ctr");

let topMenuEl = document.querySelector("#top-menu")

topMenuEl.style.height = "100%"
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"

topMenuEl.classList.add("flex-around")

