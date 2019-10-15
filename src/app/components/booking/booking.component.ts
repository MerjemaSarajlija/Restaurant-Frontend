import { Component, OnInit, NgModule } from '@angular/core';
import { NewService } from 'src/app/new.service';
import { MatDialog } from '@angular/material';
import { HostModalComponent } from '../host-modal/host-modal.component'


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
@NgModule({
  declarations: [
    HostModalComponent
  ],
  entryComponents: [
    HostModalComponent
  ]
})


export class BookingComponent implements OnInit {

  events: any;

  constructor(private nService: NewService,
               private dialog: MatDialog) { }

  ngOnInit() {

  }

 
 addHost() {
    this.dialog.open(HostModalComponent, {data: {}}).
    afterClosed().subscribe(data => this.loadOrder());
}

loadOrder(){
  alert('Your order is recived.')
}
}

