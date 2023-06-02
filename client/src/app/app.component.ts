import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHandler, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  //constructor(private http: HttpClient) {}
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response;
    }, error => {
      console.log(error);
    })
  }

}
