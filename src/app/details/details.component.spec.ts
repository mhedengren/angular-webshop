import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';


describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  let activatedRoute = new ActivatedRouteStub({id: 1});

  beforeEach(async(() => {
    activatedRoute.setParamMap({id: 1});
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
      providers: [{provide: activatedRoute, useValue: activatedRoute},
                  {provide: DataService, useClass: MockDataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive 1 movie', () => {
    expect(component.movie.name).toBe('The Dark Knight');
  });


});
