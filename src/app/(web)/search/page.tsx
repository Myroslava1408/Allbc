import {searchOffers} from "@/repositories/offers.repository"
import SearchResultsComponent from "@/app/shared/components/search-results/search-results.component";

const SearchPage = async ({ searchParams }) => {
    const settings = {};

    const categoryId = Number(searchParams.categoryId);
    const area = Number(searchParams.area);
    const price = Number(searchParams.price);

    const offers = searchOffers(categoryId, area, price);

    return (
        <div>
            <SearchResultsComponent offers={offers} settings={settings}/>
        </div>
    );
};

export default SearchPage;
