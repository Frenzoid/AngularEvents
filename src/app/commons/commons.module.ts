import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { GeolocationService } from './services/geolocation.service';
import { TicketPaidService } from './services/ticketPaid.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  providers: [
    AuthService,
    GeolocationService,
    TicketPaidService
  ],
  declarations: []
})
export class CommonsModule { }
