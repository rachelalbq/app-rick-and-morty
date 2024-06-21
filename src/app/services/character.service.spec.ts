import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CharacterService]
    });
    service = TestBed.inject(CharacterService);
  });
  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
