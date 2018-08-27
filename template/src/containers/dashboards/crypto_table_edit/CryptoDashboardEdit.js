import React, {PureComponent} from 'react';
import {Container, Row} from 'reactstrap';
import {connect} from 'react-redux';
import TopTenEditForm from './components/TopTenEditForm';
import {Redirect} from 'react-router-dom';
import {changeCryptoTableData, loadCryptoTableData} from '../../../redux/actions/cryptoTableActions';

class CryptoDashboardEdit extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.props.dispatch(loadCryptoTableData(this.props.match.params.index));
  }

  handleSubmit = (formValues) => {
    this.props.dispatch(changeCryptoTableData(formValues, this.props.match.params.index));
    this.setState({redirect: true});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/dashboard_crypto'/>;
    }

    return (
      <Container className='dashboard'>
        <Row>
          <TopTenEditForm onSubmit={this.handleSubmit}/>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cryptoTable: state.cryptoTable
  };
};

export default connect(mapStateToProps)(CryptoDashboardEdit);
