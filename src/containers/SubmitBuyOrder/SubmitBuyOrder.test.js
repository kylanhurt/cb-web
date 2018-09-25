import React from 'react'
import renderer from 'react-test-renderer'
import { SubmitBuyOrderComponent } from './SubmitBuyOrder'

it('SubmitBuyOrder component initally renders accurately', () => {
  const fakeTokenDirectory = [
    {
      address: '0xE41d2489571d322189246DaFA5ebDe1F4699F498',
      symbol: 'ZRX',
      decimal: 18,
      type: 'default'
    },{
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      symbol: 'WETH',
      decimal: 18,
      type: 'default'
    }
  ]
  const tree = renderer  
    .create(
      <SubmitBuyOrderComponent
        account={null}
        tokenDirectory={fakeTokenDirectory}
        inputCurrencyCode={'WETH'}
        outputCurrencyCode={'ZRX'}
        inputCurrencyFiatRate={300}
        outputCurrencyFiatRate={0.7}
        isoFiatCurrencyCode={'iso:USD'}
        isOrderFormProcessing={false}
        orderFormFeedback={''}
        orderFormProcessingButtonTitle={'Submit'}
        submitOrder={() => {}}
        fetchTokenList={() => {}}
        fetchExchangeRates={() => {}}
        updateInputCurrencyCode={() => {}}
        updateOutputCurrencyCode={() => {}}   
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
});