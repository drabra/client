import { Component, OnInit } from '@angular/core';
import { OceneService } from '../shared/ocene.service';

@Component({
  selector: 'app-ucenikove-ocene-list',
  templateUrl: './ucenikove-ocene-list.component.html',
  styleUrls: ['./ucenikove-ocene-list.component.css']
})
export class UcenikoveOceneListComponent implements OnInit {
  ucenikoveOcene: Array<any>;
  idUcenik = '';
  loading = false;
  errorMessage = '';

  constructor(private oceneService : OceneService) { }

  ngOnInit() {
  }

  public getUcenikoveOcene() {
    this.loading = true;
    this.errorMessage = '';
    this.oceneService.getUcenikoveOcene(this.idUcenik)
        .subscribe((response) => {this.ucenikoveOcene = response;},
                    (error) => {
                        this.errorMessage = error.error; this.loading = false;
                    },
                    () => {this.loading = false;})
  }

}
