import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharactersDetailsPageComponent } from './characters-details-page.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { CharacterService } from '../../services/character.service';

describe('CharactersDetailsPageComponent', () => {
  let component: CharactersDetailsPageComponent;
  let fixture: ComponentFixture<CharactersDetailsPageComponent>;
  let characterService: CharacterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 1 }),
            snapshot: { params: { id: 1 } },
            paramMap: of(convertToParamMap({ id: 1 }))
          }
        },
        {
          provide: CharacterService,
          useValue: {
            getCharacterById: jasmine.createSpy('getCharacterById').and.returnValue(of({
              id: 1,
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              gender: 'Male',
              origin: { name: 'Earth (C-137)', url: '' },
              location: { name: 'Citadel of Ricks', url: '' },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [],
              url: 'https://rickandmortyapi.com/api/character/1',
              created: '2017-11-04T18:48:46.250Z'
            }))
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});