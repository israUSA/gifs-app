import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOption{
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent {


  menuOptions : MenuOption[] = [
    { 
      icon: 'fa-solid fa-star',
      label:'Trending',
      sublabel:'Gifs Populares',
      route: '/dashboard/trending'
    },
    { 
      icon: 'fa-solid fa-search',
      label:'Search',
      sublabel:'Busqueda',
      route: '/dashboard/search'
    }
  ]





 }
