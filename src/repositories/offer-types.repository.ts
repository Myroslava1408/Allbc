import { loadYamlData } from '@/libs/loadYaml';

interface ICategory {
  id: number;
  title: string;
  category: string;
}

interface IOption {
  id: string | null;
  label: string;
}

interface IOfferType {
  id: string;
  title: string;
  category: string;
}

interface IOfferTypesData {
  types: IOfferType[];
}

export const getTypesForSale = () => {
  const types = (loadYamlData('offer-types') as { types: ICategory[] }).types;
  return types.filter((item) => item.category === 'sale');
};

export const getTypesForRent = () => {
  const types = (loadYamlData('offer-types') as { types: ICategory[] }).types;
  return types.filter((item) => item.category === 'rent');
};

export const getTypesList = (): IOption[] => {
  const typesData = loadYamlData('offer-types') as IOfferTypesData;

  return typesData.types.map((type: IOfferType) => ({
    id: type.id,
    label: type.title,
  }));
};
