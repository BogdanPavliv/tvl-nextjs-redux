import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const ButtonGreen: React.FC<Props> = ({children}) => {
  return (
    <a className="button-green" href="#">{children}</a>
  )
}

export default ButtonGreen;