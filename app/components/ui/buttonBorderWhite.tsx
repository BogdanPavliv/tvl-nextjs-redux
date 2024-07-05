import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

const ButtonBorderWhite: React.FC<Props> = ({children}) => {
  return (
    <a className="button-border-white" href="#">{children}</a>
  )
}

export default ButtonBorderWhite;