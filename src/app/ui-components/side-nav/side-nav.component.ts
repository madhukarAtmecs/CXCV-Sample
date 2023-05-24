import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  // side navbar visibility
  sidebar: boolean = false;
  toggleNavBar: boolean;

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
      option: 'Sign out',
      link: '/login'
    }
  ]

  constructor() {
    this.toggleNavBar = !(window.innerWidth < 600);
  }

  @HostListener('window:resize', ['$event'])
  onResize = (event: any) => {
    // Adjust the breakpoint as per your requirement
    this.toggleNavBar = !(event.target.innerWidth < 600); 
  }

  // This function is to open side nav bar
  openNav = () => {
    this.toggleNavBar = true;
    this.sidebar = true;
  }

  // This function is to close side nav bar
  closeNav = () => {
    this.toggleNavBar = false;
    this.sidebar = false;
  }
}
