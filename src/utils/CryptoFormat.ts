import { CryptoCode, cryptos } from '@/constants/currencies'

type NumberInput = number | bigint | Intl.StringNumericLiteral

export interface CryptoFormatOptions extends Intl.NumberFormatOptions {
  currency: CryptoCode
  currencyDisplay: 'code' | 'symbol' | 'narrowSymbol' | 'name'
}

export class CryptoFormatImpl extends Intl.NumberFormat {
  private readonly _currency: CryptoCode
  private readonly _currencyDisplay: 'code' | 'symbol' | 'narrowSymbol' | 'name'

  constructor(locale: string, options?: CryptoFormatOptions) {
    super(locale, {
      style: 'currency',
      ...options,
      currency: 'USD',
      currencyDisplay: 'code',
    })
    this._currency = (options?.currency ?? 'USD') as CryptoCode
    this._currencyDisplay = options?.currencyDisplay ?? 'code'
    if (!cryptos.codes.includes(this._currency)) {
      throw new RangeError(`Unsupported currency code: ${this._currency}`)
    }
  }

  private get currencyString(): string {
    let currency: string = this._currency
    switch (this._currencyDisplay) {
      case 'code':
        break
      case 'symbol':
      case 'narrowSymbol':
        currency = cryptos.symbols[this._currency] ?? currency
        break
      case 'name':
        currency = cryptos.names[this._currency] ?? currency
    }
    return currency
  }

  format(value: NumberInput): string {
    const sp = super.format(value)

    return sp.replace('USD', this.currencyString)
  }

  formatToParts(value: number | bigint): Intl.NumberFormatPart[] {
    const sp = super.formatToParts(value)
    const currencyIndex = sp.findIndex((part) => part.type === 'currency')
    if (currencyIndex !== -1) {
      sp[currencyIndex].value = this.currencyString
    }
    return sp
  }

  formatRange(start: NumberInput, end: NumberInput): string {
    const sp = super.formatRange(start, end)
    return sp.replace('USD', this.currencyString)
  }

  formatRangeToParts(start: NumberInput, end: NumberInput): Intl.NumberRangeFormatPart[] {
    const sp = super.formatRangeToParts(start, end)
    const currencyIndex = sp.findIndex((part) => part.type === 'currency')
    if (currencyIndex !== -1) {
      sp[currencyIndex].value = this.currencyString
    }
    return sp
  }

  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    const options = super.resolvedOptions()
    return {
      ...options,
      currency: this._currency,
      currencyDisplay: this._currencyDisplay,
    }
  }
}
