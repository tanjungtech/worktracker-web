export interface buttonStandardPropsInterface {
  title: string,
  onClickHandler?: React.MouseEventHandler<HTMLElement> | undefined,
  type?: string | undefined,
  iconElement?: JSX.Element | undefined,
  iconPosition?: String | undefined,
  size?: String | undefined
}

export interface linkIconPropsInterface {
  title: string,
  link: string,
  linkIcon?: JSX.Element | undefined,
  iconPosition?: String | undefined,
  external?: Boolean | undefined
}

export interface buttonConfigurationPropsInterface {
  title: string,
  buttonStyle?: string | undefined,
  iconElement?: JSX.Element | undefined,
  iconPosition?: String | undefined,
  onClickHandler?: React.MouseEventHandler<HTMLElement> | undefined
}

export interface inputIconPropsInterface {
  placeholder?: string | undefined,
  type?: string | undefined,
  size?: string | undefined,
  iconElement?: JSX.Element | undefined,
  iconPosition?: string | undefined,
  onChangeHandler?: React.ChangeEventHandler<HTMLElement> | undefined,
  initVal?: string | undefined,
  borderType?: string | undefined,
  borderBottomOnly?: Boolean | undefined,
  fullwidth?: Boolean | undefined,
  fullWidthExtended?: Boolean | undefined
}