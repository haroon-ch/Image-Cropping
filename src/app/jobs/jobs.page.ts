import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.page.html',
  styleUrls: ['./jobs.page.scss'],
})
export class JobsPage implements OnInit {

  tab:any ='New Jobs';

  constructor(public route:Router) { }

  ngOnInit() {
  }

  see_details(){
    this.route.navigate(['customer']);
  }

}
