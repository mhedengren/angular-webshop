import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ICartItem } from '../interfaces/ICartItem';
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
    cartItem: ICartItem[];

    setInput(newInput: ICartItem[]) {
      this.cartItem = newInput;
    }
  }

});
