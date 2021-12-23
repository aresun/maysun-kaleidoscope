import _ from "lodash/fp";
const to_array = _.split(` `);

const processor_to_underscore_name = _.flowRight(
  _.join(`_`),
  _.map(_.toLower),
  to_array
);
const processor_to_connected_name = _.flowRight(
  _.join(`-`),
  _.map(_.toLower),
  to_array
);
const processor_to_const_variable_name = _.flowRight(
  _.join(`_`),
  _.map(_.toUpper),
  to_array
);
const processor_to_class_identifier = _.flowRight(
  _.join(``),
  _.map(_.capitalize),
  to_array
);

export function to_underscore_name(str) {
  return processor_to_underscore_name(str);
}

export function to_variable_name(str) {
  return _.camelCase(str);
}

export function to_connected_name(str) {
  return processor_to_connected_name(str);
}

export function to_class_identifier(str) {
  return processor_to_class_identifier(str);
}

export function to_const_variable_name(str) {
  return processor_to_const_variable_name(str);
}
