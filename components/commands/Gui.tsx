import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { useRouter } from 'next/router'

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);
  const router = useRouter()
  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    router.push("http://localhost:3000/",)
  }

  return <span></span>;
};

export default Gui;
