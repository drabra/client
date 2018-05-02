import { Component, OnInit } from '@angular/core';
import { PredmetService } from '../shared/predmet.service';

@Component({
  selector: 'app-predmet-list',
  templateUrl: './predmet-list.component.html',
  styleUrls: ['./predmet-list.component.css']
})
export class PredmetListComponent implements OnInit {

  predmeti: Array<any>;
  errorMessage = '';

  constructor(private predmetService : PredmetService) { }

  ngOnInit() {
    this.errorMessage = '';
    this.predmetService.getAll()
        .subscribe((response) => {this.predmeti = response;},
                    (error) => {
                        this.errorMessage = error.error;
                    });
  }
}
