import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncTestComponent } from './async-test.component';

describe('AsyncTestComponent', () => {
  let component: AsyncTestComponent;
  let fixture: ComponentFixture<AsyncTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncTestComponent]
    });
    fixture = TestBed.createComponent(AsyncTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
