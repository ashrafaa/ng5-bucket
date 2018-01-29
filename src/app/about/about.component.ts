import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // give access to route parameter
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: DataService
  ) { 
    this.route.params.subscribe((res) => console.dir(res));
  }

  ngOnInit() {
    this.data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
