import UserName from "./commands/UserName";
import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User><UserName/></User>@<WebsiteName>terminal.montek.rocks</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
