import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parallax',
  template: `
    <div
      class="bg fadeIn fadeIn-3s fadeIn-Delay-3s"
      [style.backgroundPosition]="position">
    </div>
  `
})
export class ParallaxComponent {
  private static speed = 0.5;
  private element: HTMLElement;
  public position = '50% 0';
  constructor(element: ElementRef) {
    this.element = element.nativeElement;
    window.addEventListener('scroll', this.scroll.bind(this));
  }

  scroll(ev) {
    const windowYOffset = window.pageYOffset;
    const elmTopOffset = this.element.offsetTop;
    this.position = `50% ${(windowYOffset - elmTopOffset) * ParallaxComponent.speed}px`;
  }
}
