import { Locale } from './constants/locales'
import { TimeZone } from './constants/timeZones'
import { CryptoFormatImpl, CryptoFormatOptions } from './utils/CryptoFormat'

export interface IntlOptions {
  locale: Locale
  timeZone: TimeZone
}

export class IntlPlugin {
  private readonly options: IntlOptions

  constructor(options: IntlOptions) {
    this.options = options
  }

  NumberFormat(options?: Intl.NumberFormatOptions): Intl.NumberFormat {
    return new Intl.NumberFormat(this.options.locale, options)
  }

  CryptoFormat(options?: CryptoFormatOptions): Intl.NumberFormat {
    return new CryptoFormatImpl(this.options.locale, options)
  }

  DateTimeFormat(options?: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
    return new Intl.DateTimeFormat(this.options.locale, {
      timeZone: this.options.timeZone,
      ...options,
    })
  }

  RelativeTimeFormat(options?: Intl.RelativeTimeFormatOptions): Intl.RelativeTimeFormat {
    return new Intl.RelativeTimeFormat(this.options.locale, {
      numeric: 'auto',
      ...options,
    })
  }
}
