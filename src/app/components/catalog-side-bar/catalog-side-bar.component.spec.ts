import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSideBarComponent } from './catalog-side-bar.component';

describe('CatalogSideBarComponent', () => {
  let component: CatalogSideBarComponent;
  let fixture: ComponentFixture<CatalogSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogSideBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatalogSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
