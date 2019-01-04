    import { Component,Input, Output,EventEmitter } from "@angular/core";

    @Component({
     selector:'event-thumbnail',
     template:`<div calss="well hoverwell thumbnail">
     <h2>{{eventInput.name}}</h2>
     <div>Date: {{eventInput.date}}</div>
     <div>Price: \£{{eventInput.price}}</div>
     <div>
       <span>Location: {{eventInput.location.address}}</span>
       <span>&nbsp;</span>
       <span>{{eventInput.location.city}},{{eventInput.location.country}}</span>
     </div>
     <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button>
   </div>`
    })

    export class EventTumbnailComponent{
       @Input() eventInput:any
       @Output() eventClick=new EventEmitter()

       handleClickMe(){
           this.eventClick.emit('from thumbnails component');
       }
    }