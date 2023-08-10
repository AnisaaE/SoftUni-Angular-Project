import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { reducerResolver } from './reducer.resolver';

describe('reducerResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => reducerResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
