import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }
  details: any;
  filterDate: any;
  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails() {
    return this.service.getCarDetails().subscribe((data) => {
      this.details = data;
    })
  }

  seeMore(data: any) {
    this.router.navigate(['/car-details', { details: JSON.stringify(data) }])
  }

  search() {
    this.service.getFilteredData(this.filterDate + "T00:00:00.000").subscribe((data) => {
      this.details = data;
    })
  }
}
