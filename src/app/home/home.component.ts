import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  emps:any;
  constructor(private service:DataService)
  {

  }

  ngOnInit() 
  {
    this.service.Select().subscribe((result)=>{
      if(result['status']==='success')
      {
        this.emps=result['data'];
      }
      else
      {
        console.log("error: "+result['error']);
      }
    });

  }

}
