import {loadYamlData} from "@/libs/loadYaml";

export const getCategoriesEstate = () => {
    return  loadYamlData('categories-estate');
};