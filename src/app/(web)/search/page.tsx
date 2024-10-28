import { ReactNode } from 'react';

import SearchResultsComponent from '@/app/shared/components/search-results/search-results.component';
import { searchOffers } from '@/repositories/offers.repository';

interface ISearchParams {
  categoryId?: string;
  area?: string;
  price?: string;
}

const SearchPage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  const settings: ReactNode = null;

  const categoryId = Number(searchParams.categoryId);
  const area = Number(searchParams.area);
  const price = Number(searchParams.price);

  const offers = searchOffers(categoryId, area, price);

  return (
    <div>
      <SearchResultsComponent offers={offers} settings={settings} />
    </div>
  );
};

export default SearchPage;
