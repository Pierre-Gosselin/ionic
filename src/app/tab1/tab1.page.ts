import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [Camera]
})
export class Tab1Page implements OnInit{
  picture: string;
  pictures: string[] = [];

  constructor(private camera: Camera,
    private alertController: AlertController) {}

  ngOnInit(){
  }

  takePicture(){
    const options: CameraOptions = {
      targetWidth: 320,
      targetHeight: 140,
      saveToPhotoAlbum: true,
      destinationType: this.camera.DestinationType.NATIVE_URI
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // On créée une modale et une fois qu'elle est prete, on l'affiche
      // 'data:image/jpeg;base64,' + 
      this.picture = imageData;
      this.pictures.push(this.picture);
    });
  }
  getPicture(){

  }
}
