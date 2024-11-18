import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandCollapseComponent } from './expand-collapse.component';

describe('ExpandCollapseComponent', () => {
  let component: ExpandCollapseComponent;
  let fixture: ComponentFixture<ExpandCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandCollapseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
