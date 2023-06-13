import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export function useBtnEvent() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const btnFunction = {
    can: () => navigate(-1),

    add: async () => {
      if (!pathname.includes("add")) return navigate(pathname + "/add");
      const res = await axios.get("api");
    },

    mod: async () => {
      const res = await axios.get("api");
    },

    del: () => {},

    down: () => {},
  };

  const btnEvent = e => {
    const btnName = e.target.dataset.btn;
    return btnFunction[btnName]();
  };

  return btnEvent;
}
