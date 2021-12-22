export function filter_reflect_input(str) {
  let valid_input = str
    .replace(/[^a-zA-Z _-]/g, ``)
    .replace(/[ ]+/g, ` `);

  let splited = ``;
  if (/[-]+/g.test(valid_input)) {
    // + `-`

    splited = valid_input.split(`-`);

    return splited.join(` `);
  } else if (/[ ]+/g.test(valid_input)) {
    // + ` `

    return valid_input;
  } else if (/[_]+/g.test(valid_input)) {
    // + `_`

    splited = valid_input.split(`_`);

    return splited.join(` `);
  } else if (/[A-Z]+/g.test(valid_input)) {
    // + `A-Z`

    splited = valid_input.split(/\B(?=[A-Z])/g);

    return splited.join(` `);
  } else {
    return valid_input;
  }
}

export function trim_start(str) {
  return str.replace(/^\s+/g, ``);
}

export function trim_end(str) {
  return str.replace(/\s+$/g, ``);
}

export function trim_blank_space(str) {
  if (str && typeof str === `string`) {
    return str.replace(/(^\s+)|(\s+$)/g, ``);
  } else {
    return ``;
  }
}
