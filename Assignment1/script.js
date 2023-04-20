let tab;
let tabContent;
tabContent = document.getElementsByClassName("our-services-description");
tab = document.getElementsByClassName("our-services-nav-item");
hideTabsContent(1);

function hideTabsContent(a) {
  for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove("show");
    tabContent[i].classList.add("hide");
    tab[i].classList.remove("item-active");
  }
}

document.getElementsByClassName("our-services-nav")[0].onclick = function (
  event
) {
  let target = event.target;
  if (target.className === "our-services-nav-item") {
    for (let i = 0; i < tab.length; i++) {
      if (target === tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
};

function showTabsContent(b) {
  if (tabContent[b].classList.contains("hide")) {
    hideTabsContent(0);
    tab[b].classList.add("item-active");
    tabContent[b].classList.remove("hide");
    tabContent[b].classList.add("show");
  }
}
