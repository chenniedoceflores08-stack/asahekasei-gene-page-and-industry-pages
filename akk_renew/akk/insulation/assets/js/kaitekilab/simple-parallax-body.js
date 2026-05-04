/* ----------------------------------------------------------------------------------------------------
  *  concept img parallax
  * --------------------------------------------------------------------------------------------------*/
if (document.getElementsByClassName('.js-parallax') != null) {
    const image = document.querySelectorAll('.js-parallax');
    if (image != null) {
        new simpleParallax(image);
    }
}
