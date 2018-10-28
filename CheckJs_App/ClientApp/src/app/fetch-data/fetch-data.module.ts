import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import  { BrowserModule } from '@angular/platform-browser'
import { ModalModule } from "ngx-bootstrap";
import { FetchDataComponent } from "./fetch-data.component";
import { ModalContentComponent } from "./modal-content.component";

@NgModule({
    declarations: [
        FetchDataComponent,
        ModalContentComponent
    ],
    imports: [
        BrowserModule,
        ModalModule.forRoot(),
        RouterModule.forChild([
            { 
                path: 'fetch-data', 
                children: [
                   { path: 'get-data', component: FetchDataComponent }
                ]
            }
        ]),
    ],
    providers: []
})
export class FetchDataModule {

}