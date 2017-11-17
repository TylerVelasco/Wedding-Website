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
    this.fullImagePath1 = 'assets/pup2.jpg';
    this.fullImagePath2 = 'assets/pup1.jpg';
    this.fullImagePath3 = 'assets/dillards.jpg';
    this.fullImagePath4 = 'assets/bbb.jpg';
    this.fullImagePath5 = 'assets/pup3.jpg';
    this.fullImagePath6 = 'assets/pup4.jpg';
    this.fullImagePath7 = 'assets/pup5.jpg';
    this.fullImagePath8 = 'assets/pup6.jpg';
    // customize default values of carousels used by this component tree
    config.interval = 10000;

    config2.duration = 2500;
    config2.easing = 'cubic-bezier(0.645, 0.045, 0.355, 1)';
    config2.reset = false;
    config2.mobile = true;
    this.meta.addTag({ name: 'robots', content: 'noindex' });
    this.document = 'h3';
    // router.events.subscribe(s => {
    //   if (s instanceof NavigationEnd) {
    //     const tree = router.parseUrl(router.url);
    //     if (tree.fragment) {
    //       const element = document.querySelector("#" + tree.fragment);
    //       if (element) {
    //         element.scrollIntoView(element); }
    //     }
    //   }
    // });
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd)
      {
        const tree = router.parseUrl(router.url);
          // if (tree.fragment) {
              const element = document.querySelector("#" + tree.fragment);
              if (this.currentUrl.indexOf("/homepage#")!==-1) {
                this.goToHead(element);
                this.currentUrl = s.url;
              }
              else if (this.currentUrl.indexOf("/homepage")!==-1) {
                this.goToHead(element);
                this.currentUrl = s.url;
              }
              else if(this.currentUrl.indexOf("/homepage#")==-1) {
                this.goToHead2(element);
                this.currentUrl = s.url;
              }
          }
      // }
    });
  }
  public goToHead(element): void {
  let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, element);
  this.pageScrollService.start(pageScrollInstance);
};
  public goToHead2(element): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.newInstance({document: this.document, scrollTarget: element, pageScrollOffset: -700});
    this.pageScrollService.start(pageScrollInstance);
  };
  konami() {
    const modalRef = this.modalService.open(KonamiComponent);
    modalRef.componentInstance.name = 'Secret';
  }
  updateState(id){
    console.log(id);
    this.location.replaceState("/homepage"+id);
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
