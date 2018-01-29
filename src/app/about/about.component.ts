import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // give access to route parameter

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.route.params.subscribe((res) => console.dir(res));
  }

  ngOnInit() {
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
