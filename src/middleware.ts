import type { NextRequest } from 'next/server'

import { middleware as paraglide } from '@/libs/localization/i18n'

export function middleware(request: NextRequest) {
  return paraglide(request)
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
