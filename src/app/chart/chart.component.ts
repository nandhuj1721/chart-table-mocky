import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';
import { MockyService } from '../mocky.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent implements OnInit {
  chart =[];
  

  constructor(private data:MockyService) { }

  ngOnInit():void {
    this.data.getJsonData().subscribe((res: any[])=>{
      let labels = res.map((x:{month:string;})=>x.month);
      let values = res.map((x:{temperature:number;})=> x.temperature);

      var ctx = document.getElementById('barChart') as HTMLCanvasElement;
      var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            { 
              label: 'Average Temperature',
              data: values,
              backgroundColor: [ "#B10DC9","#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#7FDBFF", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
              borderColor: [ "#7FDBFF","#0074D9", "#FF4136", "#2ECC40", "#FF851B", "#B10DC9", "#FFDC00", "#001f3f", "#39CCCC", "#01FF70", "#85144b", "#F012BE", "#3D9970", "#111111", "#AAAAAA"],
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }, 
          animation: {
            
            duration: 1000
          }
        }
      });
      
      })

  }

}
