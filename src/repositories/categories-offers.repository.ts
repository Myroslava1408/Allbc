import {loadYamlData} from "@/libs/loadYaml";

export const getCategoriesOffersForSale = () => {
    const categories =  loadYamlData('categories-offers').categories;
    return categories.filter(item => item.category === 'sale');
};

export const getCategoriesOffersForRent = () => {
    const categories =  loadYamlData('categories-offers').categories;
    return categories.filter(item => item.category === 'rent');
};
