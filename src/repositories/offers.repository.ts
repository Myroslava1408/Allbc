import { loadYamlData } from "@/libs/loadYaml";

export const getOffersForSale = (limit: number) => {
    const offers =  loadYamlData('offers').offers;
    return Array.from({ length: limit }, () => ({ ...offers[0] }));
};

export const getOffersForRent = (limit: number) => {
    const offers =  loadYamlData('offers').offers;
    return Array.from({ length: limit }, () => ({ ...offers[0] }));
};

export const searchOffers = (categoryId: number, area: number, price: number) => {
    const offers = loadYamlData('offers').offers || [];

    return offers.filter((offer: any) => {
        const matchesCategory = categoryId ? (offer.category_id === categoryId) : true;
        const matchesArea = area && offer.prices[0] ? Object.keys(offer.prices[0]).includes(String(area)) : true;
        const matchesPrice = price && offer.prices[0] ? Object.values(offer.prices[0]).some(val => Number(val) <= price) : true;

        return matchesCategory && matchesArea && matchesPrice;
    });
};

export const getAreasList = () => {
    const offers = loadYamlData('offers').offers || [];
    const areas = new Set<string>();

    offers.forEach((offer: any) => {
        if (offer.prices && offer.prices.length > 0 && offer.prices[0]) {
            Object.keys(offer.prices[0]).forEach(area => {
                areas.add(String(area));
            });
        }
    });

    const sortedAreas = Array.from(areas).sort((a, b) => a - b);

    return sortedAreas.map((area, index) => ({
        id: area,
        label: area,
    }));
};


export const getPricesList = () => {
    const offers = loadYamlData('offers').offers || [];
    const prices = new Set<string>();

    offers.forEach((offer: any) => {
        if (offer.prices[0]) {
            Object.values(offer.prices[0]).forEach(price => {
                prices.add(String(price));
            });
        }
    });

    const sortedPrices = Array.from(prices).sort();

    return sortedPrices.map((price) => ({
        id: price,
        label: price,
    }));
};
export const getCategoriesListWithOffers = (selectedCategory?: string) => {
    const categoriesTypes = loadYamlData('offer-types')?.types || [];
    const offers = loadYamlData('offers')?.offers || [];

    const categoriesWithOffers: Array<any> = [];
    const addedCategories = new Set();

    offers.forEach((offer: any) => {
        const matchedCategory = categoriesTypes.find((categoryObj: any) => categoryObj.id === offer.category_id);

        if (matchedCategory && matchedCategory.title) {

            if (!selectedCategory || matchedCategory.title === selectedCategory) {
                categoriesWithOffers.push({
                    ...offer,
                    category_title: matchedCategory.title
                });

                if (!addedCategories.has(matchedCategory.title)) {
                    addedCategories.add(matchedCategory.title);
                }
            }
        }
    });

    return categoriesWithOffers;
}
