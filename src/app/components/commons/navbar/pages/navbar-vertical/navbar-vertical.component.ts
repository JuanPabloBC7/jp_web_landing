import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItemComponent } from './menu-item/menu-item.component';

@Component({
  selector: 'app-navbar-vertical',
  standalone: true,
  imports: [
    CommonModule,
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

  menu: any = [
    { 
      "path": "", 
      "label": "Inicio", 
      "type": "link", 
      "icon": "fa-solid fa-house", 
      "expanded": false, 
      "divider": true, 
      "dividername": "Landing Page", 
    }, 
    { 
      "path": "", 
      "label": "Proyectos", 
      "type": "link", 
      "icon": "fa-solid fa-house", 
      "expanded": false, 
      "divider": true, 
      "dividername": "Projects", 
    }, 
    { 
      "path": "dashboard", 
      "label": "Dashboard", 
      "type": "link", 
      "newLabel": "new",
      "newStyle": "text-bg-success",
      "icon": "fas fa-chart-pie" 
    }, 
    { 
      "path": "sale", 
      "label": "Ventas", 
      "type": "sub", 
      "icon": "fas fa-file-invoice-dollar", 
      "expanded": false, 
      "children": [
        { 
          "path": "sales/form", 
          "label": "Ventas", 
          "type": "link", 
        }, 
        { 
          "path": "sales/report", 
          "label": "Reportes", 
          "type": "link", 
        }
      ] 
    }, 
    { 
      "path": "product", 
      "label": "Productos", 
      "type": "sub", 
      "icon": "fab fa-product-hunt", 
      "expanded": false, 
      "children": [
        { 
          "path": "products/forms", 
          "label": "Productos", 
          "type": "link", 
        }, 
        { 
          "path": "products/report", 
          "label": "Reportes", 
          "type": "link", 
        }
      ] 
    }, 
    { 
      "path": "clients", 
      "label": "Clientes", 
      "type": "sub", 
      "icon": "fas fa-users", 
      "expanded": false, 
      "children": [
        { 
          "path": "clients/form", 
          "label": "Clientes", 
          "type": "link", 
        }, 
        { 
          "path": "clients/report", 
          "label": "Reportes", 
          "type": "link", 
        }
      ] 
    }, 
    { 
      "path": "settings", 
      "label": "Ajustes", 
      "type": "sub", 
      "icon": "fas fa-cog", 
      "expanded": false, 
      "divider": true, 
      "dividername": "Configuración", 
      "children": [
        { 
          "path": "settings/catalogs", 
          "label": "Catalogos", 
          "type": "link", 
        }, 
        { 
          "path": "settings/customize", 
          "label": "Personalizar", 
          "type": "link", 
        }
      ] 
    }, 
    { 
      "path": "logout", 
      "label": "Cerrar sesión", 
      "type": "link", 
      "icon": "fas fa-power-off", 
      "event": 1, 
      "events": { "click": "logout" } 
    }
  ];

}
