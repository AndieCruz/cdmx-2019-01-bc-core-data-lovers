require('../src/data.js');

describe('DATA', () => {
  it('Debería ser un objeto', () => {
    expect(typeof data).toBe('object');
  });
});

describe('CONSULT', () => {
  it('Debería ser una función', () => {
    expect(typeof window.data.consult).toBe('function');
  });
});

const injuriesPrueba = {
  "Total_Injured_Persons": 2351372,
  "Total_Injured_Persons_Air": 263,
  "Total_Injured_Persons_Bus_Occupants": 14000,
  "Total_Injured_Persons_Commuter_Carrier": 0,
  "Total_Injured_Persons_Employee_Or_Worker": 1680,
  "Total_Injured_Persons_Freight_Vessel": 225,
  "Total_Injured_Persons_Gas_Pipeline": 93,
  "Total_Injured_Persons_General_Aviation": 234,
  "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 0,
  "Total_Injured_Persons_Highway": 2332000,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 195,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 872,
  "Total_Injured_Persons_Industrial_Or_Other": 144,
  "Total_Injured_Persons_Motorcyclists": 92000,
  "Total_Injured_Persons_On_Demand_Air_Taxi": 15,
  "Total_Injured_Persons_Other_Counts": null,
  "Total_Injured_Persons_Other_Incident": 10000,
  "Total_Injured_Persons_Other_Incident_Transit": 5264,
  "Total_Injured_Persons_Other_Incidents": 4345,
  "Total_Injured_Persons_Other_Incidents_Railroads": 7351,
  "Total_Injured_Persons_Passenger_Car_Occupants": 1292000,
  "Total_Injured_Persons_Passenger_Or_Occupant": 17101,
  "Total_Injured_Persons_Passenger_Vessel": 337,
  "Total_Injured_Persons_Pedalcyclists": 50000,
  "Total_Injured_Persons_Pedestrians": 65000,
  "Total_Injured_Persons_Pipeline": 93,
  "Total_Injured_Persons_Rail": 4689,
  "Total_Injured_Persons_Rail_Freight": 4102,
  "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 679,
  "Total_Injured_Persons_Rail_Freight_Other_Incidents": 3009,
  "Total_Injured_Persons_Rail_Freight_Train_Accidents": 51,
  "Total_Injured_Persons_Rail_Freight_Trespassers": 363,
  "Total_Injured_Persons_Rail_Road_Trespassers": 424,
  "Total_Injured_Persons_Railroad": 667,
  "Total_Injured_Persons_Railroad_Alone": 8786,
  "Total_Injured_Persons_Railroad_Train_Accidents": 88,
  "Total_Injured_Persons_Recreational_Boating": 2678,
  "Total_Injured_Persons_Train_Accidents_Rail_Roads": 139,
  "Total_Injured_Persons_Transit_Non_Rail": 16532,
  "Total_Injured_Persons_Transit_Rail": 7513,
  "Total_Injured_Persons_Transit_Total": 24045,
  "Total_Injured_Persons_Trespassers": 61,
  "Total_Injured_Persons_Truck_Occupants_Large": 27000,
  "Total_Injured_Persons_Truck_Occupants_Light": 782000,
  "Total_Injured_Persons_US_Air_Carrier": 14,
  "Total_Injured_Persons_Water": 3384,
  "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 608,
  "Total_Injured_Persons_Water_Vessel_Related": 98,
  "Year": "2014-01-04"
}, {
  "Total_Injured_Persons": 2443175,
  "Total_Injured_Persons_Air": 284,
  "Total_Injured_Persons_Bus_Occupants": null,
  "Total_Injured_Persons_Commuter_Carrier": 4,
  "Total_Injured_Persons_Employee_Or_Worker": 1794,
  "Total_Injured_Persons_Freight_Vessel": 165,
  "Total_Injured_Persons_Gas_Pipeline": 49,
  "Total_Injured_Persons_General_Aviation": 248,
  "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 0,
  "Total_Injured_Persons_Highway": 2424000,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 322,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 1032,
  "Total_Injured_Persons_Industrial_Or_Other": 74,
  "Total_Injured_Persons_Motorcyclists": 88000,
  "Total_Injured_Persons_On_Demand_Air_Taxi": 9,
  "Total_Injured_Persons_Other_Counts": null,
  "Total_Injured_Persons_Other_Incident": 10000,
  "Total_Injured_Persons_Other_Incident_Transit": 3563,
  "Total_Injured_Persons_Other_Incidents": 4282,
  "Total_Injured_Persons_Other_Incidents_Railroads": 7065,
  "Total_Injured_Persons_Passenger_Car_Occupants": 1378000,
  "Total_Injured_Persons_Passenger_Or_Occupant": 18895,
  "Total_Injured_Persons_Passenger_Vessel": 313,
  "Total_Injured_Persons_Pedalcyclists": 45000,
  "Total_Injured_Persons_Pedestrians": 70000,
  "Total_Injured_Persons_Pipeline": 49,
  "Total_Injured_Persons_Rail": 4969,
  "Total_Injured_Persons_Rail_Freight": 4101,
  "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 710,
  "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2783,
  "Total_Injured_Persons_Rail_Freight_Train_Accidents": 263,
  "Total_Injured_Persons_Rail_Freight_Trespassers": 345,
  "Total_Injured_Persons_Rail_Road_Trespassers": 415,
  "Total_Injured_Persons_Railroad": 860,
  "Total_Injured_Persons_Railroad_Alone": 9070,
  "Total_Injured_Persons_Railroad_Train_Accidents": 295,
  "Total_Injured_Persons_Recreational_Boating": 2679,
  "Total_Injured_Persons_Train_Accidents_Rail_Roads": 558,
  "Total_Injured_Persons_Transit_Non_Rail": 16851,
  "Total_Injured_Persons_Transit_Rail": 7401,
  "Total_Injured_Persons_Transit_Total": 24252,
  "Total_Injured_Persons_Trespassers": 70,
  "Total_Injured_Persons_Truck_Occupants_Large": 30000,
  "Total_Injured_Persons_Truck_Occupants_Light": 803000,
  "Total_Injured_Persons_US_Air_Carrier": 23,
  "Total_Injured_Persons_Water": 3231,
  "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 424,
  "Total_Injured_Persons_Water_Vessel_Related": 128,
  "Year": "2015-01-04"
}, {
  "Total_Injured_Persons": null,
  "Total_Injured_Persons_Air": null,
  "Total_Injured_Persons_Bus_Occupants": null,
  "Total_Injured_Persons_Commuter_Carrier": null,
  "Total_Injured_Persons_Employee_Or_Worker": null,
  "Total_Injured_Persons_Freight_Vessel": null,
  "Total_Injured_Persons_Gas_Pipeline": 75,
  "Total_Injured_Persons_General_Aviation": null,
  "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 5,
  "Total_Injured_Persons_Highway": null,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 202,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 797,
  "Total_Injured_Persons_Industrial_Or_Other": null,
  "Total_Injured_Persons_Motorcyclists": null,
  "Total_Injured_Persons_On_Demand_Air_Taxi": null,
  "Total_Injured_Persons_Other_Counts": null,
  "Total_Injured_Persons_Other_Incident": null,
  "Total_Injured_Persons_Other_Incident_Transit": null,
  "Total_Injured_Persons_Other_Incidents": 3909,
  "Total_Injured_Persons_Other_Incidents_Railroads": 6397,
  "Total_Injured_Persons_Passenger_Car_Occupants": null,
  "Total_Injured_Persons_Passenger_Or_Occupant": null,
  "Total_Injured_Persons_Passenger_Vessel": null,
  "Total_Injured_Persons_Pedalcyclists": null,
  "Total_Injured_Persons_Pedestrians": null,
  "Total_Injured_Persons_Pipeline": 80,
  "Total_Injured_Persons_Rail": 4461,
  "Total_Injured_Persons_Rail_Freight": 3505,
  "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 598,
  "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2490,
  "Total_Injured_Persons_Rail_Freight_Train_Accidents": 34,
  "Total_Injured_Persons_Rail_Freight_Trespassers": 383,
  "Total_Injured_Persons_Rail_Road_Trespassers": 483,
  "Total_Injured_Persons_Railroad": 624,
  "Total_Injured_Persons_Railroad_Alone": 7961,
  "Total_Injured_Persons_Railroad_Train_Accidents": 250,
  "Total_Injured_Persons_Recreational_Boating": null,
  "Total_Injured_Persons_Train_Accidents_Rail_Roads": 284,
  "Total_Injured_Persons_Transit_Non_Rail": null,
  "Total_Injured_Persons_Transit_Rail": null,
  "Total_Injured_Persons_Transit_Total": null,
  "Total_Injured_Persons_Trespassers": 100,
  "Total_Injured_Persons_Truck_Occupants_Large": null,
  "Total_Injured_Persons_Truck_Occupants_Light": null,
  "Total_Injured_Persons_US_Air_Carrier": null,
  "Total_Injured_Persons_Water": null,
  "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": null,
  "Total_Injured_Persons_Water_Vessel_Related": null,
  "Year": "2016-01-04"
}

