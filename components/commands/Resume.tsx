import { RIntro } from "../styles/Resume.styled";
import { Wrapper } from "../styles/Output.styled";

const Resume: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <RIntro>This is my Resume!</RIntro>
    </Wrapper>
  );
};

export default Resume;
