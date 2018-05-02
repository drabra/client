import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PredmetService } from '../shared/predmet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-predmet',
  templateUrl: './predmet.component.html',
  styleUrls: ['./predmet.component.css']
})
export class PredmetComponent implements OnInit, OnDestroy {
  errorMessage = '';
  predmet: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private predmetService: PredmetService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.predmetService.get(id).subscribe((predmet: any) => {
          if (predmet) {
            this.predmet.idPredmet = predmet.idPredmet;
            this.predmet.naziv = predmet.naziv;
            this.predmet.fondCasova = predmet.fondCasova;
            this.predmet.href = '//localhost:8080/dnevnik/predmeti/predmet/' + predmet.idPredmet;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.errorMessage = 'Los zahtev';
            this.gotoList();
          }
        }, (error) => {this.errorMessage = error.error;});
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/predmeti']);
  }

  save(form: NgForm) {
    this.predmetService.save(form).subscribe(result => {
      this.gotoList();
    }, (error) => {console.error(error); this.errorMessage = error.error;});
  }

  remove(href) {
    this.predmetService.delete(href).subscribe(result => {
      this.gotoList();
    }, (error) => {console.error(error); this.errorMessage = error.error;});
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

}
