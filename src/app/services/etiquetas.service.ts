import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtiquetasService {

  private tags: any = {
    titulo:'Skytex',
    nowCartelera: "Ahora en cartelera...",
    footer: "© 2024 Skytex. All rights reserved.",
    resume: "Resumen",
    date: "Fecha de Lanzamiento",
    calif: "Calificación"
   
};

  constructor() { }

  getTags() {
    return this.tags;
  }
}
