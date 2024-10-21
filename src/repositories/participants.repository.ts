import {loadYamlData} from "@/libs/loadYaml";

export const getBuilders = () => {
    const data = loadYamlData('participants');
    const builders = data?.participants.builders || [];
    return builders.filter(item => item.category === 'builder');
};
export const getBrokers = () => {
    const data = loadYamlData('participants');
    const brokers = data?.participants.brokers || [];
    return brokers.filter(item => item.category === 'broker');

};

export const getOwners = () => {
    const data = loadYamlData('participants');
    const owners = data?.participants.owners || [];
    return  owners.filter(item => item.category === 'owner');
};
