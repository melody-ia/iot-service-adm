import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export function useBtnEvent() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const btnFunction = {
    can: () => {
      const split = pathname.split("/");
      const backPage = split.slice(0, split.length - 1).join("/");
      return navigate(backPage);
    },

    add: async () => {
      if (!pathname.includes("add")) return navigate(pathname + "/add");
      const res = await axios.get("url");
    },

    mod: () => navigate(pathname + "/mod"),

    del: () => {},

    down: () => {},
  };

  const btnEvent = e => {
    const btnName = e.target.dataset.btn;
    return btnFunction[btnName]();
  };

  return btnEvent;
}
