export function copy(str) {
  navigator.clipboard.writeText(str).catch((e) => {});
}
