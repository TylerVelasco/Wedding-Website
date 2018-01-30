import {Component, HostListener, Inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {NgbCarouselConfig, NgbModal, NgbTabset, NgbTabsetConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgsRevealConfig} from "ng-scrollreveal";
import { Meta } from '@angular/platform-browser';
import {KonamiComponent} from "../konami/konami.component";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {PageScrollInstance, PageScrollService} from "ng2-page-scroll";
import {DOCUMENT, Location} from "@angular/common";

@Component({
  selector: 'homepage-root',
  templateUrl: './homepage.component.html',

  styleUrls: ['./homepage.component.css'],
  providers: [NgbTabsetConfig]
})
export class HomePageComponent{
  fullImagePath1: string;
  fullImagePath2: string;
  fullImagePath3: string;
  fullImagePath4: string;
  fullImagePath5: string;
  fullImagePath6: string;
  fullImagePath7: string;
  fullImagePath8: string;
  showHideGuest: string;
  index=0;
  currentUrl = "/homepage";
  constructor(private meta: Meta,
              private fb: FormBuilder,
              private af: AngularFireAuth,
              private db: AngularFireDatabase,
              private modalService: NgbModal,
              config: NgbCarouselConfig,
              config2: NgsRevealConfig,
              router:Router,
              private route:ActivatedRoute,
              private pageScrollService: PageScrollService,
              private location: Location,
              @Inject(DOCUMENT)
              private document: any) {
    this.fullImagePath1 = 'assets/Image-AboutUs-breigh.jpg';
    this.fullImagePath2 = 'assets/Image-AboutUs-tyler.jpg';
    this.fullImagePath3 = 'assets/dillards.jpg';
    this.fullImagePath4 = 'assets/bbb.jpg';
    // customize default values of carousels used by this component tree
    config.interval = 10000;

    config2.duration = 2500;
    config2.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config2.reset = false;
    config2.mobile = true;

    router.events.subscribe(s => {
      if (s instanceof NavigationEnd)
      {
        const tree = router.parseUrl(router.url);
              const element = document.querySelector("#" + tree.fragment);
              if(this.currentUrl.indexOf("/gallery")!==-1) {
                this.goToHead(element, -700);
                this.currentUrl = s.url;
              }
          }
    });
  }
  public goToHead(element, offset): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: element, pageScrollOffset: offset});
    this.pageScrollService.start(pageScrollInstance);
  };


  konami() {
    const modalRef = this.modalService.open(KonamiComponent);
    modalRef.componentInstance.name = 'Secret';
  }
  // @HostListener("window:scroll", [])
  // onScroll(): void {
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     this.index+=1;
  //     console.log("Welcome to the bottom of the page you have hit rock bottom " + this.index + " times.");
  //     if(this.index > 9) {
  //       window.scrollTo(0, 0);
  //     }
  //   }
  // }
}
