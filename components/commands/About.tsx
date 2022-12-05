import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Montek</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Data Science Student</HighlightAlt> currenly studying in Canada!
      </p>
      <p>
        I am passionate about writing codes and <br />
        learning about machine learning and web development.
      </p>
    </AboutWrapper>
  );
};

export default About;
