import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  albums:any;
  photos:any;
  mergelst:any;
 
  constructor(
    private _router: Router,
    private _common: CommonService    
    ) {      
    


     }

  ngOnInit(): void {
  
    this.albums=this.getAllAlbums(); 
    this.photos=this.getAllPhotos(); 
  }  
  getAllAlbums(){
    this._common.onGettingAllAlbums().subscribe(res => {      
      this._common.currentAlbumSubject.next(res);           
      
    });
  }
  getAllPhotos(){
    this._common.onGettingAllPhotos().subscribe(res => {      
      this._common.currentPhotoSubject.next(res);           
      
    });
  }

 
}
