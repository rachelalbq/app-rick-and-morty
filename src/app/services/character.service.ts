import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, CharacterResponse } from '../shared/interfaces/characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient : HttpClient) {}

  getCharacters(page: number, search: string = '') {
    const url = `${this.apiUrl}?page=${page}&name=${search}`;
    return this.httpClient.get<CharacterResponse>(url);
  }

  getCharacterById(id: number): Observable<any> {
    return this.httpClient.get<Character>(`${this.apiUrl}/${id}`);
  }
}