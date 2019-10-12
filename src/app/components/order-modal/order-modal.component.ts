import { Component, OnInit, Optional, Inject } from '@angular/core';
import {NewService} from 'src/app/new.service';
import {OrderModel} from 'src/app/Models/order-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  orderModel: OrderModel;
  orderFoodForm:FormGroup;
  food:any;

  constructor(private nService : NewService,
            @Optional() @Inject(MAT_DIALOG_DATA) public data,
            @Optional() public dialogRef: MatDialogRef<OrderModalComponent>) {
              
            this.orderModel = this.data && this.data.orderModel ? this.data.orderModel : new OrderModel();

 }
  
  ngOnInit() {
    this.createOrderFoodForm();
    this.getAllFood();
  }


  createOrderFoodForm() { 

    this.orderFoodForm = new FormGroup({
    'food':  new FormControl(this.orderModel.food , [Validators.required]),
    'customerName': new FormControl(this.orderModel.customerName, [Validators.required]),
    'address': new FormControl(this.orderModel.address , [Validators.required]),
    });
 }

 getAllFood(){
  this.nService.getAllfod().subscribe(
    accdata => {
      this.food = accdata;
      console.log(this.food);
     },
    err => console.log(err)
  );
  }

}
