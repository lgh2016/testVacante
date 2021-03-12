import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { PagesComponent } from 'src/app/pages/pages.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

  @ViewChild(PagesComponent, { static: false })
  updateComponent?: PagesComponent;

  // constructor( protected toolbarService: SharedService, public router: Router, private settingsService: SettingsService ) { }

  ngOnInit(): void {
  }

  openMenu(){
    // this.toolbarService.toggle();
  }

  logout(){
    // this.settingsService.logout().subscribe();
  }

}
