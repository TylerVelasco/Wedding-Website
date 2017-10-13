import {Component, ElementRef, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  links: string[] = [
    'Our Story',
    'About Us',
    'When & Where',
    'Registry',
    'RSVP'
  ];
  names = 'Tyler & Breigh';

  headerClass = '';
  private sections: any;
  private rect: any;
  private active: string;
  private element: HTMLElement;

  constructor(element: ElementRef, config: NgbDropdownConfig) {
    this.element = element.nativeElement;
    config.autoClose = true;
    document.addEventListener('DOMContentLoaded', function () {

      // Get all "navbar-burger" elements
      let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {

            // Get the target from the "data-target" attribute
            let target = $el.dataset.target;
            let $target = document.getElementById(target);

            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

          });
        });
      }
    });
  }
  ngOnInit(): void {
    this.rect = this.element.getBoundingClientRect();

    const sections = document.getElementsByClassName('content-section');
    this.sections = Array.from(sections).map(s => {
      return {id: s.id, rect: s.getBoundingClientRect()};
    });

    window.addEventListener('scroll', this.scroll.bind(this));
  }
  scroll(ev) {
    const yOffset = window.window.pageYOffset;
    this.headerClass = yOffset > this.rect.height ? 'scrolled' : '';

    if (yOffset === 0) {
      this.active = '';
      return;
    }

    for (const section of this.sections){
      if (yOffset >= section.rect.top &&
        yOffset <= (section.rect.top + section.rect.height)) {
        this.active = section.id;
      }
    }
  }

}
