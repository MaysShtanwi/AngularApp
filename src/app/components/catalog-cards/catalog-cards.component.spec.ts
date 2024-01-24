import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCardsComponent } from './catalog-cards.component';

describe('CatalogCardsComponent', () => {
  let component: CatalogCardsComponent;
  let fixture: ComponentFixture<CatalogCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
