import { TestBed } from '@angular/core/testing';
import { FirstlibComponent } from './firstlib.component';

describe(FirstlibComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(FirstlibComponent, {
      add: { 
        imports: [],
        providers: []
      }
    }) 
  })

  it('renders', () => {
     cy.mount(FirstlibComponent,);
  })

})
