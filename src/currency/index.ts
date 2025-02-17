export interface CurrencyFormatterOptions {
  readonly prefix: string
  readonly suffix: string
}

export class CurrencyFormatter {
  private readonly options: CurrencyFormatterOptions
  constructor(options: CurrencyFormatterOptions) {
    this.options = options
  }
}
