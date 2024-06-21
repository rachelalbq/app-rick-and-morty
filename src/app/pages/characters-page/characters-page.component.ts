import { Component, HostListener, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { catchError, finalize, of, tap } from 'rxjs';
import { FormSearchComponent } from '../../shared/components/form-search/form-search.component';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';
import { Character } from '../../shared/interfaces/characters';

@Component({
  selector: 'app-characters-page',
  standalone: true,
  imports: [FormSearchComponent, RouterLink, CommonModule, NgxLoadingModule],
  templateUrl: './characters-page.component.html',
  styleUrl: './characters-page.component.scss'
})

export class CharactersPageComponent implements OnInit {
  characters: Character[] = [];
  page: number = 1;
  loading: boolean = false;
  search: string = '';

  constructor(private characterService: CharacterService, private router: Router) { }

  ngOnInit(): void {
    this.getCharactersList();
  }

  getCharactersList(): void {
    if (this.loading) return;
    this.loading = true;
    this.characterService.getCharacters(this.page, this.search).pipe(
      tap(data => {
        if (this.page === 1) {
          this.characters = data.results;
        } else {
          this.characters = [...this.characters, ...data.results];
        }
      }),
      catchError(error => {
        return of([]);
      }),
      finalize(() => {
        this.loading = false;
      })
    ).subscribe();
  }

  onSearch(term: string): void {
    if (term.length >= 3 || term.length === 0) {
      this.search = term;
      this.page = 1;
      this.characters = [];
      this.getCharactersList();
    }
  }


  redirectToDetails(characterId: number) {
    this.router.navigate(['/characters', characterId]);
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !this.loading) {
      this.page++;
      this.getCharactersList();
    }
  }

}
