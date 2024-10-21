import {loadYamlData} from "@/libs/loadYaml";

export const getAreas = () => {
    return  loadYamlData('areas');
};

export const getCities = () => {
    return  loadYamlData('cities');
};

export const getStations = () => {
    return  loadYamlData('stations');
};