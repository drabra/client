import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikoveOceneListComponent } from './ucenikove-ocene-list.component';

describe('UcenikoveOceneListComponent', () => {
  let component: UcenikoveOceneListComponent;
  let fixture: ComponentFixture<UcenikoveOceneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikoveOceneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikoveOceneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
