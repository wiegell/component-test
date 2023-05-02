import { TestBed } from '@angular/core/testing';
import { SecondLibComponent } from './second-lib.component';

describe(SecondLibComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(SecondLibComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(SecondLibComponent,);
  })

})
