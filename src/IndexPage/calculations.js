// # utils
import {
  to_underscore_name,
  to_variable_name,
  to_connected_name,
  to_class_identifier,
  to_const_variable_name,
} from "../utils/transform";

export function cal_fileds_to_display(value_be_reflected) {
  // $ calculated data
  const underscore_name = to_underscore_name(value_be_reflected);
  const variable_name = to_variable_name(value_be_reflected);
  const connected_name = to_connected_name(value_be_reflected);
  const class_identifier = to_class_identifier(value_be_reflected);
  const const_variable_name = `const ${to_const_variable_name(value_be_reflected)} = ;`;

  // $ derived data
  /// prefix
  /// prefix: status
  const with_prefix_is = `is${class_identifier}`;
  /// prefix: get data
  const with_prefix_request = `request${class_identifier}`;
  /// prefix: logic entry
  const with_prefix_entrance = `entrance${class_identifier}`;
  const with_prefix_prepare = `prepare${class_identifier}`;
  /// prefix: generate data
  const with_prefix_generate = `generate${class_identifier}`;
  const with_prefix_assemble = `assemble${class_identifier}`;
  const with_prefix_translate = `translate${class_identifier}`;
  /// prefix: data records
  const with_prefix_set = `set${class_identifier}`;
  const with_prefix_reset = `reset${class_identifier}`;
  const with_prefix_handle = `handle${class_identifier}`;

  /// html related
  const vue_component = `<${connected_name}></${connected_name}>`;
  const vue_single_component = `<${connected_name} />`;
  const component = `<${class_identifier}></${class_identifier}>`;
  const react_single_component = `<${class_identifier} />`;

  /// file name
  const rust_file_name = `${underscore_name}.rs`;

  const js_file_name = `${variable_name}.js`;
  const css_file_name = `${variable_name}.css`;
  const scss_file_name = `${variable_name}.scss`;
  const vue_file_name = `${variable_name}.vue`;

  // $ calculate feilds to be displaied
  const fields = [
    {
      label_name: `underscore`,
      label_value: underscore_name,
      type: `source`,
    },
    {
      label_name: `variable`,
      label_value: variable_name,
      type: `source`,
    },
    {
      label_name: `connected`,
      label_value: connected_name,
      type: `source`,
    },
    {
      label_name: `class identifier`,
      label_value: class_identifier,
      type: `source`,
    },
    {
      label_name: `const`,
      label_value: const_variable_name,
      type: `source`,
    },
    /// status
    {
      label_name: `is_`,
      label_value: with_prefix_is,
      type: `status`,
    },
    /// html
    {
      label_name: `component`,
      label_value: component,
      type: `html`,
    },
    {
      label_name: `single component`,
      label_value: react_single_component,
      type: `html`,
    },
    {
      label_name: `vue component`,
      label_value: vue_component,
      type: `html`,
    },
    {
      label_name: `vue single component`,
      label_value: vue_single_component,
      type: `html`,
    },
    /// file name
    {
      label_name: `.rs`,
      label_value: rust_file_name,
      type: `file`,
    },
    {
      label_name: `.js`,
      label_value: js_file_name,
      type: `file`,
    },
    {
      label_name: `.css`,
      label_value: css_file_name,
      type: `file`,
    },
    {
      label_name: `.scss`,
      label_value: scss_file_name,
      type: `file`,
    },
    {
      label_name: `.vue`,
      label_value: vue_file_name,
      type: `file`,
    },
    /// logics
    {
      label_name: `handle_`,
      label_value: with_prefix_handle,
      type: `logics`,
    },
    {
      label_name: `entrance_`,
      label_value: with_prefix_entrance,
      type: `logics`,
    },
    {
      label_name: `prepare_`,
      label_value: with_prefix_prepare,
      type: `logics`,
    },
    {
      label_name: `assemble_`,
      label_value: with_prefix_assemble,
      type: `logics`,
    },
    {
      label_name: `request_`,
      label_value: with_prefix_request,
      type: `logics`,
    },
    /// data records
    {
      label_name: `generate_`,
      label_value: with_prefix_generate,
      type: `data`,
    },
    {
      label_name: `translate_`,
      label_value: with_prefix_translate,
      type: `data`,
    },
    {
      label_name: `set_`,
      label_value: with_prefix_set,
      type: `data`,
    },
    {
      label_name: `reset_`,
      label_value: with_prefix_reset,
      type: `data`,
    },
  ];

  return fields;
}
