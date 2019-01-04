import { Component } from "@angular/core"

@Component(
    {
        selector: 'events-list',
        template: `<div>
        <h1> 
          Upcoming angular events
        </h1>
        <hr/>
        <event-thumbnail (eventClick)="handleEventClick($event)" [eventInput]="eventList"  ></event-thumbnail>
     </div>`
    })
export class EventsListComponent {
    eventList = {
        id: 1,
        name: 'Angular Connect',
        date: '04/12/2018',
        price: 10.0,
        imageUrl: '',
        location: {
            address: '100',
            city: 'ST',
            country: 'UK'
        }
    }

    handleEventClick(data)
    {
        console.log('Event reveied',data);
    }
}