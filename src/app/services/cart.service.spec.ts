import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });


  it('should add 1 movie to the cart', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service.getCart().length).toBe(0);
    service.addMovie({id: 3, name: 'Avengers Endgame', description: 'abcd', price: 199,
    imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
    year: 2008, added: '2016-01-05T00:00:00',
    productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]});
    expect(service.getCart().length).toBe(1);
    });


});
