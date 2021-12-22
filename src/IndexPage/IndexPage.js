import React, { useRef, useState } from "react";
// # utils
import {
  toVariableName,
  toConnectedName,
  toClassIdentifier,
  toUnderscoreName,
} from "../utils/transform";
import {
  filter_reflect_input,
  trim_blank_space,
} from "../utils/input_filter";
import { single_debounce } from "../utils/single_decounce";
import { copy } from "../utils/copy";
// # style
import "./style.scss";
// # components
import CenterSplitField from "../components/CenterSplitField/CenterSplitField";

function IndexPage() {
  const [str_be_processed, set_str_be_processed] = useState(``);
  const [feilds_display, set_fileds_display] = useState([]);
  const [default_type, set_default_type] = useState(`underscore`);
  const [is_show_clear_button, set_is_show_clear_button] =
    useState(false);
  const reflect_input = useRef(null);

  // • reflect events
  // ------------------------------------------------------------------------------------------
  const handleInputedChange = single_debounce((e) => {
    const reflect_input_value = filter_reflect_input(
      e.target.value
    );

    set_str_be_processed(reflect_input_value);

    // # calculated data
    const underscoreName = toUnderscoreName(reflect_input_value);
    const variableName = toVariableName(reflect_input_value);
    const connected_name = toConnectedName(reflect_input_value);
    const classIdentifier = toClassIdentifier(
      reflect_input_value
    );
    const vue_component = `<${connected_name}></${connected_name}>`;
    const vue_single_component = `<${connected_name} />`;
    const component = `<${classIdentifier}></${classIdentifier}>`;
    const react_single_component = `<${classIdentifier} />`;

    const fields = [
      {
        label_name: `underscore`,
        label_value: underscoreName,
      },
      {
        label_name: `variable`,
        label_value: variableName,
      },
      {
        label_name: `connected`,
        label_value: connected_name,
      },
      {
        label_name: `class identifier`,
        label_value: classIdentifier,
      },
      {
        label_name: `component`,
        label_value: component,
      },
      {
        label_name: `react single component`,
        label_value: react_single_component,
      },
      {
        label_name: `vue component`,
        label_value: vue_component,
      },
      {
        label_name: `vue single component`,
        label_value: vue_single_component,
      },
    ];

    set_fileds_display(fields);

    const default_type_value = fields.filter((field) => {
      return field.label_name === default_type;
    })[0].label_value;

    copy(default_type_value);

    reflect_input.current.value = reflect_input_value;
  }, 300);

  function handleMouseEntered(e) {
    if (str_be_processed) {
      set_is_show_clear_button(true);
    }
  }
  function handleMouseLeaved(e) {
    set_is_show_clear_button(false);
  }
  function handleClickedClear(e) {
    set_str_be_processed(``);
    set_fileds_display([]);

    reflect_input.current.value = ``;
  }
  function handle_the_reflect_blur(e) {
    const result_value = trim_blank_space(str_be_processed);
    set_str_be_processed(result_value);
    // # calculated data
    const underscoreName = toUnderscoreName(result_value);
    const variableName = toVariableName(result_value);
    const connected_name = toConnectedName(result_value);
    const classIdentifier = toClassIdentifier(result_value);
    const vue_component = `<${connected_name}></${connected_name}>`;
    const vue_single_component = `<${connected_name} />`;
    const component = `<${classIdentifier}></${classIdentifier}>`;
    const react_single_component = `<${classIdentifier} />`;

    const fields = [
      {
        label_name: `underscore`,
        label_value: underscoreName,
      },
      {
        label_name: `variable`,
        label_value: variableName,
      },
      {
        label_name: `connected`,
        label_value: connected_name,
      },
      {
        label_name: `class identifier`,
        label_value: classIdentifier,
      },
      {
        label_name: `component`,
        label_value: component,
      },
      {
        label_name: `react single component`,
        label_value: react_single_component,
      },
      {
        label_name: `vue component`,
        label_value: vue_component,
      },
      {
        label_name: `vue single component`,
        label_value: vue_single_component,
      },
    ];

    set_fileds_display(fields);

    const default_type_value = fields.filter((field) => {
      return field.label_name === default_type;
    })[0].label_value;

    copy(default_type_value);

    reflect_input.current.value = result_value;
  }
  function handle_copy_reflect(e) {
    copy(str_be_processed);
  }
  function clickFn(type_str) {
    set_default_type(type_str || `underscore`);
  }

  return (
    <div className="container">
      <div className="input-area">
        <span className="inline-block input-section">
          <div className="left-half">
            <span
              className="copy-button"
              onClick={handle_copy_reflect}
            >
              copyit
            </span>
            <span className="tip">Maysun Reflect:</span>
          </div>

          <div
            className="right-half"
            onMouseOver={handleMouseEntered}
            onMouseLeave={handleMouseLeaved}
          >
            <span className="input-container">
              {/* // # the reflect input */}
              <input
                ref={reflect_input}
                className="the-input"
                type="text"
                onChange={handleInputedChange}
                onBlur={handle_the_reflect_blur}
              ></input>

              {/* // # clear button */}
              {is_show_clear_button ? (
                <span
                  className="inline-block clear-btn"
                  onClick={handleClickedClear}
                ></span>
              ) : null}
            </span>
          </div>
        </span>
      </div>

      {/* // # kaleidoscope */}
      <div className="kaleidoscope">
        {feilds_display.map((field) => {
          return (
            <CenterSplitField
              key={field.label_name}
              {...field}
              click_fn={clickFn}
              default_type={default_type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IndexPage;
