import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });


  // it('should add 1 movie to the cart', () => {
  //   const service: CartService = TestBed.get(CartService);
  //   expect(service.cart).toBe(1);
  // });


});
