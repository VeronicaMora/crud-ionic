import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class PetitionsProvider {

  constructor(private http: HttpClient) {
    console.log('Hello PetitionsProvider Provider');
  }
  getHeaders() {
    return new HttpHeaders({
      authorization: localStorage.getItem("token")
    });
  }
  getNotes(){
    return this.http.get('http://localhost:5000/notes', { headers: this.getHeaders() })
  }
  getNote(id_note){
    return this.http.get(`http://localhost:5000/notes/${id_note}`, { headers: this.getHeaders() })
  }
  signup(username, password){
    return this.http.post('http://localhost:5000/auth/signup', { username, password })
  }
  login(username, password){
    return this.http.post('http://localhost:5000/auth/login', { username, password })
  }
  createNote(title, content){
    return this.http.post('http://localhost:5000/notes', { title, content }, { headers: this.getHeaders() })
  }
  updateNote(){
    return this.http.patch('http://localhost:5000/notes', {}, { headers: this.getHeaders() })
  }
  removeNote(id_note){
    return this.http.delete(`http://localhost:5000/notes/${id_note}`, { headers: this.getHeaders() })
  }
}