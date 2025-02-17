export interface DateFormatterOptions {
  readonly prefix: string
  readonly suffix: string
}

export class DateFormatter {
  private readonly options: DateFormatterOptions
  constructor(options: DateFormatterOptions) {
    this.options = options
  }
}

export interface RelativeTimeFormatterOptions {
  readonly prefix: string
  readonly suffix: string
}

export class RelativeTimeFormatter {
  private readonly options: RelativeTimeFormatterOptions
  constructor(options: RelativeTimeFormatterOptions) {
    this.options = options
  }
}
