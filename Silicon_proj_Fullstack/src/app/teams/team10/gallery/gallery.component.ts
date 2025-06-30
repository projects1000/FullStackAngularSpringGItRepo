import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery/images',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

images: string[] = [
    
"../../../../assets/team10/assets/3.jpg",
 "../../../../assets/team10/assets/4.jpg",
 "../../../../assets/team10/assets/12.jpg",
 "../../../../assets/team10/assets/6.jpg",
 "../../../../assets/team10/assets/8.jpg"
  ];
}

