import {loadYamlData} from "@/libs/loadYaml";

export const getDistrictsForSale = () => {
    const types =  loadYamlData('district-offices').districts;
    return types.filter(item => item.category === 'sale');
};

export const getDistrictsForRent = () => {
    const types =  loadYamlData('district-offices').districts;
    return types.filter(item => item.category === 'rent');
};
