import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
  slides = [
    'assets/team4/1-1.jpg',
  'assets/team4/1-28.jpg',
  'assets/team4/3-1-2.jpg',
   'assets/team4/1620227980DSC_0257.webp',
  'assets/team4/Header-Photo-13-1-1.jpg',
  'assets/team4/images.jpeg',
     'assets/team4/31pBDV4WdX.webp',
  'assets/team4/1714374158php8q0mLq.jpeg',
  'assets/team4/Screenshot-2024-05-09-135935.jpg',
  'assets/team4/Silicon_Institute_of_Technology_Bhubaneswar3_7016265f56_340af629c0.jpg',
  'assets/team4/Slider-BBSR-Home-1.png'
  ];

  gridImages = [
    'assets/team4/1-1.jpg',
  'assets/team4/1-28.jpg',
  'assets/team4/3-1-2.jpg',
    'assets/team4/1620227980DSC_0257.webp',
  'assets/team4/Header-Photo-13-1-1.jpg',
  'assets/team4/images.jpeg',
     'assets/team4/31pBDV4WdX.webp',
  'assets/team4/1714374158php8q0mLq.jpeg',
  'assets/team4/Screenshot-2024-05-09-135935.jpg',
  'assets/team4/Silicon_Institute_of_Technology_Bhubaneswar3_7016265f56_340af629c0.jpg',
  'assets/team4/Slider-BBSR-Home-1.png'
  ];

  currentSlide = 0;
  intervalId: any;
  selectedImage: string | null = null;
  selectedIndex: number = 0;

  touchStartX = 0;
  touchEndX = 0;
  

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  openLightbox(img: string) {
    this.selectedIndex = this.gridImages.indexOf(img);
    this.selectedImage = img;
  }

  closeLightbox() {
    this.selectedImage = null;
  }

  showNextImage() {
    this.selectedIndex = (this.selectedIndex + 1) % this.gridImages.length;
    this.selectedImage = this.gridImages[this.selectedIndex];
  }

  showPrevImage() {
    this.selectedIndex = (this.selectedIndex - 1 + this.gridImages.length) % this.gridImages.length;
    this.selectedImage = this.gridImages[this.selectedIndex];
  }

  // ✅ Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.selectedImage) {
      if (event.key === 'ArrowRight') this.showNextImage();
      else if (event.key === 'ArrowLeft') this.showPrevImage();
      else if (event.key === 'Escape') this.closeLightbox();
    }
  }

  // ✅ Swipe (touch navigation)
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    const deltaX = this.touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) this.showNextImage(); // swipe left
      else this.showPrevImage(); // swipe right
    }
  }
}
