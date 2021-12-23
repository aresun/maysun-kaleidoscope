// # utils
import {
  toUnderscoreName,
  toVariableName,
  toConnectedName,
  toClassIdentifier,
  toConstVariableName,
} from "../utils/transform";

function cal_fileds_to_display(value_be_reflected) {
  // $ calculated data
  const underscoreName = toUnderscoreName(value_be_reflected);
  const variableName = toVariableName(value_be_reflected);
  const connected_name = toConnectedName(value_be_reflected);
  const classIdentifier = toClassIdentifier(value_be_reflected);
  const const_variable_name = `const ${toConstVariableName(value_be_reflected)} = ;`;

  // $ derived data
  /// prefix
  const with_prefix_is = `is_${underscoreName}`;
  const with_prefix_request = `request_${underscoreName}`;
  const with_prefix_entrance = `entrance_${underscoreName}`;
  const with_prefix_prepare = `prepare_${underscoreName}`;
  const with_prefix_generate = `generate_${underscoreName}`;
  const with_prefix_assemble = `assemble_${underscoreName}`;
  const with_prefix_translate = `translate_${underscoreName}`;
  const with_prefix_set = `set_${underscoreName}`;
  const with_prefix_reset = `reset_${underscoreName}`;
  /// html related
  const vue_component = `<${connected_name}></${connected_name}>`;
  const vue_single_component = `<${connected_name} />`;
  const component = `<${classIdentifier}></${classIdentifier}>`;
  const react_single_component = `<${classIdentifier} />`;

  // $ calculate feilds to be displaied
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
    {
      label_name: `const`,
      label_value: const_variable_name,
    },
    // # with prefix
    {
      label_name: `with prefix is_`,
      label_value: with_prefix_is,
    },
    {
      label_name: `with prefix request_`,
      label_value: with_prefix_request,
    },
    {
      label_name: `with prefix entrance_`,
      label_value: with_prefix_entrance,
    },
    {
      label_name: `with prefix prepare_`,
      label_value: with_prefix_prepare,
    },
    {
      label_name: `with prefix generate_`,
      label_value: with_prefix_generate,
    },
    {
      label_name: `with prefix assemble_`,
      label_value: with_prefix_assemble,
    },
    {
      label_name: `with prefix translate_`,
      label_value: with_prefix_translate,
    },
    {
      label_name: `with prefix set_`,
      label_value: with_prefix_set,
    },
    {
      label_name: `with prefix reset_`,
      label_value: with_prefix_reset,
    },
  ];
}
