import { Component, OnInit, Inject, Optional } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {NewService} from 'src/app/new.service';
import {Host} from 'src/app/Models/host'

@Component({
  selector: 'app-host-modal',
  templateUrl: './host-modal.component.html',
  styleUrls: ['./host-modal.component.css']
})
export class HostModalComponent implements OnInit {

  hostModel:Host;
  hostForm: FormGroup;
  events:any;

  constructor(private router: Router,
    private nService : NewService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data,
    @Optional() public dialogRef: MatDialogRef<HostModalComponent>) {
      this.hostModel = this.data && this.data.hostModel ? this.data.hostModel : new Host();

     }

  ngOnInit() {
    this.getAllEvents();
    this.createHostForm();
  }

  createHostForm() { 

    this.hostForm = new FormGroup({
    'name':  new FormControl(null, [Validators.required]),
    'event': new FormControl(null, [Validators.required]),
    'date': new FormControl(null ),
    });
 }
 getAllEvents() {
  this.nService.getAllEvents().subscribe(
    accdata => {
      this.events = accdata;
    },
    err => console.log(err)
  );
}
saveOrder(){
  this.hostModel.name = this.hostForm.value.name;
  this.hostModel.event = this.hostForm.value.event;
  this.hostModel.date = this.hostForm.value.date;
  this.nService.saveBooking(this.hostModel).subscribe(res =>
    this.data=res );
    this.router.navigate(['/booking'], {skipLocationChange: true});
  }

}
