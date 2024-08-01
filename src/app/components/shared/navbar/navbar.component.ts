import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonContatoComponent } from '../button-contato/button-contato.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ImageModule, ButtonContatoComponent, NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navMobileIsActive: boolean = true
  bgNavMobileIsActive: boolean = false
  effectFadeOutActive: boolean = false

  activeNavMobile(){
    this.navMobileIsActive = false
    this.bgNavMobileIsActive = true
    console.log(this.bgNavMobileIsActive)
  }

  activeEffectFadeOut(mlSeconds: number){
    this.effectFadeOutActive = true
    setTimeout(() => {
      this.bgNavMobileIsActive = false
      this.effectFadeOutActive = false
      this.navMobileIsActive = true
    },mlSeconds)
  }

}
