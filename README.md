# Um plugin para o namespace Intl

este plugin adiciona o CryptoFormat como uma extencao do NumberFormat, porem com suporte a crypto moedas

# Install

```bash
npm i @jvddavid/intl-utils
```

# Use

```typescript
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
expect(actual.startsWith('BTC')).toBeTruthy() // BTC 100.134121
```
