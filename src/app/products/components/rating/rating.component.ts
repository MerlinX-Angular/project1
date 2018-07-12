import { Component, OnChanges, Input,
         Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() rating: number;
  starWidth = 0;
  @Output() ratingClicked: EventEmitter<string> =
      new EventEmitter<string>();

  ngOnChanges(): void {
      // nustatome žvaigždučių dydį
      this.starWidth = this.rating * 118 / 5;
  }

  onHover(): void {
      this.ratingClicked.emit(`${this.rating}`); // rodome skaičių užvedus ant žvaigždučių
  }

}
