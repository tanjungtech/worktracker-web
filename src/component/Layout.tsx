import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { buttonStandardPropsInterface, linkIconPropsInterface, buttonConfigurationPropsInterface, inputIconPropsInterface } from '../type/layout'

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
    <button onClick={ onClickHandler } className={`configuration-button inline-flex align-items-center ${ buttonStyle ? buttonStyle : 'default'}${ iconPosition === 'right' ? ' flex-direction-row-reverse' : ' flex-direction-row' }` }>
      { iconElement ? <span className='icon-element-wrapper'>{ iconElement }</span> : null }
      <span className='configuration-label'>{ title }</span>
    </button>
  )
}

export const InputIconDefault:FC<inputIconPropsInterface> = (inputProps) => {
  const { placeholder, type, initVal, size, iconElement, borderType, iconPosition, onChangeHandler, fullwidth, fullWidthExtended } = inputProps
  return (
    <div className={ `inline-flex justify-content-flex-end align-items-center${ iconElement ? iconPosition === 'right' ? ' input-icon right-icon' : ' input-icon left-icon' : '' }${ fullWidthExtended ? ' fullwidth extended' : '' }` }>
      { iconElement ? <span className='icon-element-wrapper'>{ iconElement }</span> : null }
      <input onChange={ onChangeHandler } type={ type } placeholder={ placeholder } value={ initVal } className={ `default-input${ fullwidth ? ' fullwidth' : '' }${ size ? ` ${size}` : '' }${ borderType ? ` ${ borderType }` : '' }${ iconElement ? iconPosition === 'right' ? ' right-icon' : ' left-icon' : '' }` } />
    </div>
  )
}