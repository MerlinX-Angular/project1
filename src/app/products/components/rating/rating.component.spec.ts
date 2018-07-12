import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should change width if the rating changes', () => {
    component.rating = 3;
    component.ngOnChanges();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('div').style.width).toContain(70.8, 'px');
   });

   it('should display the rating on the stars hover', () => {
    component.rating = 3;
    component.ratingClicked.subscribe(check => this.check = check);
    component.onHover();
    expect(this.check).toBe('3');
   });
});
