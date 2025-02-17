export interface CryptoFormatterOptions {
  readonly prefix: string
  readonly suffix: string
}

export class CryptoFormatter {
  private readonly options: CryptoFormatterOptions
  constructor(options: CryptoFormatterOptions) {
    this.options = options
  }
}
