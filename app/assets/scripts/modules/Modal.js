import $ from "jquery";

class Modal {
  constructor() {
    let modal_sp_link = $("#speedpong_link");
    let modal_anl_link = $("#anleitung_link");
    let modal_gal_link = $("#gallerie_link");
    let modal_contact_link = $("#kontakt_link");

    let modal_sp = $("#about");
    let modal_anl = $("#anleitung");
    let modal_gal = $("#gallerie");
    let modal_contact = $("#kontakt");
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
    close.click(function() {
      modal_sp.removeClass("modal--show");
      modal_anl.removeClass("modal--show");
      modal_gal.removeClass("modal--show");
      modal_contact.removeClass("modal--show");
    });
  }
  createModal() {}
}

export default Modal;
