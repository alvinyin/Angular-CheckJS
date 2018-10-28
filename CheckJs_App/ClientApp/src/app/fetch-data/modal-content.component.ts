import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap";

@Component({
    selector: 'modal-content',
    template: `
        <div class="modal-header">
            <h4 class="modal-title pull-left">{{title}}</h4>
            <button type="button" class="close pull-right" arial-label="close" (click)="bsModalRef.hid()">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <div> {{title}} </div>

            <div> {{temperatureC}} </div>
            <div> {{temperatureF}} </div>
            <div> {{description}} </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-default" (click)="bsModalRef.hide()">
                {{closeBtnName}}
            </button>
        </div>
    `
})
export class ModalContentComponent implements OnInit{
    title: string;    
    temperatureC: string;
    temperatureF: string;
    description: string;
  
    closeBtnName: string; 
  
    constructor(public bsModalRef: BsModalRef){}
  
    ngOnInit(): void {
  
    }
  }