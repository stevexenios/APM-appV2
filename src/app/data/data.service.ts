// These pages may become irrelevant if the other server methods I found work better as they do they attempt
// to do the same thing

import { async } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { Entry } from './entry';
import { DataResponse } from './data-response';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // This value sets the location of the server, and as such will be changed as we develop the server more
  // tslint:disable-next-line: no-inferrable-types
  DATA_SERVER_ADDRESS: string = 'http://localhost:3000';
  dataSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage ) { }

  addEntry(entry: Entry) {
    return this.httpClient.post<DataResponse>(`${this.DATA_SERVER_ADDRESS}/entry`, entry).pipe(
      tap(async (res: DataResponse ) => {

        if (res.entry) {
          // tslint:disable-next-line: quotemark
          await this.storage.set("ACCESS_TOKEN", res.entry.access_token);
          // tslint:disable-next-line: quotemark
          await this.storage.set("EXPIRES_IN", res.entry.expires_in);
          this.dataSubject.next(true);
        }
      }));
    }
}
