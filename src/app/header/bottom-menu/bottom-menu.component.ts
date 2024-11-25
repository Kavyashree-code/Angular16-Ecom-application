import { Component } from '@angular/core';

@Component({
  selector: 'bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent {
  bottomMenuItems:string[] = ['Home','Products','About','Contact','Sale','New Arrival'];
}
