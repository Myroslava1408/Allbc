import { Middleware, Navigation, PrefixStrategy } from '@inlang/paraglide-next'

export const strategy = PrefixStrategy<string>({
  prefixDefault: 'never',
})

export const middleware = Middleware({ strategy })
export const { Link, useRouter, usePathname } = Navigation({
  strategy,
})
