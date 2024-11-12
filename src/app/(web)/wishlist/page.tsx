import { initializeLanguage } from '@inlang/paraglide-next'

import React from 'react'

import WishlistComponent from '@/app/shared/components/wishlist/wishlist.component'

const Page: () => Promise<JSX.Element> = async () => {
  await initializeLanguage()

  return (
    <>
      <WishlistComponent />
    </>
  )
}

export default Page
