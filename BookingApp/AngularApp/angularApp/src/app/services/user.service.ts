import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Accommondation } from '../models/accommondation.model'
import { AccomodationType } from '../models/accomodationtype.model'
import { Room } from '../models/room.model'
import { Place } from '../models/place.model'
import { User } from '../models/User.model'
import { Region } from '../models/region.model'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:54042/api/accommodations/';
  private roomsUrl = 'http://localhost:54042/api/rooms/'
  private placesUrl = 'http://localhost:54042/api/places?$expand=region'
  private typesUrl = 'http://localhost:54042/api/AccommodationTypes/'
  private usersUrl = 'http://localhost:54042/api/Appusers/'
  private regionsUrl = 'http://localhost:54042/api/regions/'

  constructor(private http: Http) { }

  getAccommondations(): Promise<Accommondation[]> {
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(response => {
          return response.json() as Accommondation[]; })
      .catch(this.handleError);
  }

  getRooms(): Promise<Room[]> { 
    return this.http.get(this.roomsUrl)
      .toPromise()
      .then(response => {
          return response.json() as Room[]; })
      .catch(this.handleError);
  }

    getUsers(): Promise<User[]> { 
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => {
          return response.json() as User[]; })
      .catch(this.handleError);
  }

  getPlaces(): Promise<Place[]> { 
    return this.http.get(this.placesUrl)
      .toPromise()
      .then(response => {
          return response.json() as Place[]; })
      .catch(this.handleError);
  }

    getTypes(): Promise<AccomodationType[]> { 
    return this.http.get(this.typesUrl)
      .toPromise()
      .then(response => {
          return response.json() as AccomodationType[]; })
      .catch(this.handleError);
  }


  postAccomodation(accomodation: Accommondation): Promise<Accommondation> {

       const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.apiUrl, JSON.stringify(accomodation), { headers: headers })
      .toPromise()
      .then(res => res.json() as Accommondation)
      .catch(this.handleError);
    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}