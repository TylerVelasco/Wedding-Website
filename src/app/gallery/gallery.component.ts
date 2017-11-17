import {Component, Input, OnInit, VERSION} from '@angular/core';


@Component({
  selector: 'gallery-form',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

// export class GalleryComponent{
//   openModalWindow: boolean = false;
//   imagePointer: number = 0;
//
//   openModalWindowObservable: boolean = false;
//   imagePointerObservable: number = 0;
//
//   myImages:ImageInterface[]=[];
//   version:string="";
//   constructor() {
//     this.generateImages();
//     this.version=VERSION.full;
//   }
//   private generateImages(){
//     for(let i=0;i<loadImagesCount;i++){
//       let image={
//         thumbnail: "../assets/img/gallery/Image"+i+".jpg",
//         image: "../assets/img/gallery/Image"+i+".jpg",
//       };
//       this.myImages.push(image);
//     }
//   }
//
//   imagesArray: Array<Image> = [
//     new Image('../assets/img/gallery/Image14.jpg'),
//     new Image('../assets/img/gallery/Image17.jpg'),
//     new Image('../assets/img/gallery/Image10.jpg'),
//     new Image('../assets/img/gallery/Image4.jpg'),
//     new Image('../assets/img/gallery/Image5.jpg')
//   ];
//
//   // observable of an array of images with a delay to simulate a network request
//   images: Observable<Array<Image>> = Observable.of(this.imagesArray).delay(300);
//
//   // array with a single image inside (the first one)
//   singleImage: Observable<Array<Image>> = Observable.of([
//     new Image('../assets/img/gallery/Image14.jpg')]
//   );
//
//   imagesArraySubscribed: Array<Image>;
//
//   customDescription: Description = {
//     imageText: 'Look this image ',
//     numberSeparator: ' of ',
//     beforeTextDescription: ' => '
//   };
//   //
//   customFullDescription: Description = {
//     // you should build this value programmaticaly with the result of (show)="..()" event
//     customFullDescription: 'Custom description of the current visible image',
//     // if customFullDescription !== undefined, all other fields will be ignored
//     // imageText: '',
//     // numberSeparator: '',
//     // beforeTextDescription: '',
//   };
//
//   private subscription: Subscription;
//   private imagesArraySubscription: Subscription;
//
//   ngOnInit() {
//     this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
//       this.imagesArraySubscribed = this.imagesArray;
//     });
//   }
//
//   openImageModal(image: Image) {
//     this.imagePointer = this.imagesArray.indexOf(image);
//     this.openModalWindow = true;
//   }
//
//   openImageModalObservable(image: Image) {
//     this.subscription = this.images.subscribe((val: Image[]) => {
//       this.imagePointerObservable = val.indexOf(image);
//       this.openModalWindowObservable = true;
//     });
//   }
//
//   onImageLoaded(event: ImageModalEvent) {
//     // angular-modal-gallery will emit this event if it will load successfully input images
//     console.log('onImageLoaded action: ' + Action[event.action]);
//     console.log('onImageLoaded result:' + event.result);
//   }
//
//   onVisibleIndex(event: ImageModalEvent) {
//     // this.customFullDescription.customFullDescription = `Custom description of visible image with index= ${event.result}`;
//     // console.log('action: ' + Action[event.action]);
//     // console.log('result:' + event.result);
//   }
//
//   onIsFirstImage(event: ImageModalEvent) {
//     // console.log('onfirst action: ' + Action[event.action]);
//     // console.log('onfirst result:' + event.result);
//   }
//
//   onIsLastImage(event: ImageModalEvent) {
//     // console.log('onlast action: ' + Action[event.action]);
//     // console.log('onlast result:' + event.result);
//   }
//
//   onCloseImageModal(event: ImageModalEvent) {
//     console.log('onClose action: ' + Action[event.action]);
//     console.log('onClose result:' + event.result);
//     this.openModalWindow = false;
//     this.openModalWindowObservable = false;
//   }
//
//   // addRandomImage() {
//   //   this.imagesArray.push(this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]);
//   // }
//
//   ngOnDestroy() {
//     if (this.subscription) {
//       this.subscription.unsubscribe();
//     }
//     if(this.imagesArraySubscription) {
//       this.imagesArraySubscription.unsubscribe();
//     }
//   }
// }
export class GalleryComponent implements OnInit{
  selectedImage;
  images:object[]=[];
  constructor(){
    // this.images = [
    //   {"url":"../assets/Image14.jpg"},
    //   {"url":"../assets/Image17.jpg"},
    //   {"url":"../assets/Image10.jpg"},
    //   {"url":"../assets/Image4.jpg"},
    //   {"url":"../assets/Image5.jpg"},
    //   {"url":"../assets/Image5.jpg"},
    //   {"url":"../assets/Image10.jpg"},
    //   {"url":"../assets/Image14.jpg"},
    //   {"url":"../assets/Image17.jpg"},
    //   {"url":"../assets/Image4.jpg"},
    //   {"url":"http://your_image11_url"},
    //   {"url":"http://your_image12_url"}
    // ];
  }
  ngOnInit(){
    this.loadImages();
  }
 loadImages(){
   for(let i=1; i<14; i++)
   {
     // console.log(i);
     this.images.push({"url":"../assets/Images/Image"+i+".jpg"});
   }
 }
  setSelectedImage(image){
    this.selectedImage= image;
  }
  navigate(forward){
    var index = this.images.indexOf(this.selectedImage)+(forward ? 1: -1);
    console.log(index);
    if(index >= 0 && index < this.images.length){
      this.selectedImage = this.images[index];
    }
    else if(index == this.images.length) {
      this.selectedImage = this.images[0]
    }
    else if(index == -1) {
      this.selectedImage = this.images[this.images.length-1]
    }
  }
}
