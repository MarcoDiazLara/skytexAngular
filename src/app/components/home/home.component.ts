import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MovieService } from '../../services/movie.service';
import { EtiquetasService } from '../../services/etiquetas.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: any[] = [];
  etiquetas: any;

  constructor(private movieService: MovieService, private et: EtiquetasService) { }

  ngOnInit(): void {
    this.etiquetas = this.et.getTags();
    this.movieService.getNowPlaying().subscribe((data: any) => {
      this.movies = data.results;
    });
  }
}
