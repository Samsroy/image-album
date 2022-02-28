import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  alblst: any;
  
  subscriptional: Subscription;
 
  constructor(private _common: CommonService) 
    {

      this.subscriptional = this._common.getobAl().subscribe(lst => {
        if (lst) {
          this.alblst=lst;
        } else {
          this.alblst = null;
        }
      });
      

    }

  ngOnInit(): void {
   
  }
  

}
