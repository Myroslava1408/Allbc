import { IDistrictOffice } from '@/app/shared/components/district-offices/district-offices.component'

// district-offices

export const getDistrictColumns = (districts: IDistrictOffice[]) => ({
  firstColumn: Array.isArray(districts) ? districts.slice(0, 5) : [],
  secondColumn: Array.isArray(districts) ? districts.slice(5, 8) : [],
  thirdColumn: Array.isArray(districts) ? districts.slice(8, 13) : [],
})

// metro-stations

export const getStationArray = (stations: any): any[] => {
  return Array.isArray(stations.stations)
    ? stations.stations
    : Array.isArray(stations.stations.stations)
      ? stations.stations.stations
      : []
}

export const getStationColumns = (stationArray: any[]): Record<string, any[]> => ({
  firstColumn: stationArray.slice(0, 5),
  secondColumn: stationArray.slice(5, 10),
  thirdColumn: stationArray.slice(10, 15),
  fourthColumn: stationArray.slice(15, 20),
  fifthColumn: stationArray.slice(20, 25),
  sixthColumn: stationArray.slice(25, 30),
})

// city-offices

export const getCitiesArray = (cities: any): any[] => {
  return Array.isArray(cities)
    ? cities
    : cities && Array.isArray(cities.cities)
      ? cities.cities
      : []
}

export const getCityColumns = (citiesArray: any[]): Record<string, Record<string, any[]>> => ({
  top: {
    firstColumn: citiesArray.slice(0, 5),
    secondColumn: citiesArray.slice(5, 10),
    thirdColumn: citiesArray.slice(10, 15),
    fourthColumn: citiesArray.slice(15, 20),
    fifthColumn: citiesArray.slice(20, 25),
    sixthColumn: citiesArray.slice(25, 30),
  },
  bottom: {
    seventhColumn: citiesArray.slice(30, 35),
    eighthColumn: citiesArray.slice(35, 36),
  },
})

// office-area

export const getAreasArray = (areas: any): any[] => {
  return Array.isArray(areas) ? areas : areas && Array.isArray(areas.areas) ? areas.areas : []
}
