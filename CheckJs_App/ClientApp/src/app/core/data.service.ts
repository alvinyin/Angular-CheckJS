import { Injectable } from "@angular/core";

import { Observable } from 'rxjs/observable';
import { clientDataQueue, clientStateList } from "../shared/testClientData";
import { IClientDataInfo, IStateInfo } from "../shared/models";
import { Subject } from "rxjs";


@Injectable()
export class DataService{
    constructor(){

    }

    getClientData(): Observable<IClientDataInfo[]>{
        let subject = new Subject<IClientDataInfo[]>();

        setTimeout(()=> {
            subject.next(clientDataQueue);
            subject.complete();
        }, 3000);

        return subject;
    }

    getStateList(): Observable<IStateInfo[]>{
        let subject = new Subject<IStateInfo[]>();

        setTimeout(() => {
            subject.next(clientStateList);
            subject.complete();
        }, 3000);

        return subject;
    }
}