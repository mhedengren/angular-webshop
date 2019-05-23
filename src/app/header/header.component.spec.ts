import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { CartService } from '../services/cart.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [CartService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // it('should add 1 to the counter in the header', async(inject([CartService], (cartservice: CartService) => {
  //   expect(component.totalItemCount).toBe(0);

  //   cartservice.addMovie({id: 3, name: 'Avengers Endgame', description: 'abcd', price: 199,
  //   imageUrl: 'https://i.imgur.com/DpCHP0h.jpg',
  //   year: 2008, added: '2016-01-05T00:00:00',
  //   productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]})
    
  //   expect(component.totalItemCount).toBe(1);
    
  // })));

});
