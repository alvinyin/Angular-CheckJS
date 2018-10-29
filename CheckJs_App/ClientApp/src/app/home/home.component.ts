import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../core/data.service';
import { IClientDataInfo, IStateInfo } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  queue: IClientDataInfo[] = [];
  stateList: IStateInfo[] = [];

  constructor(private dataService: DataService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.queue = this.route.snapshot.data['data'];

    this.dataService.getStateList().subscribe((x: IStateInfo[]) => {
      this.stateList = x;
    })
  }
}
