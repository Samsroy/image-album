import { Component, OnInit,HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

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
  end:any=19;
  photoesArr:any=[];
  perpage:any=20;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public dialog: MatDialog,
    private _common: CommonService) {
      this.subscription = this._common.getobML().subscribe(lst => {
        if (lst) {
          this.allData=lst;
          this.getPhotoes();
        } else {
          // clear list when empty list received
          this.allData = null;
        }
      });
     }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.paramMap.get('id');
    
    if(this.allData!=null){ 
    this.getPhotoes();
  }
  
    
 

  }
  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.start=this.start+this.perpage;
      this.end=this.end+this.perpage;
      this.loadPhotoes();
    }
  }
  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }
  getPhotoes(){
  if(this.allData!=null){
    this.photoes =  this.allData.filter((obj:any) => {
      return obj.id == this.albumId;
    }); 
  
      console.log(this.photoes);
      this.loadPhotoes();}
  } 
     
     
  loadPhotoes(){
    if(this.photoes.length>0){
      let parr=this.photoes[0].listofphotos.slice( this.start, this.end)
      console.log(parr);
      for (var i = 0, len = parr.length; i < len; ++i) {
        this.photoesArr.push(parr[i]);
       }
    }
    
  }

  openDialog(title:any): void {
    const dialogRef = this.dialog.open(ReactiveFormComponent, {
      width: '300px',
      data: {name: title},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  
  
}
