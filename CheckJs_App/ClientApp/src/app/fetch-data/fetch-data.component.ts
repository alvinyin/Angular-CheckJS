import { Component, OnInit } from '@angular/core';
import { weatherStorage } from '../shared/testClientData';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { ModalContentComponent } from './modal-content.component';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  weatherList: WeatherForecast[] = [];
  bsModalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.weatherList = [];
  }

  ngOnInit(): void {
    this.weatherList = weatherStorage;

    console.log(`the length is ${this.weatherList.length}`);
  }

  openModal(type: string, tempC: number, tempF: number, summary: string){
    let message = `${type}, ${tempC}, ${tempF}, summary is ${summary}`;
    const initialState = {
      title: type,
      temperatureC: tempC,
      temperatureF: tempF,
      description: summary,
    };

    this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState});
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}

export interface WeatherForecast {
  type: string;
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}