const year2015 = {
  "Total_Injured_Persons": 2443175,
  "Total_Injured_Persons_Air": 284,
  "Total_Injured_Persons_Bus_Occupants": null,
  "Total_Injured_Persons_Commuter_Carrier": 4,
  "Total_Injured_Persons_Employee_Or_Worker": 1794,
  "Total_Injured_Persons_Freight_Vessel": 165,
  "Total_Injured_Persons_Gas_Pipeline": 49,
  "Total_Injured_Persons_General_Aviation": 248,
  "Total_Injured_Persons_Hazardous_Liquid_Pipeline": 0,
  "Total_Injured_Persons_Highway": 2424000,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing": 322,
  "Total_Injured_Persons_Highway_Rail_Grade_Crossing_Railroads": 1032,
  "Total_Injured_Persons_Industrial_Or_Other": 74,
  "Total_Injured_Persons_Motorcyclists": 88000,
  "Total_Injured_Persons_On_Demand_Air_Taxi": 9,
  "Total_Injured_Persons_Other_Counts": null,
  "Total_Injured_Persons_Other_Incident": 10000,
  "Total_Injured_Persons_Other_Incident_Transit": 3563,
  "Total_Injured_Persons_Other_Incidents": 4282,
  "Total_Injured_Persons_Other_Incidents_Railroads": 7065,
  "Total_Injured_Persons_Passenger_Car_Occupants": 1378000,
  "Total_Injured_Persons_Passenger_Or_Occupant": 18895,
  "Total_Injured_Persons_Passenger_Vessel": 313,
  "Total_Injured_Persons_Pedalcyclists": 45000,
  "Total_Injured_Persons_Pedestrians": 70000,
  "Total_Injured_Persons_Pipeline": 49,
  "Total_Injured_Persons_Rail": 4969,
  "Total_Injured_Persons_Rail_Freight": 4101,
  "Total_Injured_Persons_Rail_Freight_Highway_Rail_Grade_Crossing": 710,
  "Total_Injured_Persons_Rail_Freight_Other_Incidents": 2783,
  "Total_Injured_Persons_Rail_Freight_Train_Accidents": 263,
  "Total_Injured_Persons_Rail_Freight_Trespassers": 345,
  "Total_Injured_Persons_Rail_Road_Trespassers": 415,
  "Total_Injured_Persons_Railroad": 860,
  "Total_Injured_Persons_Railroad_Alone": 9070,
  "Total_Injured_Persons_Railroad_Train_Accidents": 295,
  "Total_Injured_Persons_Recreational_Boating": 2679,
  "Total_Injured_Persons_Train_Accidents_Rail_Roads": 558,
  "Total_Injured_Persons_Transit_Non_Rail": 16851,
  "Total_Injured_Persons_Transit_Rail": 7401,
  "Total_Injured_Persons_Transit_Total": 24252,
  "Total_Injured_Persons_Trespassers": 70,
  "Total_Injured_Persons_Truck_Occupants_Large": 30000,
  "Total_Injured_Persons_Truck_Occupants_Light": 803000,
  "Total_Injured_Persons_US_Air_Carrier": 23,
  "Total_Injured_Persons_Water": 3231,
  "Total_Injured_Persons_Water_Not_Related_To_Vessel_Casualties": 424,
  "Total_Injured_Persons_Water_Vessel_Related": 128,
  "Year": "2015-01-04"
}

describe('FIND', () => {
  it('Debería devolver el obj de Año si ingresamos 2015', () => {
    expect(find(injuriesPrueba, '"2015-01-04"')[0]).toEqual(year2015);
  });
});

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
