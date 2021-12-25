import { copy } from "../../utils/copy";
// # css
import "./CenterSplitField.scss";

export default function CenterSplitField({
  label_name,
  label_value,
  type,
  click_fn,
  default_type,
}) {
  function handle_clicked_component(e) {
    copy(label_value);
  }

  function handle_clicked_radio(e) {
    click_fn(label_name);
  }

  return (
    <>
      <div className="light-beam" onClick={handle_clicked_component}>
        <div className="left-half">
          <span>
            <span className={`label ${type}`}>{label_name}</span>
            <input
              className="radio-dot"
              type="radio"
              value={label_name}
              checked={label_name === default_type}
              onChange={handle_clicked_radio}
            ></input>
          </span>
        </div>
        <div className="right-half">
          <span className="label-value ellipses">{label_value}</span>
        </div>
      </div>
    </>
  );
}
