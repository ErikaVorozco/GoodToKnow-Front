import { Component } from '@angular/core';
import { AdminEventFormComponent } from '../../layout/main/admin-event-form/admin-event-form.component';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../../services/events.service';
import { CalendarComponent } from '../../layout/main/calendar/calendar.component';

@Component({
  selector: 'app-admin-principal-calendar',
  standalone: true,
  templateUrl: './admin-principal-calendar.component.html',
  styleUrl: './admin-principal-calendar.component.css',
  imports: [AdminEventFormComponent, CommonModule, CalendarComponent],
  providers: [EventsService],
})
export class AdminPrincipalCalendarComponent {}
