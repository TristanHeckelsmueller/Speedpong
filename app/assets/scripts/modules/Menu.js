import $ from "jquery";

class Menu {
  constructor() {
    let menu = $(".menu");

    let hamburger = $(".hamburger");
    let hamburger_center = $(".hamburger__center");

    hamburger.click(function() {
      hamburger_center.toggleClass("hamburger__center--dark");
      hamburger.toggleClass("hamburger__center--dark_pseudo");
      menu.toggleClass("menu--visible");
    });
  }
}

export default Menu;
