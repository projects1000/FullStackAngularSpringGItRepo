import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery/images',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

images: string[] = [
    
"../../../../assets/team10/assets/outsideview1.jpg",
 "../../../../assets/team10/assets/csebuilding.png",
 "../../../../assets/team10/assets/competiton.jpg",
 "../../../../assets/team10/assets/zygon.jpg",
 "../../../../assets/team10/assets/outsideview2.jpg"
  ];
}
