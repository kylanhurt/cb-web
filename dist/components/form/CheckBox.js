"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const CheckIcon_1 = require("mdi-react/CheckIcon");
const CloseIcon_1 = require("mdi-react/CloseIcon");
const prop_types_1 = require("prop-types");
class CheckBoxField extends react_1.PureComponent {
    componentDidMount() {
        this.props.onChange(this.props.defaultChecked);
    }
    render() {
        const disabled = this.props.disabled;
        return (<label className={`checkbox-btn${disabled ? ' disabled' : ''}${this.props.class ? ` checkbox-btn--${this.props.class}` : ''}`}>
        <input className='checkbox-btn__checkbox' type='checkbox' name={this.props.name} onChange={this.props.onChange} checked={this.props.value} disabled={disabled}/>
        <span className='checkbox-btn__checkbox-custom' style={this.props.color ? { background: this.props.color, borderColor: this.props.color } : {}}>
          <CheckIcon_1.default />
        </span>
        {this.props.class === 'button'
            ? <span className='checkbox-btn__label-svg'>
            <CheckIcon_1.default className='checkbox-btn__label-check'/>
            <CloseIcon_1.default className='checkbox-btn__label-uncheck'/>
          </span> : ''}
        <span className='checkbox-btn__label'>
          {this.props.label}
        </span>
      </label>);
    }
}
const renderCheckBoxField = (props) => (<CheckBoxField {...props.input} label={props.label} defaultChecked={props.defaultChecked} disabled={props.disabled} class={props.class} color={props.color}/>);
renderCheckBoxField.propTypes = {
    input: prop_types_1.default.object.isRequired,
    label: prop_types_1.default.string,
    defaultChecked: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    class: prop_types_1.default.string,
    color: prop_types_1.default.string
};
exports.default = renderCheckBoxField;
//# sourceMappingURL=CheckBox.js.map