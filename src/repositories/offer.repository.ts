import {loadYamlData} from "@/libs/loadYaml";

export const getOffers = () => {
    return  loadYamlData('offers');
};