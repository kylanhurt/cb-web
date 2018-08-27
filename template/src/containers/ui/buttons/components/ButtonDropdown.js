import React, {PureComponent} from 'react';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown
} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

export default class ButtonDropdown extends PureComponent {
  render() {
    return (
      <Col md={12} lg={6} xl={6}>
        <Card>
          <CardBody>
            <div className='card__title'>
              <h5 className='bold-text'>Button dropdown </h5>
            </div>
            <h5 className='bold-text'>Basic buttons with dropdown</h5>
            <div className='card__title'>
              <h5 className='subhead'>Use default dropdown toggle</h5>
            </div>
            <ButtonToolbar>
              <UncontrolledDropdown>
                <DropdownToggle className='icon icon--right' outline>
                  <p>Dropdown <ChevronDownIcon/></p>
                </DropdownToggle>
                <DropdownMenu className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown>
                <DropdownToggle className='icon icon--right'>
                  <p>Dropdown <ChevronDownIcon/></p>
                </DropdownToggle>
                <DropdownMenu className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown>
                <DropdownToggle className='icon icon--right' outline color='primary'>
                  <p>Dropdown <ChevronDownIcon/></p>
                </DropdownToggle>
                <DropdownMenu className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonToolbar>
            
            <h5 className='bold-text'>Buttons with divided dropdown</h5>
            <div className='card__title'>
              <h5 className='subhead'>Use default dropdown toggle with <span className='red-text'>button</span></h5>
            </div>
            <ButtonToolbar>
              <UncontrolledDropdown>
                <ButtonGroup>
                  <Button outline>Dropdown</Button>
                  <DropdownToggle outline className='icon icon--right'>
                    <ChevronDownIcon/>
                  </DropdownToggle>
                </ButtonGroup>
                <DropdownMenu right className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown>
                <ButtonGroup>
                  <Button color='primary' outline>Dropdown</Button>
                  <DropdownToggle color='primary' outline className='icon icon--right'>
                    <ChevronDownIcon/>
                  </DropdownToggle>
                </ButtonGroup>
                <DropdownMenu right className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown>
                <ButtonGroup>
                  <Button color='primary' outline>Dropdown</Button>
                  <DropdownToggle color='primary' className='icon icon--right'>
                    <ChevronDownIcon/>
                  </DropdownToggle>
                </ButtonGroup>
                <DropdownMenu right className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown>
                <ButtonGroup>
                  <Button color='primary'>Dropdown</Button>
                  <DropdownToggle color='primary' className='icon icon--right'>
                    <ChevronDownIcon/>
                  </DropdownToggle>
                </ButtonGroup>
                <DropdownMenu right className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
              <UncontrolledDropdown>
                <ButtonGroup>
                  <Button color='primary' disabled>Dropdown</Button>
                  <DropdownToggle disabled color='primary' className='icon icon--right'>
                    <ChevronDownIcon/>
                  </DropdownToggle>
                </ButtonGroup>
                <DropdownMenu right className='dropdown__menu'>
                  <DropdownItem>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Action</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    )
  }
}