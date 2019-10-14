import { Component, OnInit, Optional, Inject } from '@angular/core';
import {NewService} from 'src/app/new.service';
import {OrderModel} from 'src/app/Models/order-model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';




@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  orderModel: OrderModel;
  orderFoodForm:FormGroup;
  food:any;

  constructor(
           private router: Router,
            private nService : NewService,
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
    'food':  new FormControl(null, [Validators.required]),
    'customerName': new FormControl(null, [Validators.required]),
    'address': new FormControl(null , [Validators.required]),
    });
 }

 getAllFood(){
  this.nService.getAllfod().subscribe(
    accdata => {
      this.food = accdata;
         },
    err => console.log(err)
  );
  }

  
 saveOrder(){
  this.orderModel.food = this.orderFoodForm.value.food;
  this.orderModel.customerName = this.orderFoodForm.value.customerName;
  this.orderModel.address = this.orderFoodForm.value.address;
  this.nService.saveOrder(this.orderModel).subscribe(res =>
    this.data=res );
    this.router.navigate([''], {skipLocationChange: true});
  }
}
