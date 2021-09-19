import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  data = JSON.parse(this.route.snapshot.paramMap.get('details')||'');
  ngOnInit(): void {
  }

}
