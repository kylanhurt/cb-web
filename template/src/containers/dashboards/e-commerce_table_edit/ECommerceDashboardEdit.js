import React, {PureComponent} from 'react';
import {Container, Row} from 'reactstrap';
import {connect} from 'react-redux';
import NewOrderEditForm from './components/NewOrderEditForm';
import {Redirect} from 'react-router-dom';
import {changeNewOrderTableData, loadNewOrderTableData} from '../../../redux/actions/newOrderTableActions';

class ECommerceDashboardEdit extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  componentDidMount() {
    this.props.dispatch(loadNewOrderTableData(this.props.match.params.index));
  }

  handleSubmit = (formValues) => {
    this.props.dispatch(changeNewOrderTableData(formValues, this.props.match.params.index));
    this.setState({redirect: true});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to='/dashboard_e_commerce'/>;
    }

    return (
      <Container className='dashboard'>
        <Row>
          <NewOrderEditForm onSubmit={this.handleSubmit}/>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    newOrder: state.newOrder
  };
};

export default connect(mapStateToProps)(ECommerceDashboardEdit);
