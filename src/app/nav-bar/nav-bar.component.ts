import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigate(['/registerclient'])
    this.router.navigate(['/list'])
    this.router.navigate(['/cadastropeca'])
    this.router.navigate(['/addos'])
    this.router.navigate(['/listos'])
    this.router.navigate(['/registerfunc'])
    this.router.navigate(['/registerserv'])
    this.router.navigate(['/listosneg'])
    this.router.navigate(['/listosfin'])
}

}
