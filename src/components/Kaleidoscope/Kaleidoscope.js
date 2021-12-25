// # style
import "./Kaleidoscope.css";
// # components
import CenterSplitField from "../CenterSplitField/CenterSplitField";

export default function Kaleidoscope({
  fields_showed,
  when_clicked_radio,
  default_type,
}) {
  return (
    <div className="kaleidoscope">
      {fields_showed.map((field) => {
        return (
          <CenterSplitField
            key={field.label_name}
            {...field}
            click_fn={when_clicked_radio}
            default_type={default_type}
          />
        );
      })}
    </div>
  );
}
