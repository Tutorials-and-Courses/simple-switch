import { FC, useState } from 'react';

import './style.css';
import Toggle from './Toggle';

export const App: FC<{ name: string }> = ({ name }) => {
  const [value, setValue] = useState(false);

  const handlerOnCLickToggle = () => {
    setValue(!value);
  };

  return (
    <div>
      <Toggle value={value} onClick={handlerOnCLickToggle} />
    </div>
  );
};
