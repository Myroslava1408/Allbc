import {loadYamlData} from "@/libs/loadYaml";

export const getAdditionalServices = () => {
    return  loadYamlData('additional-services');
};
