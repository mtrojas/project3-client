import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

import { ServicesApiService } from '../services/services-api.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})

export class ServicesListComponent implements OnInit {

  services: Array<any>
  user = JSON.parse(localStorage.getItem('user'))

  constructor(
    private servicesApiService: ServicesApiService,
    private router: Router
  ) { }

  ngOnInit() {
    this.servicesApiService.getAllServices()
      .then(services => {
        this.services = services;
      })

      //saco al user del localstorage

      //  if(user.role !== "ADMIN"){
      //    this.router.navigate(['/'])
      //  }
  }

}
