// @ts-ignore

import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  style,
  state,
  animate,
} from '@angular/animations';
import { Movie } from './../../models/movie';
import { IMAGES_SIZES } from './../../constants/images-sizes';

// @ts-ignore
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  @Input() isBanner: boolean = false;
  readonly imagesSizes = IMAGES_SIZES;

  currentSlideIndex: number = 0;
  constructor() {}

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 5000);
    }
  }
}
