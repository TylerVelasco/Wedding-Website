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

  isActive (i) {
    if (this.active === ('section-' + i)) {
      return 'active';
    }
    return '';
  }

  scrollTo(ev, i) {
    ev.preventDefault();
    const dest = document.getElementById(`section-${i}`);
    scrollTo(dest.offsetTop, 500);
  }

}
