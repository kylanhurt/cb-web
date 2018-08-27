import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import EmailListItem from './EmailListItem';
import Table from '../table/Table';
import Pagination from '../Pagination';
import EmailsControls from './EmailsControls';

export default class InboxTable extends PureComponent {
  static propTypes = {
    emails: PropTypes.array
  };
  
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);
  }
  
  onChangePage(pageOfItems) {
    this.setState({pageOfItems: pageOfItems});
  }
  
  render() {
    return (
      <div className='inbox__content'>
        <EmailsControls/>
        <Table className='table--bordered inbox__emails-table' responsive>
          <tbody>
          {this.props.emails.slice(0, 15).map((e, i) =>
            <EmailListItem name={e.name} time={e.time} preview={e.preview} attach={e.attach}
                           favorite={e.favorite}
                           key={i} onClick={this.props.onLetter}/>
          )}
          </tbody>
        </Table>
        <Pagination items={this.props.emails} pageSize={15} onChangePage={this.onChangePage}/>
      </div>
    )
  }
}