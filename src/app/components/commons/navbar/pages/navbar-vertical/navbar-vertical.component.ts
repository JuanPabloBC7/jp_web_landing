import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-navbar-vertical',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MenuItemComponent
  ],
  templateUrl: './navbar-vertical.component.html',
  styleUrl: './navbar-vertical.component.scss'
})
export class NavbarVerticalComponent {
  /**
   * path: Is a url link.                             [string]        required
   * label: Is a string name about menu.              [string]        required
   * type: If is link or sub menu.                    ['link', 'sub'] required
   * icon: Icon of option                             [string]        required
   * divider: If have divider text.                   [true, false]   optional
   * dividername: Divider text.                       [string]        optional
   * expanded: Indicate if menu is expanded at start. [true, false]   optional
   * children: child paths.                           [object]        optional
   * event: If have an event.                         [true, false]   optional
   * events: Events of elemnt.                        [object]        optional
   */

  // menu: any = [
  //   { 
  //     "path": "", 
  //     "label": "HTML", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //     "divider": true, 
  //     "dividername": "Frontend", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "Angular", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "React", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "ASP.NET", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "JavaScript", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //     "divider": true, 
  //     "dividername": "Backend", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "TypeScript", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "Python", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "PHP", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "Java", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "C#", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "Visual Basic", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "SQL Server", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //     "divider": true, 
  //     "dividername": "DataBase", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "MySQL", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "Oracle", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "MongoDB", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "MariaDB", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "PostgreSQL", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
  //   { 
  //     "path": "", 
  //     "label": "Firebase", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   }, 
    



  //   { 
  //     "path": "", 
  //     "label": "Simple example", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //   },
  //   { 
  //     "path": "", 
  //     "label": "Example with divider", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //     "divider": true, 
  //     "dividername": "Divider title", 
  //   },
  //   { 
  //     "path": "", 
  //     "label": "Example with new tag", 
  //     "type": "link", 
  //     "newLabel": "new",
  //     "newStyle": "text-bg-success",
  //     "icon": "fa-solid fa-house" 
  //   },
  //   { 
  //     "path": "", 
  //     "label": "Example with multi level", 
  //     "type": "sub", 
  //     "icon": "fa-solid fa-house", 
  //     "expanded": false, 
  //     "children": [
  //       { 
  //         "path": "lvl/lvl1", 
  //         "label": "Level 1", 
  //         "type": "link", 
  //       }, 
  //       { 
  //         "path": "lvl/lvl2", 
  //         "label": "Level 2", 
  //         "type": "sub", 
  //         "expanded": false, 
  //         "children": [
  //           { 
  //             "path": "lvl2/lvl21", 
  //             "label": "Level 3", 
  //             "type": "link", 
  //           }, 
  //           { 
  //             "path": "lvl2/lvl22", 
  //             "label": "Level 4", 
  //             "type": "sub", 
  //             "expanded": false, 
  //             "children": [
  //               { 
  //                 "path": "lvl3/lvl31", 
  //                 "label": "Level 5", 
  //                 "type": "link", 
  //               }, 
  //               { 
  //                 "path": "lvl3/lvl32", 
  //                 "label": "Level 6", 
  //                 "type": "link", 
  //               }
  //             ] 
  //           }
  //         ] 
  //       }
  //     ] 
  //   },
  //   { 
  //     "path": "", 
  //     "label": "Example with event", 
  //     "type": "link", 
  //     "icon": "fa-solid fa-house", 
  //     "event": 1, 
  //     "events": { "click": "logout" } // view menu-item.component.ts
  //   },
  // ];
  menu: any = [];

  constructor(
    private translateServices: TranslateService,
  ) { 
    this.translateServices.stream('menu').subscribe(res => {
      this.menu = [];
      this.menu = res;
    });
  }
}
