
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  [x: string]: any;
  title = 'chart-table-mocky';
  constructor(private router: Router){}
  ngOnInit(){
 
    
  }
  public onChartClicked(){
    this.router.navigate(["./chart"]);
  }
  public onTableClicked(){
    this.router.navigate(["./table"]);
  }

 
 
}
