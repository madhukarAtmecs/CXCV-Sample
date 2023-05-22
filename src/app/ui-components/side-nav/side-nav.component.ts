import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  // side navbar visibility
  toggleNavBar = false;

  // options in side nav-bar
  menus = [
    {
      option: 'Home',
      link: 'commonUrl'
    },
    {
      option: 'About',
      link: 'commonUrl'
    },
    {
      option: 'Services',
      link: 'commonUrl'
    },
    {
      option: 'Contact',
      link: 'commonUrl'
    }
  ]

  // This function is to open side nave bar
  openNav = () => this.toggleNavBar = true;

  // This function is to close side nave bar
  closeNav = () => this.toggleNavBar = false;
}
