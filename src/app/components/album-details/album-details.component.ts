import { Component, OnInit,HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  albumId:any;
  subscription: Subscription;
  allData:any;
  photoes:any;
  start:any=0;
  end:any=9;
  photoesArr:any=[];
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private _common: CommonService) {

      this.subscription = this._common.getobML().subscribe(lst => {
        if (lst) {
          this.allData=lst;

          console.log( this.allData);
        } else {
          // clear list when empty list received
          this.allData = null;
        }
      });
     }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');
    console.log(this.albumId);
    this.getPhotoes();

  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.start=this.start+10;
      this.end=this.end+10;
      this.loadPhotoes();
    }
  }
  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
  getPhotoes(){
    this.photoes =  this.allData.filter((obj:any) => {
      return obj.id == this.albumId;
    }); 
      console.log(this.photoes);
      this.loadPhotoes();
     } 
     
     
  loadPhotoes(){
    let parr=this.photoes[0].listofphotos.slice( this.start, this.end)
    for (var i = 0, len = parr.length; i < len; ++i) {
      this.photoesArr.push(parr[i]);
     }
  }
  
  
}
