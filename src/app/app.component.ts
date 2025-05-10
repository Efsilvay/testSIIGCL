import { Component, HostListener, OnInit, signal } from '@angular/core';
import { ToolbarComponent } from "./shared/toolbar/toolbar.component";
import { MainComponent } from './shared/main/main.component';


@Component({
  selector: 'app-root',
  imports: [ToolbarComponent, MainComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  tmpWindow = typeof window !== 'undefined' ? window.innerWidth : 0;
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(this.tmpWindow);
  title = 'SIIGCL';

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(this.tmpWindow);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}
