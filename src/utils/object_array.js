export function find_then_execute(
  source_arr = [],
  target_key_name,
  target_value,
  process_fn
) {
  let index_found = -1;

  const target_found = source_arr.find((record, i) => {
    const is_record_match = record[target_key_name] === target_value;

    is_record_match && (index_found = i);

    return is_record_match;
  });

  if (target_found && typeof process_fn === `function`) {
    process_fn(target_found, index_found);
  }
}
