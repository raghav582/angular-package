import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RgvJpathPickerComponent } from './rgv-jpath-picker.component';

describe('RgvJpathPickerComponent', () => {
  let component: RgvJpathPickerComponent;
  let fixture: ComponentFixture<RgvJpathPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RgvJpathPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RgvJpathPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
