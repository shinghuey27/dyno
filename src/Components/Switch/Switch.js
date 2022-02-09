import Label from "../Label/Label";
import "./Switch.css";

const Switch = (props) => {
  const { container, label, slider } = props;
  return (
    <div className="flex">
      {label && <Label />}

      <Label className={props.classNameLabel} label="" {...container}>
        <input type="checkbox" />
        <span className={props.classNameSlider} {...slider}></span>
      </Label>
    </div>
  );
};
Switch.defaultProps = {
  classNameLabel: "switch",
  classNameSlider: "slider round"
};
export default Switch;
