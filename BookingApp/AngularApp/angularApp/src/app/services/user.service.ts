import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Accommondation } from '../models/accommondation.model'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:54042/api/accommodations/';

  constructor(private http: Http) { }

  getAccommondations(): Promise<Accommondation[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => response.json().data as Accommondation[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}