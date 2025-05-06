import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  mname = ''; murl = '';
  movies = [
    {
      Title: 'KGF',
      url: 'https://m.media-amazon.com/images/M/MV5BM2M0YmIxNzItOWI4My00MmQzLWE0NGYtZTM3NjllNjIwZjc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
      summary:
        'KGF is an Indian Kannada language epic period action film series set mostly in the Kolar Gold Fields, which gives the series its name, created by Prashanth Neel and produced by Hombale Films starring Yash in lead role with an ensemble supporting cast.[6]',
      isSummaryShow: false,
    },
    {
      Title: 'Salaar',
      url: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg',
      summary:
        'Salaar: Part 1 – Ceasefire is a 2023 Indian Telugu-language epic action drama film directed by Prashanth Neel and produced by Vijay Kiragandur under Hombale Films. The film stars Prabhas in the titular role, alongside an ensemble cast of Prithviraj Sukumaran, Shruti Haasan, Jagapathi Babu, Bobby Simha and Sriya Reddy. In the fictional dystopian city-state of Khansaar, ',
      isSummaryShow: false,
    },
  ];
  show(n:number) {
    console.log(this.movies[ n ].Title + "called");
    this.movies[ n ].isSummaryShow = this.movies[ n ].isSummaryShow ? false : true;
   }
  submitData() {
    console.log(this.mname, this.murl);
    this.mname = '';this.murl=''
  }

}
