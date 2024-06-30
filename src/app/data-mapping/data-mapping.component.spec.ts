import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMappingComponent } from './data-mapping.component';

describe('DataMappingComponent', () => {
  let component: DataMappingComponent;
  let fixture: ComponentFixture<DataMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataMappingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
