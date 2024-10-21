import {loadYamlData} from "@/libs/loadYaml";

export const getAboutUsOptions = () => {
    const data = loadYamlData('options');
    const aboutUs = data?.options.aboutUs || [];
    return aboutUs.filter(item => item.category === 'aboutUs');
};

export const getPrivacyPolicyOptions = () => {
    const data = loadYamlData('options');
    const privacy = data?.options.privacyPolicy || [];
    return privacy.filter(item => item.category === 'privacy');

};

export const getForOwnersOptions = () => {
    const data = loadYamlData('options');
    const forOwners = data?.options.forOwners || [];
    return  forOwners.filter(item => item.category === 'forOwners');
};

export const getBusinessCentersOptions = () => {
    const data = loadYamlData('options');
    const businessCenters = data?.options.businessCenters || [];
    return  businessCenters.filter(item => item.category === 'centers');
};
