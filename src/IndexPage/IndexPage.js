import React, { useState } from "react";
// # utils
import { cal_fileds_to_display } from "./calculations";
import { find_then_execute } from "utils/object_array";
import { copy } from "utils/copy";
// # style
import "./IndexPage.scss";
// # components
import Kaleidoscope from "components/Kaleidoscope/Kaleidoscope";
import InputArea from "components/InputArea/InputArea";

function IndexPage() {
  const [str_splited_by_blank, set_str_splited_by_blank] = useState(``);
  const [fields_showed, set_fields_showed] = useState([]);
  const [default_type, set_default_type] = useState(`underscore`);

  function when_clicked_radio(type_str) {
    set_default_type(type_str || `underscore`);
  }
  function process_changed(value_of_reflect_input) {
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
  }

  function process_clear() {
    set_str_splited_by_blank(``);
    set_fields_showed([]);
  }
  function process_blured(result_value) {
    set_str_splited_by_blank(result_value);

    if (result_value) {
      // + value existed

      const fields = cal_fileds_to_display(result_value);
      set_fields_showed(fields);

      // $ record it
      let default_type_value = ``;
      find_then_execute(fields, `label_name`, default_type, (field_found) => {
        default_type_value = field_found.label_value;
      });

      copy(default_type_value);
    } else {
      // + value !existed

      set_fields_showed([]);
    }
  }

  return (
    <div className="container">
      <InputArea
        external_for_changed={process_changed}
        external_for_cleared={process_clear}
        external_for_blured={process_blured}
        str_splited_by_blank={str_splited_by_blank}
      />

      <Kaleidoscope
        fields_showed={fields_showed}
        when_clicked_radio={when_clicked_radio}
        default_type={default_type}
      />
    </div>
  );
}

export default IndexPage;
