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
  phlst: any;
  subscriptional: Subscription;
  subscriptionph: Subscription;
  constructor(
    private _common: CommonService
    ) 
    {

      this.subscriptional = this._common.getobAl().subscribe(lst => {
        if (lst) {
          this.alblst=lst;

          //console.log( this.alblst);
        } else {
          // clear list when empty list received
          this.alblst = null;
        }
      });
      this.subscriptionph = this._common.getobPh().subscribe(lst2 => {
        if (lst2) {
          this.phlst=lst2;
          this._common.mergedata(this.alblst,this.phlst)
          //console.log( this.phlst);
        } else {
          // clear list when empty list received
          this.phlst = null;
        }
      });

    }

  ngOnInit(): void {
   
  }
  

}
