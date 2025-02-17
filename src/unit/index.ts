export interface UnitFormatterOptions {
  readonly prefix: string
  readonly suffix: string
}

export class UnitFormatter {
  private readonly options: UnitFormatterOptions
  constructor(options: UnitFormatterOptions) {
    this.options = options
  }
}
