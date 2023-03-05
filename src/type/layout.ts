import { ReactJSXIntrinsicAttributes } from "@emotion/react/types/jsx-namespace";

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