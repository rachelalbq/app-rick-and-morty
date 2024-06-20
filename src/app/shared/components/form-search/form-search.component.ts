import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-search.component.html',
  styleUrl: './form-search.component.scss'
})
export class FormSearchComponent {
  search: string = '';

  @Output() searchInput = new EventEmitter<string>();

  onSearch(): void {
    this.searchInput.emit(this.search);
  }
}
