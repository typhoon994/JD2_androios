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
import { Comment } from '../models/comment.model'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'http://localhost:54042/api/accommodations';
  private loginUrl = 'http://localhost:54042/oauth/token';
  private roomsUrl = 'http://localhost:54042/api/rooms/'
  private roomReservationsUrl = 'http://localhost:54042/api/roomReservations'
  private placesUrl = 'http://localhost:54042/api/places'
  private managersUrl = 'http://localhost:54042/api/managers'
  private typesUrl = 'http://localhost:54042/api/AccommodationTypes/'
  private usersUrl = 'http://localhost:54042/api/Appusers'
  private regionsUrl = 'http://localhost:54042/api/regions/'
  private commentsUrl = 'http://localhost:54042/api/comments'


  constructor(private http: Http) { }

  wasRoomReseverd(roomId :number, username :string) : Promise<boolean> {
    let head = this.getAuthHeader();
    let url = this.roomReservationsUrl+"?$expand=Room,AppUser&$filter=Room/Id eq "+roomId+"and AppUser/Username eq '"+username + "'";
    return this.http.get(url, { headers : head })
          .toPromise()
          .then(response => {       
              if ((response.json() as RoomReservation[]).length === 0)
                return false;
              
              return true;
            })
          .catch(this.handleError);
  }

 login(login : Login): Promise<User> {
      let body = "username="+login.username+"&password="+login.password+"&grant_type=password";
      let options = new RequestOptions();
      let hd = new Headers();
      hd.append("Content-Type", "application/x-www-form-urlencoded");
      options.headers = hd;
      return this.http.post(this.loginUrl,
          body, 
          options)
          .toPromise()
          .then(data => {
             localStorage.setItem("token", data.json().access_token);
             localStorage.setItem("role", data.headers.get("role"));
             localStorage.setItem("username", login.username);
             return this.getUser(login.username, data.json().access_token)    
          })
          .catch(this.handleError);
  }

 getUser(username : string, token: String): Promise<User> {
    let head = this.getAuthHeader();
    return this.http.get(this.usersUrl+"?$filter=Username eq '"+username + "'", { headers : head })
      .toPromise()
      .then(response => {
          localStorage.setItem("email", response.json()[0].Email);
          localStorage.setItem("user", JSON.stringify(response.json()[0]));
          return response.json() as User;})
      .catch(this.handleError);
  }
  

  getAccommondations(): Promise<Accommondation[]> {
    let head = this.getAuthHeader();
    return this.http.get(this.apiUrl+"?$expand=owner,place/region/country", {headers : head})
      .toPromise()
      .then(response => {
          return response.json() as Accommondation[]; })
      .catch(this.handleError);
  }

  getRooms(): Promise<Room[]> { 
    let head = this.getAuthHeader();
    return this.http.get(this.roomsUrl+"?$expand=accomodation/owner,accomodation/place/region/country",
     { headers : head })
      .toPromise()
      .then(response => {
          return response.json() as Room[]; })
      .catch(this.handleError);
  }

  getManagers(): Promise<User[]> { 
    let head = this.getAuthHeader();
    return this.http.get(this.managersUrl, { headers : head })
      .toPromise()
      .then(response => {
          return response.json() as User[]; })
      .catch(this.handleError);
  }

  getUsers(): Promise<User[]> { 
    let head = this.getAuthHeader();
    return this.http.get(this.usersUrl, {headers:head})
      .toPromise()
      .then(response => {
          return response.json() as User[]; })
      .catch(this.handleError);
  }

  getReservations(): Promise<RoomReservation[]> { 
    let head = this.getAuthHeader();
    return this.http.get(this.roomReservationsUrl+"?$expand=Room/accomodation/owner,Room/accomodation/place/region/country",
    { headers : head})
      .toPromise()
      .then(response => {
          return response.json() as RoomReservation[]; })
      .catch(this.handleError);
  }

  getPlaces(): Promise<Place[]> { 
    let head = this.getAuthHeader();
    return this.http.get(this.placesUrl+"?$expand=region/country", {headers : head})
      .toPromise()
      .then(response => {
          return response.json() as Place[]; })
      .catch(this.handleError);
  }

  getTypes(): Promise<AccomodationType[]> { 
    let head = this.getAuthHeader();
    return this.http.get(this.typesUrl, {headers:head})
      .toPromise()
      .then(response => {
          return response.json() as AccomodationType[]; })
      .catch(this.handleError);
  }


  postAccomodation(accomodation: Accommondation): Promise<Accommondation> {
    let head = this.getAuthHeader();
    return this.http
      .post(this.apiUrl, JSON.stringify(accomodation), { headers: head })
      .toPromise()
      .then(res => res.json() as Accommondation)
      .catch(this.handleError);
  }

 postRoom(room: Room): Promise<Room> {
   let head = this.getAuthHeader();
    return this.http
      .post(this.roomsUrl, JSON.stringify(room), { headers: head })
      .toPromise()
      .then(res => res.json() as Room)
      .catch(this.handleError);
    
  }

  putAccomodation(accomodation: Accommondation): Promise<Accommondation> {
    let head = this.getAuthHeader();
    let url = `${this.apiUrl}/${accomodation.Id}`;
    return this.http
      .put(url, JSON.stringify(accomodation), { headers: head })
      .toPromise()
      .then(res => { 
        return res.json() as Accommondation;})
      .catch(this.handleError);
  }

  putUser(user: User): Promise<User> {
    let head = this.getAuthHeader();
    let url = `${this.usersUrl}/${user.Id}`;
    return this.http
      .put(url, JSON.stringify(user), { headers: head })
      .toPromise()
      .then(res => { 
        return res.json() as User;})
      .catch(this.handleError);
  }

  reserveRoom(room: RoomReservation): Promise<RoomReservation> {
    let head = this.getAuthHeader();
    let url = `${this.roomReservationsUrl}`;
    return this.http
      .post(url, JSON.stringify(room), { headers: head })
      .toPromise()
      .then(res => { 
        return res.json() as RoomReservation;})
      .catch(this.handleError);
  }

 createComment(comment : Comment) {
    let head = this.getAuthHeader();
    return this.http
      .post(this.commentsUrl, JSON.stringify(comment), { headers: head })
      .toPromise()
      .then(res => { 
        return res.json() as Comment;})
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  private getAuthHeader() : Headers {
    let head = new Headers({'Content-Type': 'application/json'});
    head.append("Authorization","Bearer " + localStorage.getItem("token"));
    return head;
  }
}