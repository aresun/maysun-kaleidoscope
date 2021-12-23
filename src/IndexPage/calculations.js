// # utils
import {
  toUnderscoreName,
  toVariableName,
  toConnectedName,
  toClassIdentifier,
  toConstVariableName,
} from "../utils/transform";

export function cal_fileds_to_display(value_be_reflected) {
  // $ calculated data
  const underscoreName = toUnderscoreName(value_be_reflected);
  const variableName = toVariableName(value_be_reflected);
  const connected_name = toConnectedName(value_be_reflected);
  const classIdentifier = toClassIdentifier(value_be_reflected);
  const const_variable_name = `const ${toConstVariableName(value_be_reflected)} = ;`;

  // $ derived data
  /// prefix
  /// prefix: status
  const with_prefix_is = `is${classIdentifier}`;
  /// prefix: get data
  const with_prefix_request = `request${classIdentifier}`;
  /// prefix: logic entry
  const with_prefix_entrance = `entrance${classIdentifier}`;
  const with_prefix_prepare = `prepare${classIdentifier}`;
  /// prefix: generate data
  const with_prefix_generate = `generate${classIdentifier}`;
  const with_prefix_assemble = `assemble${classIdentifier}`;
  const with_prefix_translate = `translate${classIdentifier}`;
  /// prefix: data records
  const with_prefix_set = `set${classIdentifier}`;
  const with_prefix_reset = `reset${classIdentifier}`;
  const with_prefix_handle = `handle${classIdentifier}`;

  /// html related
  const vue_component = `<${connected_name}></${connected_name}>`;
  const vue_single_component = `<${connected_name} />`;
  const component = `<${classIdentifier}></${classIdentifier}>`;
  const react_single_component = `<${classIdentifier} />`;

  /// file name
  const rust_file_name = `${underscoreName}.rs`;

  const js_file_name = `${variableName}.js`;
  const css_file_name = `${variableName}.css`;
  const scss_file_name = `${variableName}.scss`;
  const vue_file_name = `${variableName}.vue`;

  // $ calculate feilds to be displaied
  const fields = [
    {
      label_name: `underscore`,
      label_value: underscoreName,
      type: `source`,
    },
    {
      label_name: `variable`,
      label_value: variableName,
      type: `source`,
    },
    {
      label_name: `connected`,
      label_value: connected_name,
      type: `source`,
    },
    {
      label_name: `class identifier`,
      label_value: classIdentifier,
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
