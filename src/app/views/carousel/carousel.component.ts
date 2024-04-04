import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { ImdbService } from '../../services/imdb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})

export class CarouselComponent implements OnInit {
  public movies: any = [];
  currentMovie = 0;

  constructor(private imdbService: ImdbService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.imdbService.getData().subscribe((data) => {
      data.forEach((item) => {
        this.movies.push(item);

        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
      });

    });
  }

  onPreviousClick() {
    const previous = this.currentMovie - 1;
    this.currentMovie = previous < 0 ? this.movies.length - 1 : previous;
  }

  onNextClick() {
    const next = this.currentMovie + 1;
    this.currentMovie = next === this.movies.length ? 0 : next;
  }
}