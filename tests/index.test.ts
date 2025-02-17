import { describe, it } from 'vitest'
import { IntlPlugin } from '../src'

describe(
  'Logger',
  () => {
    it(
      'should be format 100.134121 to BTC',
      async ({
        expect,
      }) => {
        const sut = new IntlPlugin({
          locale: 'en-US',
          timeZone: 'America/New_York',
        })

        const actual = sut.CryptoFormat({
          style: 'currency',
          currency: 'BTC',
          currencyDisplay: 'code',
          minimumFractionDigits: 6,
          maximumFractionDigits: 6,
        }).format(100.134121)
        expect(actual.startsWith('BTC')).toBeTruthy()
      },
    )
    it (
      'should be format 100.134121 to BTC with symbol',
      async ({
        expect,
      }) => {
        const sut = new IntlPlugin({
          locale: 'en-US',
          timeZone: 'America/New_York',
        })

        const actual = sut.CryptoFormat({
          style: 'currency',
          currency: 'BTC',
          currencyDisplay: 'symbol',
          minimumFractionDigits: 6,
          maximumFractionDigits: 6,
        }).format(100.134121)
        expect(actual.startsWith('₿')).toBeTruthy()
      },
    )
  },
)
