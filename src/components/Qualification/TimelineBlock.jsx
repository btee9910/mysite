import "./TimelineBlock.css";
import PropTypes from "prop-types";

const TimelineBlock = ({
  institution,
  title,
  period,
  description,
  stacks,
  index,
}) => {
  TimelineBlock.propTypes = {
    institution: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stacks: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <div
      className="timeline__block"
      style={index % 2 === 1 ? { flexDirection: "row-reverse" } : {}}
    >
      <div
        className={
          "timeline__subblock " +
          (index % 2 === 0 ? "timeline__left" : "timeline__right")
        }
      >
        <h5>{title}</h5>
        <h6 className="text-black-50">{institution}</h6>
        <h6 className="text-black-50">{period}</h6>
      </div>
      <div className="timeline">
        <span className="timeline__pin">⦿</span>
        <span className="timeline__line"></span>
      </div>
      <div
        className={
          "timeline__subblock timeline__hover__effect timeline__description " +
          (index % 2 === 0 ? "timeline__right " : "timeline__left")
        }
      >
        <div className="">{description}</div>
        {stacks.length != 0 ? (
          <div className="mb-3">
            <p className="mb-0">Tech stack and software:</p>
            {stacks.map((stack, index) => {
              return (
                <span className="pro_lang" key={index}>
                  {stack}
                  {index < stacks.length - 1 ? ", " : "."}
                </span>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default TimelineBlock;
