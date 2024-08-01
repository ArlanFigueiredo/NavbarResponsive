import { Component, ViewChild } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button-contato',
  standalone: true,
  imports: [SidebarModule, ButtonModule],
  templateUrl: './button-contato.component.html',
  styleUrl: './button-contato.component.scss'
})
export class ButtonContatoComponent {

  sidebarVisible: boolean = false;


}
