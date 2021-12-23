export function copy(str) {
  navigator.clipboard.writeText(str).catch((e) => {
    // console.log("%c:e: ", "color: #ff2255; font-size: 20px;", e);
  });
}
