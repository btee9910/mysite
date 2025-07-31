import "./PortfolioBlock.css";

const PortfolioBlock = ({
  index,
  projectName,
  projectDescription,
  thumbnail,
  url,
  repo,
}) => {
  return (
    <div
      className="portfolio__block"
      style={index % 2 === 1 ? { flexDirection: "row-reverse" } : {}}
    >
      <div className="portfolio__block__subblock portfolio__block__image">
        <img
          src={thumbnail}
          alt={"screenshot of " + projectName + "homepage"}
          className="project__image"
        />
        {url ? (
          <>
            <div className="project__hover__effect project__hover__effect__1"></div>
            <div className="project__hover__effect project__hover__effect__2"></div>
            <a href={url} target="_blank" rel="noreferrer">
              <img
                src="./open.png"
                alt="Visit Page icon"
                className="site__access__icon"
              />
            </a>
            <img
              src="./open.png"
              alt="Visit Page icon"
              className="site__access__icon"
            />
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="portfolio__block__subblock portfolio__block__description">
        <div className="project__name">
          <h5>{projectName}</h5>
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer">
              <img src="github.png" alt="github icon" />
            </a>
          )}
        </div>
        <div className="project__description">
          <h6>{projectDescription}</h6>
        </div>
        <div className="project__button__wrapper">
          {url && (
            <a
              href={url}
              className="project__button btn"
              target="_blank"
              rel="noreferrer"
            >
              View site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioBlock;
