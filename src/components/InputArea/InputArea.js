import React, { useRef, useState } from "react";
// # css
import "./InputArea.scss";
// # utils
import { copy } from "utils/copy";
import { filter_reflect_input, trim_blank_space } from "../../utils/input_filter";
import { single_debounce } from "utils/single_decounce";
import { get_dom } from "utils/react_related";
// # components
import ClearButton from "components/ClearButton/ClearButton";
import CopyButton from "components/CopyButton/CopyButton";

export default function InputArea({
  external_for_changed,
  external_for_cleared,
  external_for_blured,

  str_splited_by_blank,
}) {
  // $ set state
  const [is_show_clear_button, set_is_show_clear_button] = useState(false);
  const ref_reflect_input = useRef(null);

  function update_value_of_input_dom(value_for_updating) {
    const input_dom = get_dom(ref_reflect_input);
    input_dom.value = value_for_updating;

    return input_dom;
  }

  // • reflect events
  // ------------------------------------------------------------------------------------------
  const handle_reflect_source_change = single_debounce((e) => {
    const value_of_reflect_input = filter_reflect_input(e.target.value);

    update_value_of_input_dom(value_of_reflect_input);
    external_for_changed(value_of_reflect_input);
  }, 300);
  function handle_clicked_copy_reflect(e) {
    copy(str_splited_by_blank);
  }

  // • clear button events
  // ------------------------------------------------------------------------------------------
  function handle_mouse_entered(e) {
    if (str_splited_by_blank) {
      set_is_show_clear_button(true);
    }
  }
  function handle_mouse_leaved(e) {
    set_is_show_clear_button(false);
  }
  function process_clicked_clear(e) {
    external_for_cleared();
    update_value_of_input_dom(``).focus();
  }
  function handle_the_input_blured(e) {
    const result_value = trim_blank_space(str_splited_by_blank);
    external_for_blured(result_value);
    update_value_of_input_dom(result_value);
  }
  function handle_select_all(e) {
    get_dom(ref_reflect_input).select();
  }

  return (
    <div className="input-area">
      <span className="inline-block input-section">
        <div className="left-half">
          <CopyButton external_clicked_button={handle_clicked_copy_reflect} />
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

            <ClearButton
              is_existed={is_show_clear_button}
              external_clicked_button={process_clicked_clear}
            />
          </span>

          <span className="select-all-button" onClick={handle_select_all}>
            <span>✨</span>
          </span>
        </div>
      </span>
    </div>
  );
}
