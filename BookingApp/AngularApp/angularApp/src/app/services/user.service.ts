import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Accommondation } from '../models/accommondation.model'
import { AccomodationType } from '../models/accomodationtype.model'
import { Room } from '../models/room.model'
import { RoomReservation } from '../models/roomReservation.model'
import { Place } from '../models/place.model'
import { User } from '../models/User.model'
import { Region } from '../models/region.model'
import { Login } from '../models/login.model'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:54042/api/accommodations';
  private loginUrl = 'http://localhost:54042/oauth/token';
  private roomsUrl = 'http://localhost:54042/api/rooms/'
  private roomReservationsUrl = 'http://localhost:54042/api/roomReservations/'
  private placesUrl = 'http://localhost:54042/api/places'
  private managersUrl = 'http://localhost:54042/api/managers'
  private typesUrl = 'http://localhost:54042/api/AccommodationTypes/'
  private usersUrl = 'http://localhost:54042/api/Appusers/'
  private regionsUrl = 'http://localhost:54042/api/regions/'

  constructor(private http: Http) { }

 login(login : Login): Promise<User> {
      var body = "username="+login.username+"&password="+login.password+"&grant_type=password";
      var options = new RequestOptions();
      let hd = new Headers();
      hd.append("Content-Type", "application/x-www-form-urlencoded");
      options.headers = hd;

      return this.http.post(this.loginUrl,
          body, 
          options)
          .toPromise()
          .then(data => {
            debugger
             localStorage.setItem("token", data.json().access_token);
             localStorage.setItem("role", data.headers.get("role"));
             localStorage.setItem("username", login.username);
             return this.getUser(login.username, data.json().access_token)    
          })
          .catch(this.handleError);
  }

 getUser(username : string, token: String): Promise<User> {
    return this.http.get(this.usersUrl+"?$filter=username eq "+username)
      .toPromise()
      .then(response => {
        debugger
          localStorage.setItem("email", response.json()[0].Email);
          return response.json() as User;})
      .catch(this.handleError);
  }

  getAccommondations(): Promise<Accommondation[]> {
    return this.http.get(this.apiUrl+"?$expand=owner,place/region/country")
      .toPromise()
      .then(response => {
          return response.json() as Accommondation[]; })
      .catch(this.handleError);
  }

  getRooms(): Promise<Room[]> { 
    return this.http.get(this.roomsUrl+"?$expand=accomodation/owner,accomodation/place/region/country")
      .toPromise()
      .then(response => {
          return response.json() as Room[]; })
      .catch(this.handleError);
  }

     getManagers(): Promise<User[]> { 
    return this.http.get(this.managersUrl)
      .toPromise()
      .then(response => {
        
          let managers:Array<User>;

            
          debugger
          return response.json() as User[]; })
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
    return this.http.get(this.placesUrl+"?$expand=region/country")
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

 postRoom(room: Room): Promise<Room> {

       const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.roomsUrl, JSON.stringify(room), { headers: headers })
      .toPromise()
      .then(res => res.json() as Room)
      .catch(this.handleError);
    
  }

  putAccomodation(accomodation: Accommondation): Promise<Accommondation> {
       const headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${this.apiUrl}/${accomodation.Id}`;
    return this.http
      .put(url, JSON.stringify(accomodation), { headers: headers })
      .toPromise()
      .then(res => { debugger 
        return res.json() as Accommondation;})
      .catch(this.handleError);
    
  }

 
  reserveRoom(room: RoomReservation): Promise<RoomReservation> {
       const headers = new Headers({
      'Content-Type': 'application/json'
    });
    let url = `${this.roomReservationsUrl}`;
    return this.http
      .post(url, JSON.stringify(room), { headers: headers })
      .toPromise()
      .then(res => { debugger 
        return res.json() as RoomReservation;})
      .catch(this.handleError);
    
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}