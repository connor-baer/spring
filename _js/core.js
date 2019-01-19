/* global document */
/* global window */
/* global SmoothScroll */

/**
 * Helper function to check for, add or remove a class.
 * Source: http://jaketrent.com/post/addremove-classes-raw-javascript
 */

function hasClass(el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  }
  return !!el.className.match(new RegExp(`(\\s|^)${className}(\\s|$)`));
}

function addClass(el, className) {
  if (el.classlist) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    // eslint-disable-next-line no-param-reassign
    el.className += ` ${className}`;
  }
}

function removeClass(el, className) {
  if (el.classlist) {
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    const reg = new RegExp(`(\\s|^)${className}(\\s|$)`);
    // eslint-disable-next-line no-param-reassign
    el.className = el.className.replace(reg, ' ');
  }
}

/**
 * Helper function to get an element's exact position relative to the viewport.
 * Source https://www.kirupa.com/html5/get_element_position_using_javascript.htm
 */

function getPosition(el) {
  let yPos = 0;

  while (el) {
    if (el.tagName === 'BODY') {
      // deal with browser quirks with body/window/document and page scroll
      const yScroll = el.scrollTop || document.documentElement.scrollTop;

      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }

    // eslint-disable-next-line no-param-reassign
    el = el.offsetParent;
  }
  return {
    y: yPos
  };
}

function scrollImage(els) {
  if (els.length <= 0) {
    return;
  }
  const viewport = document.documentElement.clientHeight;
  const first = els[0];
  const last = els[els.length - 1];
  els.forEach(el => {
    const top = getPosition(el).y;
    const height = el.offsetHeight;
    const bottom = top + height - viewport;
    if (
      (top <= 0 && bottom >= 0) ||
      (bottom >= 0 && top >= 0 && el === first)
    ) {
      addClass(el, '-fixed');
      removeClass(el, '-absolute-bottom');
      removeClass(el, '-absolute-top');
    } else if (
      (bottom <= 0 && top <= 0 && el !== last) ||
      (top >= 0 && bottom <= 0)
    ) {
      addClass(el, '-absolute-bottom');
      removeClass(el, '-fixed');
    } else if (bottom >= 0 && top >= 0 && el !== first) {
      addClass(el, '-absolute-top');
      removeClass(el, '-fixed');
    }
  });
}

// eslint-disable-next-line no-unused-vars
const scroll = new SmoothScroll('a[href*="#"]', {
  // Easing pattern to use
  easing: 'easeInOutCubic',
  // How far to offset the scrolling anchor location in pixels
  offset: 80
});

const elements = [];
window.onload = () => {
  let index = 1;
  while (document.getElementById(`js-${index}`) !== null) {
    // put elements into an array. then loop over array in scrollImage()
    const element = document.getElementById(`js-${index}`);
    elements.push(element);
    index += 1;
  }
  scrollImage(elements);
};

// deal with the page getting resized or scrolled
window.addEventListener('scroll', updatePosition, false);
window.addEventListener('resize', updatePosition, false);

function updatePosition() {
  // add your code to update the position when your browser is resized or scrolled
  scrollImage(elements);
}
