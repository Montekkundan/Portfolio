import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`

███╗   ███╗ ██████╗ ███╗   ██╗████████╗███████╗██╗  ██╗
████╗ ████║██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝██║ ██╔╝
██╔████╔██║██║   ██║██╔██╗ ██║   ██║   █████╗  █████╔╝ 
██║╚██╔╝██║██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██╔═██╗ 
██║ ╚═╝ ██║╚██████╔╝██║ ╚████║   ██║   ███████╗██║  ██╗
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
          `}
        </PreName>
        <PreWrapper className="flex">
          <PreNameMobile>
            {`

███╗   ███╗ ██████╗ ███╗   ██╗████████╗███████╗██╗  ██╗
████╗ ████║██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝██║ ██╔╝
██╔████╔██║██║   ██║██╔██╗ ██║   ██║   █████╗  █████╔╝ 
██║╚██╔╝██║██║   ██║██║╚██╗██║   ██║   ██╔══╝  ██╔═██╗ 
██║ ╚═╝ ██║╚██████╔╝██║ ╚████║   ██║   ███████╗██║  ██╗
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal. (Version 1.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          Hello how are you?! Stay healthy and don't forget to drink water!
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section text-sm">
        <PreImg>
          {`
              ,----------------,              ,---------,
         ,-----------------------,          ,"        ,"|
       ,"                      ,"|        ,"        ,"  |
      +-----------------------+  |      ,"        ,"    |
      |  .-----------------.  |  |     +---------+      |
      |  |                 |  |  |     | -==----'|      |
      |  |                 |  |  |     |         |      |
      |  |    hi           |  |  |/----| ---=    |      |
      |  |                 |  |  |   ,/|==== ooo |      ;
      |  |                 |  |  |  // |(((( [33]|    ,"
      |  '-----------------'  |," .;'| |((((     |  ,"
      +-----------------------+  ;;  | |         |," 
         /_)______________(_/  //'   | +---------+
    ___________________________/___  ',
   /  oooooooooooooooo  .o.  oooo /,   \,"-----------
  / ==ooooooooooooooo==.o.  ooo= //   ,'\--{)B     ,"
 /_==__==========__==_ooo__ooo=_/'   /___________,"
 '-----------------------------'
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
