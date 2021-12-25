// # css
import "./ClearButton.scss";

export default function ClearButton({ is_existed, external_clicked_button }) {
  if (is_existed) {
    return (
      <>
        <span
          className="inline-block clear-btn"
          onClick={external_clicked_button}
        ></span>
      </>
    );
  } else {
    return null;
  }
}
