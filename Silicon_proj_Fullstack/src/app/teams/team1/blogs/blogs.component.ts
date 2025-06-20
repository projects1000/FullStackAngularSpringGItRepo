import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs = [
    {
      title: 'Why Web Design Matters in 2025',
      description: 'A deep dive into the importance of design-first thinking in modern web development.',
      image: 'https://source.unsplash.com/random/400x200?web-design'
    },
    {
      title: '10 UI Tips for Better UX',
      description: 'Simple design principles that can drastically improve the user experience.',
      image: 'https://source.unsplash.com/random/400x200?ui'
    },
    {
      title: 'Understanding CSS Grid & Flexbox',
      description: 'A beginner-friendly explanation of layout systems in CSS.',
      image: 'https://source.unsplash.com/random/400x200?css'
    }
  ];
}
