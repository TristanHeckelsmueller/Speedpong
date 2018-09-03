import $ from "jquery";

class Gallery {
  constructor() {
    let img_01 = $("#img-01");
    let img_02 = $("#img-02");
    let img_03 = $("#img-03");
    let img_04 = $("#img-04");
    let img_05 = $("#img-05");

    img_01.click(function() {
      img_01.toggleClass("gallerie__img--big");
    });
    img_02.click(function() {
      img_02.toggleClass("gallerie__img--big");
    });
    img_03.click(function() {
      img_03.toggleClass("gallerie__img--big");
    });
    img_04.click(function() {
      img_04.toggleClass("gallerie__img--big");
    });
    img_05.click(function() {
      img_05.toggleClass("gallerie__img--big");
    });
  }
}

export default Gallery;
