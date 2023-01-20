const ACCORDION_BUTTONS = document.getElementsByClassName('accordion-button');
const ACCORDION_BODIES = document.getElementsByClassName('accordion-body');
const SVG_CLOSED = document.getElementsByClassName('svg-closed');
let lastOpenedTabIndex = -1;

for (let index = 0; index < ACCORDION_BUTTONS.length; index++) {
  ACCORDION_BUTTONS[index].addEventListener('click', () => {
    ACCORDION_BODIES[index].classList.toggle('collapsed');
    SVG_CLOSED[index].classList.toggle('closed');

    if (lastOpenedTabIndex != -1) {
      ACCORDION_BODIES[lastOpenedTabIndex].classList.add('collapsed');
      SVG_CLOSED[lastOpenedTabIndex].classList.add('closed');
    }
    lastOpenedTabIndex = index;
  });
}
