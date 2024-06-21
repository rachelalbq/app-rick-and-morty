import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CharactersPageComponent } from './characters-page.component';
import { CharacterService } from '../../services/character.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { CharacterResponse } from '../../shared/interfaces/characters';

describe('CharactersPageComponent', () => {
  let component: CharactersPageComponent;
  let fixture: ComponentFixture<CharactersPageComponent>;
  let characterService: CharacterService;
  const charactersMock: CharacterResponse = {
    info: {
      count: 826,
      pages: 42,
      next: 'https://rickandmortyapi.com/api/character?page=2',
      prev: null
    },
    results: [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1'
        },
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
        ],
        url: 'https://rickandmortyapi.com/api/character/1',
        created: '2017-11-04T18:48:46.250Z'
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Male',
        origin: {
          name: 'unknown',
          url: ''
        },
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3'
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/1',
        ],
        url: 'https://rickandmortyapi.com/api/character/2',
        created: '2017-11-04T18:50:21.651Z'
      },
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        {
          provide: CharacterService,
          useValue: {
            getCharacters: jasmine.createSpy('getCharacters').and.returnValue(of(charactersMock))
          }
        }
      ]
    });

    fixture = TestBed.createComponent(CharactersPageComponent);
    component = fixture.componentInstance;
    characterService = TestBed.inject(CharacterService);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch characters list on ngOnInit', fakeAsync(() => {

    component.ngOnInit();
    fixture.detectChanges();

    expect(component.characters).toEqual(charactersMock.results);
  }));

  it('should update characters list on search', () => {

    component.onSearch('search term');
    fixture.detectChanges();

    expect(component.characters).toEqual(charactersMock.results);
  });
});