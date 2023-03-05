import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { buttonStandardPropsInterface, linkIconPropsInterface, buttonConfigurationPropsInterface } from '../type/layout'

export const MotionButton = (buttonProps: buttonStandardPropsInterface) => {
  const { title, onClickHandler, type, iconElement, iconPosition, size } = buttonProps
  return (
    <button onClick={ onClickHandler } className={ `motion-button-default inline-flex align-items-center${ iconPosition === 'right' ? ' flex-direction-row-reverse' : ' flex-direction-row' }${ type === 'outlined' ? ' button-outlined' : '' }${ size ? ` ${size}` : '' }` }>
      { iconElement ? <span className='icon-element-wrapper'>{ iconElement }</span> : null }
      <span className='configuration-label'>{ title }</span>
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

export const ConfigurationButton:FC<buttonConfigurationPropsInterface> = (buttonProps) => {
  const { title, onClickHandler, buttonStyle, iconElement, iconPosition } = buttonProps
  return (
    <button onClick={ onClickHandler } className={`configuration-button inline-flex align-items-center ${ buttonStyle ? buttonStyle : 'default'} ${ iconPosition === 'right' ? 'flex-direction-row-reverse' : 'flex-direction-row' }` }>
      { iconElement ? <span className='icon-element-wrapper'>{ iconElement }</span> : null }
      <span className='configuration-label'>{ title }</span>
    </button>
  )
}