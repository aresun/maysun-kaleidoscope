import _ from "lodash/fp";
const to_array = _.split(` `);

const processor_toUnderscoreName = _.flowRight(
  _.join(`_`),
  _.map(_.toLower),
  to_array
);
const processor_toConnectedName = _.flowRight(
  _.join(`-`),
  _.map(_.toLower),
  to_array
);
const processor_toConstVariableName = _.flowRight(
  _.join(`_`),
  _.map(_.toUper), // todo:: check api name
  to_array
);
const processor_toClassIdentifier = _.flowRight(
  _.join(``),
  _.map(_.capitalize),
  to_array
);

export function toUnderscoreName(str) {
  return processor_toUnderscoreName(str);
}

export function toVariableName(str) {
  return _.camelCase(str);
}

export function toConnectedName(str) {
  return processor_toConnectedName(str);
}

export function toClassIdentifier(str) {
  return processor_toClassIdentifier(str);
}

export function toConstVariableName(str) {
  return processor_toConstVariableName(str);
}
