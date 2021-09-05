
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MockyService } from '../mocky.service';


export interface TableData{
  month : string;
  temperature : number;
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  ELEMENT_DATA!: TableData[];
  displayedColumns: string[] = ["month", "temperature"];
  dataSource = new MatTableDataSource<TableData>(this.ELEMENT_DATA);
  constructor(private data:MockyService) { }

  ngOnInit()  {
    this.getAllData();
  }

public getAllData() {
  let resp = this.data.getJsonData();
  resp.subscribe(report=> this.dataSource.data= report as TableData[]);  
}
}
