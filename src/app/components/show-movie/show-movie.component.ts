import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MovieService } from '../../services/movie.service';
import { EtiquetasService } from '../../services/etiquetas.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './show-movie.component.html',
  styleUrl: './show-movie.component.css'
})
export class ShowMovieComponent {
  movie: any;
  etiquetas: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private et: EtiquetasService
  ) { }

  ngOnInit(): void {
    this.etiquetas = this.et.getTags();
    const id = +(this.route.snapshot.paramMap.get('id')?? 0);
    this.movieService.getMovieDetails(id).subscribe((data: any) => {
      this.movie = data;
    });
  }
}
