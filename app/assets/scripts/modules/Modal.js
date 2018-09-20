import $ from "jquery";

class Modal {
  constructor() {
    console.log("Modal");
    let modal_sp_link = $("#speedpong_link");
    let modal_anl_link = $("#anleitung_link");
    let modal_gal_link = $("#gallerie_link");
    let modal_contact_link = $("#kontakt_link");
    let modal_buy_link = $("#kaufen_link");

    let modal_sp = $("#about");
    let modal_anl = $("#anleitung");
    let modal_gal = $("#gallerie");
    let modal_contact = $("#kontakt");
    let modal_buy = $("#kaufen");
    let close = $(".close");
    modal_sp_link.click(function() {
      modal_sp.addClass("modal--show");
    });
    modal_anl_link.click(function() {
      modal_anl.addClass("modal--show");
    });
    modal_gal_link.click(function() {
      modal_gal.addClass("modal--show");
    });
    modal_contact_link.click(function() {
      modal_contact.addClass("modal--show");
    });
    modal_buy_link.click(function() {
      modal_buy.addClass("modal--show");
    });
    close.click(function() {
      modal_sp.removeClass("modal--show");
      modal_anl.removeClass("modal--show");
      modal_gal.removeClass("modal--show");
      modal_contact.removeClass("modal--show");
      modal_buy.removeClass("modal--show");
    });
  }
  createModal() {}
}

export default Modal;
