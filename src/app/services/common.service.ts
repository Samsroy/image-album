import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, combineLatest,throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private baseUrl = environment.BASE_URL;

  public currentAlbumSubject = new BehaviorSubject(null);
  public currentAlbum: Observable<any> = this.currentAlbumSubject.asObservable();

  public currentPhotoSubject = new BehaviorSubject(null);
  public currentPhoto: Observable<any> = this.currentPhotoSubject.asObservable();
  
  public currentMargedSubject = new BehaviorSubject(null);
  public currentMarged: Observable<any> = this.currentMargedSubject.asObservable();



  constructor(private http: HttpClient) { }



  public publicHeader() {
    let httpOptionsSecure = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return httpOptionsSecure;
  }

  //************** Get All Albums ************/ 
  getobAl(): Observable<any> {
    return this.currentAlbum;
    }
    getobPh(): Observable<any> {
      return this.currentPhoto;
      }

      getobML(): Observable<any> {
        return this.currentMarged;
        }
  onGettingAllAlbums() {
    return this.http.get<any>(this.baseUrl + 'albums', this.publicHeader())
      .pipe(map((d) => {
        //You can perform some transformation here
        return d;
      }), catchError((err) => {
        return throwError(() => err);
      }))
  }
  onGettingAllPhotos() {
    return this.http.get<any>(this.baseUrl + 'photos', this.publicHeader())
      .pipe(map((d) => {
        //You can perform some transformation here
        return d;
      }), catchError((err) => {
        return throwError(() => err);
      }))
  }

  mergedata(allist:any,phlist:any) {
    if(allist.length>0)
    {
      if(phlist.length>0)
    {
      allist.forEach(function (item:any) {
        item.listofphotos =  phlist.filter(function(obj:any) {
          return obj.albumId == item.id;
        });         
      }); 
      console.log(allist);
      this.currentMargedSubject.next(allist);    
    }

    }
    
  }


  

}
