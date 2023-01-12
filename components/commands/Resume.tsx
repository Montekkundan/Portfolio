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
   if (rerender && currentCommand[0] === "resume" && currentCommand.length <= 1) {
    // add 5 second delay
     setTimeout(() => {
      document.getElementById("dot1")?.classList.remove("hidden")
      setTimeout(() => {
        document.getElementById("dot2")?.classList.remove("hidden")
        setTimeout(() => {
          document.getElementById("dot3")?.classList.remove("hidden")
          setTimeout(() => {
            router.push("/resume");
          }, 500)
        }, 1000)
      }, 1000)
    }, 1000)
   
    

  }


  return (
   <p >opening resume <span className="hidden" id="dot1">.</span><span className="hidden"  id="dot2">.</span>
   <span className="hidden"  id="dot3">.</span></p>
  );
};


export default Resume;
