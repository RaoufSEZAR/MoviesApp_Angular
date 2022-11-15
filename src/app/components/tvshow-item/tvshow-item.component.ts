import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Tv } from './../../models/tv';
import { Movie } from './../../models/movie';

@Component({
  selector: 'tvshow-item',
  templateUrl: './tvshow-item.component.html',
  styleUrls: ['./tvshow-item.component.scss'],
})
export class TvshowItemComponent implements OnInit {
  @Input() itemData: Tv | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor() {}

  ngOnInit(): void {}
}
