import { Component, ViewChild } from '@angular/core';
import { ImageCroppedEvent, ImageCropperComponent,  ImageTransform, LoadedImage } from 'ngx-image-cropper';
import { Camera, CameraResultType } from '@capacitor/camera'
import { LoadingController } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {







  // @ViewChild ('cropper') cropper:ImageCropperComponent
  
  // croppedImage: any = '';
  // myImage = null;
  // isMobile = Capacitor.getPlatform() !== 'web';
  // transform : ImageTransform = {};

  constructor( private loadingCtrl:LoadingController ,public route:Router ) {}
   
//  async selectImage(){
//     const image = await Camera.getPhoto({
//       quality : 100,
//       allowEditing:true,
//       resultType:CameraResultType.Base64,
//     });
    
//     const loading = await this.loadingCtrl.create();
//     await loading.present();

//     this.myImage = `data:image/jpeg;base64,${image.base64String}`;
//     this.croppedImage = null;

//   }

//   imageLoaded(){
//     this.loadingCtrl.dismiss();
//   }

//   loadImageFailed(){
//     console.log('Image Load Failed')
//   }

//   cropImage(){
//     this.croppedImage = this.cropper.crop().base64;
//     this.myImage = null;
//   }

//   rotate(){
//     const newValue = ((this.transform.rotate?? 0)+ 99) % 360;

//     this.transform ={
//       ...this.transform,
//       rotate:newValue
//     };
//   }

//   flipHorizental(){
//     this.transform ={
//       ...this.transform,
//       flipH: !this.transform.flipH
//     };
//   }

//   flipVertical(){
//     this.transform ={
//       ...this.transform,
//       flipV: !this.transform.flipV
//     };
//   }

//   discardChanges(){
//     this.myImage = null;
//     this.croppedImage = null;
//   }

public data:any = [{path: "./../../assets/3.jpg"},{path: "./../../assets/1.jpg.webp"},{path: "./../../assets/3.jpg"},{path: "./../../assets/4.png"},{path: "./../../assets/2.jpg"},{path: "./../../assets/5.jpg"},]

public data1:any = [{path: "./../../assets/3.jpg", name: "Thomas Smith", city:"Los Angles", price: 50, rate: 4.9},{path: "./../../assets/1.jpg.webp", name: "Andrew Smith", city:"New York", price: 45, rate: 4.9},{path: "./../../assets/3.jpg", name: "Harry Clay", city:"Washington", price: 37, rate: 4.7},{path: "./../../assets/4.png", name: "Thomas Smith", city:"Silicon Valley", price: 32, rate: 4.7},{path: "./../../assets/1.jpg.webp", name: "Andrew Smith", city:"New York", price: 40, rate: 4.6},{path: "./../../assets/2.jpg", name: "Thomas Smith", city:"New York", price: 25, rate: 4.2}]

jobs(){
  this.route.navigate (['jobs'])
}

}
