import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ICart } from '../interfaces/ICart';
import { RouterModule } from '@angular/router';
import { DisplayCartComponent } from './display-cart.component';
import { CartComponent } from '../cart/cart.component';

describe('DisplayCartComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCartComponent, CartComponent, TestHostComponent ],
      imports: [RouterModule.forRoot([])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(testHostComponent).toBeTruthy();
  });

  @Component({
    selector: `host-component`,
    template: `<app-display-cart cartItem="cartItem"></app-display-cart>`
  })

  class TestHostComponent {
    cartItem: ICart[];

    setInput(newInput: ICart[]) {
      this.cartItem = newInput;
    }
  }

});
