import { WeatherForecast } from "../fetch-data/fetch-data.component";

export const weatherStorage: WeatherForecast[] = [
    { type: 'Summer', dateFormatted: 'degree', temperatureC: 27, temperatureF: 80, summary: 'Summer Averge temperature.' },
    { type: 'Fall', dateFormatted: 'degree', temperatureC: 12, temperatureF: 60, summary: 'Fall Averge temperature.' },
    { type: 'Winter', dateFormatted: 'degree', temperatureC: -1, temperatureF: 30, summary: 'Winter Averge temperature.' },
    { type: 'Spring', dateFormatted: 'degree', temperatureC: 15, temperatureF: 70, summary: 'Spring Averge temperature.' },
    { type: 'Holiday Season', dateFormatted: 'degree', temperatureC: 3, temperatureF: 40, summary: 'Holiday Season Averge temperature.' },
    { type: 'Vacational', dateFormatted: 'degree', temperatureC: 35, temperatureF: 100, summary: 'Vacational Averge temperature.' },

]