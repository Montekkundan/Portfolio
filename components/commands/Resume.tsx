import { useContext, useEffect } from "react";
import { termContext } from "../Terminal";
import { checkRedirect, generateTabs, getCurrentCmdArry, isArgInvalid } from "../../utils/funcs";
import router from "next/router";
import { ProjectsIntro } from "../styles/Projects.styled";
import Usage from "../Usage";
import { Cmd, CmdDesc, CmdList, HelpWrapper } from "../styles/Help.styled";
const Resume: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

   /* ===== get current command ===== */
   const currentCommand = getCurrentCmdArry(history);

     /* ===== check current command makes redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "resume")) {
      resume.forEach(({ id, url }) => {
        id === parseInt(arg[1]) &&  router.push(url);
      });

    }
  }, [arg, rerender, currentCommand]);

    /* ===== check arg is valid ===== */
    const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="resume" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <HelpWrapper data-testid="resume">
      <ProjectsIntro>Here are my resume links</ProjectsIntro>
      {resume.map(({ id, title, url, tab }) => (
        <CmdList key={title}>
          <Cmd>{`${id}. ${title}`}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {url}</CmdDesc>
        </CmdList>
      ))}
      <Usage cmd="resume" marginY />
    </HelpWrapper>
  );
};
const resume = [
  {
    id: 1,
    title: "Defualt",
    url: "https://github.com/Montekkundan",
    tab: 1,
  },
  {
    id: 2,
    title: "Google",
    url: "https://discord.com/users/702170848508903444",
    tab: 2,
  },
  {
    id: 3,
    title: "Netflix",
    url: "https://www.linkedin.com/in/montekkundan",
    tab: 1,
  },
];

export default Resume;
