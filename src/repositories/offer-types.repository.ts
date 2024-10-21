import {loadYamlData} from "@/libs/loadYaml";

export const getTypesForSale = () => {
    const types =  loadYamlData('offer-types').types;
    return types.filter(item => item.category === 'sale');
};

export const getTypesForRent = () => {
    const types =  loadYamlData('offer-types').types;
    return types.filter(item => item.category === 'rent');
};

export const getTypesList = () => {
    const typesData = loadYamlData('offer-types').types;

    return typesData.map((type: any) => ({
        id: type.id,
        label: type.title,
        category: type.category
    }));
};
