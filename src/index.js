import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Router } from "react-router-dom"
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


(function () {
  // mobile navigation
  const navToggler = document.querySelectorAll('.nav__btn');
  const body = document.querySelector('body');

  for (let i = 0; i < navToggler.length; i++) {
    navToggler[i].addEventListener('click', (e) => {
      e.preventDefault();

      if (body.classList.contains('nav-opened')) {
        body.classList.remove('nav-opened');
      } else {
        body.classList.add('nav-opened');
      }
    });
  }

  // close mobile navigation by click on link
  const navLink = document.querySelectorAll('.nav__link');

  for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', (e) => {
      body.classList.remove('nav-opened');
    });
  }

  // tooltip open/close
  const tooltipButtons = document.querySelectorAll('.tooltip__button');

  tooltipButtons.forEach((tooltipButton) => {
    const tooltip = tooltipButton.closest('.tooltip');
    const  tooltipContent = tooltip.querySelector('.tooltip__content');

    tooltipButton.addEventListener('click', (e) => {
      e.preventDefault();

      // show/close
      if (tooltip.classList.contains('tooltip_opened')) {
        tooltip.classList.remove('tooltip_opened');
      }
      else {
        tooltip.classList.add('tooltip_opened');
      }
    });

    // close tooltip when click out of block
    document.addEventListener('click', outOfTooltip, false);

    function outOfTooltip(e) {
      const target = e.target;

      const its_link = target == tooltipButton || tooltipButton.contains(target);
      const its_dropdown = target ==  tooltipContent;
      const tooltip_is_opened = tooltip.classList.contains('tooltip_opened');

      if (tooltip_is_opened && !its_dropdown && !its_link) {
        tooltip.classList.remove('tooltip_opened');
      }
    }
  });

  // Accordion and Expand/collapse
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((accordionItem) => {
      const accordionButton = accordionItem.querySelector('.accordion__btn');

      // if button has class 'active' - expand item
      if (accordionItem.classList.contains('_active')) {
        const accordionContent = accordionItem.querySelector('.accordion__box');
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      }

      accordionButton.addEventListener('click', (e) => {
        e.preventDefault();

        // Show only one of item at a time - just wrap all items with .accordion._show-one in HTML (accordion)
        const accordionContainer = accordionItem.closest('.accordion._show-one');

        if (accordionContainer) {
          const accordionActiveItem = accordionContainer.querySelector(
              '.accordion__item._active'
          );
          if (accordionActiveItem && accordionActiveItem !== accordionItem) {
            accordionActiveItem.classList.toggle('_active');
            accordionActiveItem.querySelector(
                '.accordion__box'
            ).style.maxHeight = 0;
          }
        }

        accordionItem.classList.toggle('_active');
        const accordionContent = accordionItem.querySelector('.accordion__box');

        if (accordionItem.classList.contains('_active')) {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
          accordionContent.style.maxHeight = 0;
        }
      });

    });


})(document);

// change accordion content max-height on resize
window.addEventListener('resize', function () {
  const activeItems = document.querySelectorAll('.accordion__item._active');

  activeItems.forEach((activeItem) => {
    const activeBox = activeItem.querySelector('.accordion__box');
    const activeContent = activeBox.querySelector('.accordion__content');

    activeBox.style.maxHeight = activeContent.scrollHeight + 'px';
  });
});