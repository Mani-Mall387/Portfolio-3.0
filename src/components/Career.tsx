import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Tranee Intern </h4>
                <h5>Rispoata</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built complete applications using React.js. Integrated backend
              authentication using Node.js , Springboot, Postgress, MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Research Analyst</h4>
                <h5>Risposta</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform developed using React.js. Solid empowers internal teams to deliver production-ready applications faster, reducing development overhead while maintaining high standards of performance and reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate Engineer</h4>
                <h5>Risposta</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Developing Solid, a low-code platform engineered with React.js, Spring Boot, and PostgreSQL. Solid equips internal teams with the tools to ship reliable, production-grade applications with greater speed and efficiency, all without sacrificing code quality or system performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
