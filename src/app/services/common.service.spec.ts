import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController  } from "@angular/common/http/testing";

import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientTestingModule]
    });
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('#onGettingAllAlbums should use GET to retrieve data', () => {
  //   service.onGettingAllAlbums().subscribe();
 
  //   const testRequest = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/albums');
 
  //   expect(testRequest.request.method).toEqual('GET');
  // });

  // it('#onGettingAllPhotos should use GET to retrieve data', () => {
  //   service.onGettingAllPhotos().subscribe();
 
  //   const testRequest = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/photos');
 
  //   expect(testRequest.request.method).toEqual('GET');
  // });



});
