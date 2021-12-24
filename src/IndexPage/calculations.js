// # utils
import {
  to_underscore_name,
  to_variable_name,
  to_connected_name,
  to_class_identifier,
  to_const_variable_name,
} from "../utils/transform";

function make_field(label, value, type) {
  return {
    label_name: label,
    label_value: value,
    type,
  };
}

export function cal_fileds_to_display(value_be_reflected) {
  // $ calculated data
  const underscore_name = to_underscore_name(value_be_reflected);
  const variable_name = to_variable_name(value_be_reflected);
  const connected_name = to_connected_name(value_be_reflected);
  const class_identifier = to_class_identifier(value_be_reflected);
  const const_variable_name = `const ${to_const_variable_name(
    value_be_reflected
  )} = ;`;

  /// file name
  // $ calculate feilds to be displaied
  const fields = [
    /// source
    make_field(`underscore`, underscore_name, `source`),
    make_field(`variable`, variable_name, `source`),
    make_field(`connected`, connected_name, `source`),
    make_field(`class identifier`, class_identifier, `source`),
    make_field(`const`, const_variable_name, `source`),

    // $ below are derived data
    /// status
    make_field(`is_`, `is${class_identifier}`, `status`),
    /// html
    make_field(`component`, `<${class_identifier}></${class_identifier}>`, `html`),
    make_field(`single component`, `<${class_identifier} />`, `html`),
    make_field(`vue component`, `<${connected_name}></${connected_name}>`, `html`),
    make_field(`vue single component`, `<${connected_name} />`, `html`),
    /// file name
    make_field(`.rs`, `${underscore_name}.rs`, `file`),
    make_field(`.js`, `${underscore_name}.js`, `file`),
    make_field(`.js`, `${class_identifier}.js`, `file`),
    make_field(`.js`, `${variable_name}.js`, `file`),

    make_field(`.css`, `${underscore_name}.css`, `file`),
    make_field(`.css`, `${class_identifier}.css`, `file`),
    make_field(`.css`, `${variable_name}.css`, `file`),

    make_field(`.scss`, `${underscore_name}.scss`, `file`),
    make_field(`.scss`, `${class_identifier}.scss`, `file`),
    make_field(`.scss`, `${variable_name}.scss`, `file`),

    make_field(`.vue`, `${variable_name}.vue`, `file`),
    /// logics
    make_field(`handle_`, `handle${class_identifier}`, `logics`),
    make_field(`entrance_`, `entrance${class_identifier}`, `logics`),
    make_field(`prepare_`, `prepare${class_identifier}`, `logics`),
    make_field(`assemble_`, `assemble${class_identifier}`, `logics`),
    make_field(`request_`, `request${class_identifier}`, `logics`),
    /// data records
    make_field(`calculate_`, `calculate${class_identifier}`, `data`),
    make_field(`generate_`, `generate${class_identifier}`, `data`),
    make_field(`translate_`, `translate${class_identifier}`, `data`),
    make_field(`set_`, `set${class_identifier}`, `data`),
    make_field(`reset_`, `reset${class_identifier}`, `data`),
  ];

  return fields;
}
