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
  user: any;

  service: any = { }

  constructor(
    private servicesApiService: ServicesApiService,
    private router: Router
  ) { }

  handleCreateService() {
    const form = new FormData()
    for(let k in this.service){
      form.append(k, this.service[k])
    }
    console.log(this.service)

    this.servicesApiService.createService(this.service)
    .subscribe(service => {
      this.router.navigate(['services'])
    })
  }


  ngOnInit() {
    this.servicesApiService.getAllServices()
      .then(services => {
        this.services = services;
      })
    this.user =  JSON.parse(localStorage.getItem('user'))
  }

}
