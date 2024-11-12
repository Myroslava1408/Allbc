import { initializeLanguage } from '@inlang/paraglide-next'

import SearchResultsComponent from '@/app/shared/components/search-results/search-results.component'
import { searchOffers } from '@/repositories/offers.repository'

interface ISearchParams {
  categoryId?: string
  area?: string
  price?: string
  title?: string
}

const SearchPage = async ({ searchParams }: { searchParams: ISearchParams }) => {
  await initializeLanguage()
  const categoryId = Number(searchParams.categoryId)
  const area = Number(searchParams.area)
  const price = Number(searchParams.price)
  const title = searchParams.title

  const offers = searchOffers(categoryId, area, price, title)

  return (
    <div>
      <SearchResultsComponent offers={offers} />
    </div>
  )
}

export default SearchPage
