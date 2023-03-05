import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { buttonStandardPropsInterface, linkIconPropsInterface } from '../type/layout'

export const MotionButton = (buttonProps: buttonStandardPropsInterface) => {
  const { title, onClickHandler, type } = buttonProps
  return (
    <button onClick={ onClickHandler } className={`motion-button-default${type === 'outlined' ? ' button-outlined' : ''}`}>
      { title }
    </button>
  )
}

export const LinkIconButton: FC<linkIconPropsInterface> = ({ title, link, linkIcon, iconPosition, external }) => {
  return external?
    <a className={ `link-icon-button ${ iconPosition === 'right' ? 'flex-direction-row-reverse' : 'flex-direction-row' }` } href={link}>
      { linkIcon }{ title }
    </a>
    :
    <Link to={{ pathname: link }} className={ `link-icon-button ${ iconPosition === 'right' ? 'flex-direction-row-reverse' : 'flex-direction-row' }` }>
      { linkIcon }{ title }
    </Link>
}