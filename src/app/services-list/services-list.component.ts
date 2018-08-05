import { Component, OnInit } from '@angular/core';
//import {Router} from '@angular/router'

import { ServicesApiService } from '../services/services-api.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})

export class ServicesListComponent implements OnInit {

  services: Array<any>
  user: any;

  constructor(
    private servicesApiService: ServicesApiService,
    //private router: Router
  ) { }

  ngOnInit() {
    this.servicesApiService.getAllServices()
      .then(services => {
        this.services = services;
      })
    this.user =  JSON.parse(localStorage.getItem('user'))
  }

}
