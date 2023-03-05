import { ReactJSXIntrinsicAttributes } from "@emotion/react/types/jsx-namespace";

export interface buttonStandardPropsInterface {
  title: string,
  onClickHandler?: React.MouseEventHandler<HTMLElement> | undefined,
  type?: string | undefined
}

export interface linkIconPropsInterface {
  title: string,
  link: string,
  linkIcon?: JSX.Element | undefined,
  iconPosition?: String | undefined,
  external: Boolean
}