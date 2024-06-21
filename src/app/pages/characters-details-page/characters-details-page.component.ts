import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { CommonModule } from '@angular/common';
import { NgxLoadingModule } from 'ngx-loading';
import { Character } from '../../shared/interfaces/characters';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-characters-details-page',
  standalone: true,
  imports: [RouterLink, CommonModule, NgxLoadingModule],
  templateUrl: './characters-details-page.component.html',
  styleUrl: './characters-details-page.component.scss'
})
export class CharactersDetailsPageComponent {
  loading: boolean = false;
  character!: Character;


  constructor(private route: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.loading = true;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.characterService.getCharacterById(id).pipe(
        catchError(err => {
          this.loading = false;
          return of(null);
        })
      ).subscribe(data => {
        if (data) {
          this.character = data;
        }
        this.loading = false;
      });
    });
  }
}
