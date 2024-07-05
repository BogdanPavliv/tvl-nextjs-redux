import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode;
}

const ButtonOrange: React.FC<Props> = ({children}) => {
  return (
    <a className="button-orange" href="#">{children}</a>
  )
}

export default ButtonOrange;