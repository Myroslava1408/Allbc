import { imagesMap } from '@/libs/imagesMap';
import { loadYamlData } from '@/libs/loadYaml';

type BackgroundKeys = keyof typeof imagesMap;
interface ICategory {
  id: number;
  title: string;
  title_html: string;
  background: BackgroundKeys;
  rentalPrice: string;
  salePrice: string;
}

interface ICategoryEstate {
  category: ICategory;
}

export const getCategoriesEstate = (): ICategoryEstate[] => {
  const data = loadYamlData('categories-estate') as ICategoryEstate[];
  return data;
};
