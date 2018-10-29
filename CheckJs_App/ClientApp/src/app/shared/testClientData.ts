import { WeatherForecast } from "../fetch-data/fetch-data.component";
import { IClientDataInfo, IStateInfo } from "./models";

export const weatherStorage: WeatherForecast[] = [
    { type: 'Summer', dateFormatted: 'degree', temperatureC: 27, temperatureF: 80, summary: 'Summer Averge temperature.' },
    { type: 'Fall', dateFormatted: 'degree', temperatureC: 12, temperatureF: 60, summary: 'Fall Averge temperature.' },
    { type: 'Winter', dateFormatted: 'degree', temperatureC: -1, temperatureF: 30, summary: 'Winter Averge temperature.' },
    { type: 'Spring', dateFormatted: 'degree', temperatureC: 15, temperatureF: 70, summary: 'Spring Averge temperature.' },
    { type: 'Holiday Season', dateFormatted: 'degree', temperatureC: 3, temperatureF: 40, summary: 'Holiday Season Averge temperature.' },
    { type: 'Vacational', dateFormatted: 'degree', temperatureC: 35, temperatureF: 100, summary: 'Vacational Averge temperature.' },

]

export const clientDataQueue: IClientDataInfo[] = [
    { custAccount: '00003231314', clientName: 'Tom Cat', ssn: '543687456', beneficiary: 'Joe Cat', faNumber: 'G2J'},
    { custAccount: '00006563663', clientName: 'Austin Cook', ssn: '343445223', beneficiary: 'Rice Cook', faNumber: 'T3S'},
    { custAccount: '00005345535', clientName: 'Tim Coach', ssn: '545234652', beneficiary: 'Lee Coach', faNumber: 'G4H'},
    { custAccount: '00007474645', clientName: 'Puffer Fish', ssn: '765342321', beneficiary: 'Poison Fish', faNumber: 'K1P'},
    { custAccount: '00001546744', clientName: 'Japenese Kobe', ssn: '654352429', beneficiary: 'Shortman Kobe', faNumber: 'G2J'}
]

export const clientStateList: IStateInfo[] = [
    { name: 'Alabama', abbreviation: 'Ala.', postalCode: 'AL' },
    { name: 'Alaska', abbreviation: 'Alaska', postalCode: 'AK' },
    { name: 'Arizona', abbreviation: 'Ariz.', postalCode: 'AZ' },
    { name: 'Arkansas', abbreviation: 'Ark.', postalCode: 'AR' },
    { name: 'California', abbreviation: 'Calif.', postalCode: 'CA' },
    { name: 'Colorado', abbreviation: 'Colo.', postalCode: 'CO' },
    { name: 'Connecticut', abbreviation: 'Conn.', postalCode: 'CT' },
    { name: 'Delaware', abbreviation: 'Del.', postalCode: 'DE' },
    { name: 'Florida', abbreviation: 'Fla.', postalCode: 'FL' },
    { name: 'Georgia', abbreviation: 'Ga.', postalCode: 'GA' },
    { name: 'Hawaii', abbreviation: 'Hawaii', postalCode: 'HI' },
    { name: 'Idaho', abbreviation: 'Idaho', postalCode: 'ID' },
    { name: 'Illinois', abbreviation: 'Ill.', postalCode: 'IL' },
    { name: 'Indiana', abbreviation: 'Ind.', postalCode: 'IN' },
    { name: 'Iowa', abbreviation: 'Iowa', postalCode: 'IA' },
    { name: 'Kansas', abbreviation: 'Kans.', postalCode: 'KS' },
    { name: 'Kentucky', abbreviation: 'Ky.', postalCode: 'KY' },
    { name: 'Louisiana', abbreviation: 'La.', postalCode: 'LA' },
    { name: 'Maine', abbreviation: 'Maine', postalCode: 'ME' },
    { name: 'Maryland', abbreviation: 'Md.', postalCode: 'MD' },
    { name: 'Massachusetts', abbreviation: 'Mass.', postalCode: 'MA' },
    { name: 'Michigan', abbreviation: 'Mich.', postalCode: 'MI' },
    { name: 'Minnesota', abbreviation: 'Minn.', postalCode: 'MN' },
    { name: 'Mississippi', abbreviation: 'Miss.', postalCode: 'MS' },
    { name: 'Missouri', abbreviation: 'Mo.', postalCode: 'MO' },
    { name: 'Montana', abbreviation: 'Mont.', postalCode: 'MT' },
    { name: 'Nebraska', abbreviation: 'Nebr.', postalCode: 'NE' },
    { name: 'Nevada', abbreviation: 'Nev.', postalCode: 'NV' },
    { name: 'New Hampshire', abbreviation: 'N.H.', postalCode: 'NH' },
    { name: 'New Jersey', abbreviation: 'N.J.', postalCode: 'NJ' },
    { name: 'New Mexico', abbreviation: 'N.M.', postalCode: 'NM' },
    { name: 'New York', abbreviation: 'N.Y.', postalCode: 'NY' },
    { name: 'North Carolina', abbreviation: 'N.C.', postalCode: 'NC' },
    { name: 'North Dakota', abbreviation: 'N.D.', postalCode: 'ND' },
    { name: 'Ohio', abbreviation: 'Ohio', postalCode: 'OH' },
    { name: 'Oklahoma', abbreviation: 'Okla.', postalCode: 'OK' },
    { name: 'Oregon', abbreviation: 'Ore.', postalCode: 'OR' },
    { name: 'Pennsylvania', abbreviation: 'Pa.', postalCode: 'PA' },
    { name: 'Rhode Island', abbreviation: 'R.I.', postalCode: 'RI' },
    { name: 'South Carolina', abbreviation: 'S.C.', postalCode: 'SC' },
    { name: 'South Dakota', abbreviation: 'S.D.', postalCode: 'SD' },
    { name: 'Tennessee', abbreviation: 'Tenn.', postalCode: 'TN' },
    { name: 'Texas', abbreviation: 'Tex.', postalCode: 'TX' },
    { name: 'Utah', abbreviation: 'Utah', postalCode: 'UT' },
    { name: 'Vermont', abbreviation: 'Vt.', postalCode: 'VT' },
    { name: 'Virginia', abbreviation: 'Va.', postalCode: 'VA' },
    { name: 'Washington', abbreviation: 'Wash.', postalCode: 'WA' },
    { name: 'West Virginia', abbreviation: 'W.Va.', postalCode: 'WV' },
    { name: 'Wisconsin', abbreviation: 'Wis.', postalCode: 'WI' },
    { name: 'Wyoming', abbreviation: 'Wyo.', postalCode: 'WY' },

]