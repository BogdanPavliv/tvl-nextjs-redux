import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const ButtonBorder: React.FC<Props> = ({children}) => {
  return (
    <a className="button-border" href="#">{children}</a>
  )
}

export default ButtonBorder;