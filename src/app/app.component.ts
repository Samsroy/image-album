import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-album';
  constructor(private _common: CommonService ) { }
  ngOnInit(): void {  
    this._common.getAllAlbums();  
  }  
}
