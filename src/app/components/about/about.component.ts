import { Component, OnInit } from '@angular/core';
import {NewService} from 'src/app/new.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  emp:any;

  constructor(private nService: NewService) { }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees(){
    this.nService.getAllEmp().subscribe(
      accdata => {
        this.emp = accdata;
        console.log(accdata);
           },
      err => console.log(err)
    );
    }

}
