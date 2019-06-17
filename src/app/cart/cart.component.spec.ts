import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CartComponent } from "./cart.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MockDataService } from "../services/mock-data.service";
import { HttpClientModule } from "@angular/common/http";
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../services/data.service';

describe("CartComponent", () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterTestingModule]
    })
      .overrideComponent(CartComponent, {
        set: {
          providers: [{ provide: DataService, useClass: MockDataService }]
        }
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should confirm that total price matches amount and price in items", () => {
    component.items = [];
    let service = new MockDataService();
    service.getData().subscribe(movies => {
      component.items.push({ movie: movies[0], amount: 5 });

      let price = movies[0].price * 5;

      component.getTotalPrice();
      expect(component.totalPrice).toBe(price);
    });
  });

  it("should confirm that an order is posted", () => {
    component.items = [];
    let service = new MockDataService();
    service.getData().subscribe(movies => {
      component.items.push({ movie: movies[0], amount: 5 });
      component.orderComplete();
      expect(component.items.length).toBe(0);
    });
  });
});
