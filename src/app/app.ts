import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isSidebarVisible = false;
  screenWidth = window.innerWidth;

  onHamburgerClick(event: MouseEvent) {
    event.stopPropagation();
    this.toggleSidebar();
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  closeSidebar() {
    if (this.isMobileView()) {
      this.isSidebarVisible = false;
    }
  }

  closeSidebarIfMobile(): void {
     if (this.isMobileView()){
      this.isSidebarVisible = false;
     }
  }

  isMobileView(): boolean {
    return window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    if (!this.isMobileView()) {
      this.isSidebarVisible = true;
    }
  }

  constructor() {
    this.isSidebarVisible = !this.isMobileView();
  }
}
