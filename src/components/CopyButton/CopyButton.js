// # css
import "./CopyButton.scss";

export default function CopyButton({ external_clicked_button }) {
  return (
    <span className="copy-button" onClick={external_clicked_button}>
      <span>❤️</span>
    </span>
  );
}
