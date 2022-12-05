import { Wrapper } from "../styles/Output.styled";

type Props = {
  children: any;
};

const GeneralOutput: React.FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
export default GeneralOutput;
