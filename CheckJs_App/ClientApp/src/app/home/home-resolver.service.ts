import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { IClientDataInfo } from "../shared/models";
import { Observable } from "rxjs";
import { DataService } from "../core/data.service";


@Injectable()
export class HomeResolver implements Resolve<Observable<IClientDataInfo[]>> {
    constructor(private dataService: DataService){}

    resolve(activatedRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.dataService.getClientData();        
    }
}