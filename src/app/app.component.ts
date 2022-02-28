import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-album';
  alllist:any;
  constructor(private _common: CommonService ) { }
  ngOnInit(): void { 
    if(localStorage.getItem('mergedData')){
      this.alllist=localStorage.getItem('mergedData');
      this._common.currentMargedSubject.next(JSON.parse(this.alllist));
    } else {
      this._common.getAllAlbums();
    }
      
  }  
}
