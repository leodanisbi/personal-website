import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  animations: [fadeInAnimation]
})
export class Navbar {

}
