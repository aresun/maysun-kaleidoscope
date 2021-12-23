import React, { useRef, useState } from "react";
// # utils
import { filter_reflect_input, trim_blank_space } from "../utils/input_filter";
import { single_debounce } from "../utils/single_decounce";
import { copy } from "../utils/copy";
import { cal_fileds_to_display } from "./calculations";
import { get_dom } from "../utils/react_related";
// # style
import "./style.scss";
// # components
import CenterSplitField from "../components/CenterSplitField/CenterSplitField";

function IndexPage() {
  // $ set state
  const [str_splited_by_blank, set_str_splited_by_blank] = useState(``);
  const [fields_showed, set_fields_showed] = useState([]);
  const [default_type, set_default_type] = useState(`underscore`);
  const [is_show_clear_button, set_is_show_clear_button] = useState(false);

  const ref_reflect_input = useRef(null);
  const reflect_input_dom = get_dom(ref_reflect_input);

  // • reflect events
  // ------------------------------------------------------------------------------------------
  const handle_reflect_source_change = single_debounce((e) => {
    const value_of_reflect_input = filter_reflect_input(e.target.value);
    // $ display value in <input />
    set_str_splited_by_blank(value_of_reflect_input);

    const fields = cal_fileds_to_display(value_of_reflect_input);
    // $ display result data
    set_fields_showed(fields);

    const default_type_value = fields.filter((field) => {
      return field.label_name === default_type;
    })[0].label_value;

    // $ copy data to clipboard
    copy(default_type_value);

    // $ update value of dom
    reflect_input_dom.value = value_of_reflect_input;
  }, 300);

  function handle_mouse_entered(e) {
    if (str_splited_by_blank) {
      set_is_show_clear_button(true);
    }
  }
  function handle_mouse_leaved(e) {
    set_is_show_clear_button(false);
  }
  function handle_clicked_clear(e) {
    set_str_splited_by_blank(``);
    reflect_input_dom.focus();
    reflect_input_dom.value = ``;
    set_fields_showed([]);
  }
  function handle_the_input_blured(e) {
    const result_value = trim_blank_space(str_splited_by_blank);
    set_str_splited_by_blank(result_value);

    const fields = cal_fileds_to_display(result_value);

    set_fields_showed(fields);

    const default_type_value = fields.filter((field) => {
      return field.label_name === default_type;
    })[0].label_value;

    copy(default_type_value);

    reflect_input_dom.value = result_value;
  }
  function handle_copy_reflect(e) {
    copy(str_splited_by_blank);
  }
  function handle_select_all(e) {
    reflect_input_dom.select();
  }
  function when_clicked_radio(type_str) {
    set_default_type(type_str || `underscore`);
  }

  return (
    <div className="container">
      <div className="input-area">
        <span className="inline-block input-section">
          <div className="left-half">
            <span className="copy-button" onClick={handle_copy_reflect}>
              <span>❤️</span>
            </span>
            <span className="tip">Maysun Reflect:</span>
          </div>

          <div className="right-half">
            <span
              className="input-container"
              onMouseOver={handle_mouse_entered}
              onMouseLeave={handle_mouse_leaved}
            >
              {/* // # the reflect input */}
              <input
                ref={ref_reflect_input}
                className="the-input"
                type="text"
                onChange={handle_reflect_source_change}
                onBlur={handle_the_input_blured}
              ></input>

              {/* // # clear button */}
              {is_show_clear_button ? (
                <span
                  className="inline-block clear-btn"
                  onClick={handle_clicked_clear}
                ></span>
              ) : null}
            </span>

            <span className="select-all-button" onClick={handle_select_all}>
              <span>✨</span>
            </span>
          </div>
        </span>
      </div>

      {/* // # kaleidoscope */}
      <div className="kaleidoscope">
        {fields_showed.map((field) => {
          return (
            <CenterSplitField
              key={field.label_name}
              {...field}
              click_fn={when_clicked_radio}
              default_type={default_type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default IndexPage;
