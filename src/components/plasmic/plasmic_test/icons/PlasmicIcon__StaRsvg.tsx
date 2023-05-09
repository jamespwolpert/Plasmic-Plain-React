// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type StaRsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function StaRsvgIcon(props: StaRsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 42"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.5 0l-2.809 13.783L7.681 5.03l6.707 12.364-14.061.373 13.085 5.159L2.88 32.25l13.341-4.459-2.074 13.912 7.353-11.99 7.353 11.99-2.074-13.912 13.34 4.459-10.532-9.324 13.086-5.16-14.061-.372L35.32 5.03l-11.011 8.753L21.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default StaRsvgIcon;
/* prettier-ignore-end */
