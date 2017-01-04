/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

document.addEventListener('turbolinks:load', function () {

  // CLASSES

  // Helper functions to check for, add or remove a class.
  // Source: http://jaketrent.com/post/addremove-classes-raw-javascript

  function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className);
    } else {
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
  }

  function addClass(el, className) {
    if (el.classlist) {
      el.classList.add(className);
    } else if (!hasClass(el, className)) {
      el.className += ' ' + className;
    }
  }

  function removeClass(el, className) {
    if (el.classlist) {
      el.classList.remove(className);
    } else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
      el.className=el.className.replace(reg, ' ');
    }
  }


  // POSITION

  // Helper function to get an element's exact position relative to the viewport.
  // Source https://www.kirupa.com/html5/get_element_position_using_javascript.htm

  function getPosition(el) {
    var yPos = 0;

    while (el) {
      if (el.tagName === 'BODY') {
        // deal with browser quirks with body/window/document and page scroll
        var yScroll = el.scrollTop || document.documentElement.scrollTop;

        yPos += (el.offsetTop - yScroll + el.clientTop);
      } else {
        // for all other non-BODY elements
        yPos += (el.offsetTop - el.scrollTop + el.clientTop);
      }

      el = el.offsetParent;
    }
    return {
      y: yPos
    };
  }

  // IMAGES ON SCROLL

  function scrollImage(elements) {
    var viewport = document.documentElement.clientHeight;
    var first = elements[0];
    var last = elements[elements.length - 1];

    for (var i = elements.length - 1; i >= length; i--) {

      var el = elements[i];
      var top = getPosition(el).y;
      var height = el.offsetHeight;
      var bottom = top + height - viewport;

      if (top <= 0 && bottom >= 0 || bottom >= 0 && top >= 0 && el === first)  {
        addClass(el, '-fixed');
         removeClass(el, '-absolute-bottom');
         removeClass(el, '-absolute-top');
      } else if (bottom <= 0 && top <= 0 && el !== last || top >= 0 && bottom <= 0) {
         addClass(el, '-absolute-bottom');
         removeClass(el, '-fixed');
      } else if (bottom >= 0 && top >= 0 && el !== first) {
        addClass(el, '-absolute-top');
        removeClass(el, '-fixed');
      }
    }
  }

  function updatePosition() {
    scrollImage(elements);
  }

  var elements = [];

  for (var i = 1; i >= 0; i++) {
    var id = 'js-' + i;
    // put elements into an array. then loop over array in scrollImage()
    var element = document.getElementById(id);
    if (element == null) {
      break;
    }
    elements.push(element);
  }
  scrollImage(elements);

  // Deal with the page getting resized or scrolled.
  window.addEventListener('scroll', updatePosition, false);
  window.addEventListener('resize', updatePosition, false);
});
