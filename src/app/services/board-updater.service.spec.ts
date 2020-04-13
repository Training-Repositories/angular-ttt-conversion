/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BoardUpdaterService } from './board-updater.service';

describe('Service: BoardUpdater', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardUpdaterService]
    });
  });

  it('should ...', inject([BoardUpdaterService], (service: BoardUpdaterService) => {
    expect(service).toBeTruthy();
  }));
});
