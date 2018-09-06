import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";
import { NgOnChangesFeature } from "@angular/core/src/render3";



@Component ({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class starComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
   @Output() ratingClicked: EventEmitter<string>=
   new EventEmitter<string>();
    onClick():void{
        this.ratingClicked.emit('The rating is ' + this.rating + ' was clicked!');
    }
    ngOnChanges(): void{
        this.starWidth = this.rating *75/5;
    }
}