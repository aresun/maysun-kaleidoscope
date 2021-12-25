import { useState } from "react";
import "./FloatTranslator.scss";

export default function FloatTranslator({ prop_name }) {
  const [is_show, set_is_show] = useState(false);

  function handle_clicked_show(e) {
    set_is_show(!is_show);

    e.stopPropagation();
  }
  function handle_clicked_mask(e) {
    set_is_show(false);
  }

  return (
    <>
      <div className={is_show ? `mask` : ``} onClick={handle_clicked_mask}>
        <div className={is_show ? `float-translator active` : `float-translator`}>
          <span className="show-button" onClick={handle_clicked_show}>
            🎁
          </span>
          <iframe
            src="https://cn.bing.com/translator/"
            width="500"
            height="1000"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
