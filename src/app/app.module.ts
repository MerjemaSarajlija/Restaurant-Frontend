import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { BookingComponent } from './components/booking/booking.component';
import {HttpClientModule} from '@angular/common/http';
import { NewService } from './new.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from  '@angular/material';
import { OrderModalComponent } from './components/order-modal/order-modal.component';
import { HostModalComponent } from './components/host-modal/host-modal.component';
import { FooterComponent } from './components/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    BookingComponent,
    OrderModalComponent,
    HostModalComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgSelectModule,
  ],
  entryComponents:[OrderModalComponent, HostModalComponent],

  providers: [NewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
