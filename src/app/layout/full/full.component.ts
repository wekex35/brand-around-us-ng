
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  navItems = nav;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor (private breakpointObserver: BreakpointObserver) { }
  ngOnInit() {
  }
}

var nav = [
  {
    path: 'dashboard',
    title: "Dashboard",
    logo: "dashboard"
  },
  {
    path: 'categories',
    title: "Categories",
    logo: "categories"
  },
  {
    path: 'brands',
    title: "Brands",
    logo: "brands"
  },

  {
    path: 'product',
    title: "Product",
    logo: "product"
  },
];