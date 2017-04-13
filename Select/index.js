var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { h } from "preact";
import MaterialComponent from "../MaterialComponent";
import { MDCSelect } from "@material/select/";
import List from "../List";
class Select extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "select";
		this._mdcProps = ["disabled"];
	}
	componentDidMount() {
		console.log(this.props, "===================");

		if (!this.props.basic) {
			this.MDComponent = new MDCSelect(this.control);
			this.MDComponent.listen('MDCSelect:change', () => {
				if (this.props.onChange) {
					this.props.onChange();
				}
			});
		}
	}
	materialDom(props) {
		console.log('yo');
		console.log(props);
		debugger;
		if (props.basic) {
			return h(
				"select",
				_extends({}, props, { ref: control => {
						this.control = control;
					} }),
				props.children
			);
		}

		return h(
			"div",
			_extends({ role: "listbox" }, props, { ref: control => {
					this.control = control;
				} }),
			h(
				"span",
				{ className: "mdc-select__selected-text" },
				props.hintText
			),
			h(
				"div",
				{ className: "mdc-simple-menu mdc-select__menu" },
				h(
					"ul",
					{ className: "mdc-list mdc-simple-menu__items " },
					props.children
				)
			)
		);
	}
}

Select.Item = List.Item;

export default Select;