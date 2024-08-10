declare module "react-scroll" {
  import * as React from "react";

  export interface LinkProps {
    href: string;
    to?: string;
    spy?: boolean;
    smooth?: boolean;
    offset?: number;
    duration?: number;
    isDynamic?: boolean;
    onSetActive?: () => void;
    onSetInactive?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    ignoreCancelEvents?: boolean;
    delay?: number;
    href?: string;
    containerId?: string;
    activeClass?: string;
    className?: string;
    children?: React.ReactNode;
  }

  export class Link extends React.Component<LinkProps> {}
}
