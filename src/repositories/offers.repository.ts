import { loadYamlData } from "@/libs/loadYaml";

export const getOffersForSale = (limit: number): Record<string, unknown>[] => {
    const offers = loadYamlData('offers').offers as Record<string, unknown>[];
    return Array.from({ length: limit }, () => ({ ...offers[0] }));
};

export const getOffersForRent = (limit: number): Record<string, unknown>[] => {
    const offers = loadYamlData('offers').offers as Record<string, unknown>[];
    return Array.from({ length: limit }, () => ({ ...offers[0] }));
};

export const searchOffers = (categoryId: number, area: number, price: number): Record<string, unknown>[] => {
    const offers = loadYamlData('offers').offers as Record<string, unknown>[] || [];

    return offers.filter((offer) => {
        const matchesCategory = categoryId ? (offer.category_id === categoryId) : true;
        const matchesArea = area && (offer.prices && offer.prices[0]) ? Object.keys(offer.prices[0]).includes(String(area)) : true;
        const matchesPrice = price && (offer.prices && offer.prices[0]) ? Object.values(offer.prices[0]).some(val => Number(val) <= price) : true;

        return matchesCategory && matchesArea && matchesPrice;
    });
};

export const getAreasList = (): { id: string; label: string }[] => {
    const offers = loadYamlData('offers').offers as Record<string, unknown>[] || [];
    const areas = new Set<string>();

    offers.forEach((offer) => {
        if (offer.prices && offer.prices.length > 0 && offer.prices[0]) {
            Object.keys(offer.prices[0]).forEach(area => {
                areas.add(String(area));
            });
        }
    });

    const sortedAreas = Array.from(areas).sort();

    return sortedAreas.map((area) => ({
        id: area,
        label: area,
    }));
};

export const getPricesList = (): { id: string; label: string }[] => {
    const offers = loadYamlData('offers').offers as Record<string, unknown>[] || [];
    const prices = new Set<string>();

    offers.forEach((offer) => {
        if (offer.prices && offer.prices[0]) {
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

export const getCategoriesListWithOffers = (selectedCategory?: string): Record<string, unknown>[] => {
    const categoriesTypes = loadYamlData('offer-types')?.types as Record<string, unknown>[] || [];
    const offers = loadYamlData('offers')?.offers as Record<string, unknown>[] || [];

    const categoriesWithOffers: Record<string, unknown>[] = [];
    const addedCategories = new Set<string>();

    offers.forEach((offer) => {
        const matchedCategory = categoriesTypes.find((categoryObj) => categoryObj.id === offer.category_id);

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
};
