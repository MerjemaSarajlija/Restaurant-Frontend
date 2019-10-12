import { Component, OnInit, NgModule } from '@angular/core';
import {MatDialog} from '@angular/material';
import {OrderModalComponent} from'src/app/components/order-modal/order-modal.component';
import {ActivatedRoute, Router} from '@angular/router';
import {NewService} from 'src/app/new.service'



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@NgModule({
  declarations: [
    OrderModalComponent     
  ],
  entryComponents: [OrderModalComponent]})




  export class HeaderComponent implements OnInit {


  navbarOpen = false;
  orderModel:any;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
  constructor(private nser: NewService,
              private route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {
  }

  addOrder() {
    console.log("pozvala se fja za add");
     this.dialog.open(OrderModalComponent, {data: {}}).
     afterClosed().subscribe(data => this.loadOrder());
 }

 loadOrder(){
   console.log("loadano");

 }


}
