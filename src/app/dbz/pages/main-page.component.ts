import { Component } from '@angular/core';
import { character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl:"main-page.component.html"

})

export class MainPageComponent {
  public character:character[] = [{
    name:"Krillin",
    power:500
  },
  {
    name:"Goku",
    power:9500
  }

  ];
}
