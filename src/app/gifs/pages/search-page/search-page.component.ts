import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  imports: [],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent { }
