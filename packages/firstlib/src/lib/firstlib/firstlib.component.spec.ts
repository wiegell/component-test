import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstlibComponent } from './firstlib.component';

describe('FirstlibComponent', () => {
  let component: FirstlibComponent;
  let fixture: ComponentFixture<FirstlibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstlibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstlibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
