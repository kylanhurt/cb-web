"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const prop_types_1 = require("prop-types");
const reactstrap_1 = require("reactstrap");
class ModalComponent extends react_1.PureComponent {
    constructor(props) {
        super(props);
        this.toggle = () => {
            this.setState({
                modal: !this.state.modal
            });
        };
        this.state = {
            modal: false
        };
        this.toggle = this.toggle;
    }
    render() {
        let Icon;
        switch (this.props.color) {
            case 'primary':
                Icon = <span className='lnr lnr-pushpin modal__title-icon'/>;
                break;
            case 'success':
                Icon = <span className='lnr lnr-thumbs-up modal__title-icon'/>;
                break;
            case 'warning':
                Icon = <span className='lnr lnr-flag modal__title-icon'/>;
                break;
            case 'danger':
                Icon = <span className='lnr lnr-cross-circle modal__title-icon'/>;
                break;
            default:
                break;
        }
        return (<div>
        <reactstrap_1.Button color={this.props.color} onClick={this.toggle}>{this.props.btn}</reactstrap_1.Button>
        <reactstrap_1.Modal isOpen={this.state.modal} toggle={this.toggle} className={`modal-dialog--${this.props.color} ${this.props.colored ? 'modal-dialog--colored' : ''} ${this.props.header ? 'modal-dialog--header' : ''}`}>
          <div className='modal__header'>
            <span className='lnr lnr-cross modal__close-btn' onClick={this.toggle}/>
            {this.props.header ? '' : Icon}
            <h4 className='bold-text  modal__title'>{this.props.title}</h4>
          </div>
          <div className='modal__body'>
            {this.props.message}
          </div>
          <reactstrap_1.ButtonToolbar className='modal__footer'>
            <reactstrap_1.Button onClick={this.toggle}>Cancel</reactstrap_1.Button>{' '}
            <reactstrap_1.Button outline={this.props.colored} color={this.props.color} onClick={this.toggle}>Ok</reactstrap_1.Button>
          </reactstrap_1.ButtonToolbar>
        </reactstrap_1.Modal>
      </div>);
    }
}
ModalComponent.propTypes = {
    title: prop_types_1.default.string,
    message: prop_types_1.default.string,
    color: prop_types_1.default.string.isRequired,
    colored: prop_types_1.default.bool,
    header: prop_types_1.default.bool,
    btn: prop_types_1.default.string.isRequired
};
exports.ModalComponent = ModalComponent;
//# sourceMappingURL=Modal.js.map