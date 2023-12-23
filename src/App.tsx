import { FC, useState } from "react";

import "./style.css";
import Toggle from "./Toggle";

export const App: FC<{ name: string }> = ({ name }) => {
  const [value, setValue] = useState<boolean>(false);

  const handlerOnCLickToggle = (): void => {
    setValue(!value);
  };

  return (
    <div>
      <Toggle value={value} onToggleSwitchClick={handlerOnCLickToggle} />
    </div>
  );
};
