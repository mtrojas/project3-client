import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServicesApiService } from '../services/services-api.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {

  id: any
  service: any = {}

  constructor(
    private servicesApiService: ServicesApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.id = params.id;

        this.servicesApiService.getOneService(this.id)
          .subscribe(service => {
            this.service = service
          })
    })
  }

}
