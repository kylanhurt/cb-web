import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import { fetchTokenList } from '../../redux/actions/tokenActions.js'
import {Col, Container, Row, Card, CardBody} from 'reactstrap';

const data = [
  {key: 'key1', value: 'value1'},
  {key: 'key2', value: 'value2'}
]

class Homepage extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      tokenToSell: '',
      tokenToBuy: ''
    }
  }
  handleSubmit = () => {
    console.log('handling submit');
  }

  onChangeSellToken = (event) => {
    console.log('event.target is: ', event.target)
    this.setState({
      tokenToSell: event.target.value
    })
  }

  onChangeBuyToken = (event) => {
    console.log('event.target is: ', event.target)
    this.setState({
      tokenToBuy: event.target.value
    })
  }

  componentWillMount () {
    this.props.fetchTokenList()
  }

  render() {
    const tokenDirectory = this.props.tokenDirectory
    return (
      <Container className='dashboard'>
        <Row>
          <Col xs={12} md={12} lg={12} xl={6}>
            <h3 className='page-title'>Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={12} xl={6}>
            <Card>
              <CardBody>
                <div className='card__title'>
                  <h5 className='bold-text'>Choose trading pairs:</h5>
                </div>
                <form className='form form--horizontal' onSubmit={this.handleSubmit}>
                  <div className='form__form-group'>
                    <label className='form__form-group-label' htmlFor='sellToken'>Token to Sell:</label>
                    <div className='form__form-group-field'>
                      <select value={this.state.tokenToSell} onChange={this.onChangeSellToken} className='form-control' id='tokenToSell'>
                        {tokenDirectory.map((token) => {
                          return (
                            <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
                          )
                        })}
                      </select>
                    </div>
                  </div>
                  <div className='form__form-group'>
                    <label className='form__form-group-label' htmlFor='buyToken'>Token to Buy:</label>
                    <div className='form__form-group-field'>
                      <select value={this.state.tokenToBuy} onChange={this.onChangeBuyToken} className='form-control' id='tokenToBuy'>
                        {tokenDirectory.map((token) => {
                          return (
                            <option key={token.symbol} value={token.symbol}>{token.symbol}</option>
                          )
                        })}
                      </select>
                    </div>
                  </div>                  
                </form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  tokenDirectory: state.tokens.tokensDirectory || []
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTokenList: () => {
      dispatch(fetchTokenList())
    }
  }
}

export const HomepageConnector = connect(mapStateToProps, mapDispatchToProps)(Homepage)