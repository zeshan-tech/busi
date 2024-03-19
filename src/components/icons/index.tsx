import { ComponentType, MouseEvent } from "react";
import { CircularProgress, IconButton, IconButtonProps, ListItemIcon, SvgIconProps, Tooltip, TooltipProps } from "@mui/material";

import { default as MuiLoginRounded } from "@mui/icons-material/LoginRounded";
import { default as MuiFavoriteOutlined } from "@mui/icons-material/FavoriteOutlined";
import { default as MuiFavoriteRounded } from "@mui/icons-material/FavoriteRounded";

export interface IconWrapperProps extends SvgIconProps {
  iconButton?: boolean;
  disableRipple?: boolean;
  tooltip?: string;
  onClick?: (e: MouseEvent<EventTarget>) => void;
  tooltipPlacement?: TooltipProps["placement"];
  isListIcon?: boolean;
  iconButtonProps?: IconButtonProps;
  loading?: boolean;
  disabled?: boolean;
}

const withIconWrapper = (WrappedOutlinedIcon: ComponentType<IconWrapperProps>) => {
  return ({ onClick, disableRipple, isListIcon, tooltip, tooltipPlacement, iconButton, iconButtonProps, loading, disabled, sx, solid, ...restProps }: IconWrapperProps) => {
    const renderIcon = () => <WrappedOutlinedIcon {...restProps} />;

    if (isListIcon) {
      return <ListItemIcon sx={sx}>{renderIcon()}</ListItemIcon>;
    }

    if ((onClick || iconButton) && iconButton !== false) {
      return (
        <IconButton disableRipple={disableRipple} sx={sx} disabled={loading || disabled} onClick={onClick} color='inherit' {...iconButtonProps}>
          <Tooltip title={tooltip} placement={tooltipPlacement}>
            {loading ? <CircularProgress size={25} /> : renderIcon()}
          </Tooltip>
        </IconButton>
      );
    }

    return (
      <Tooltip title={tooltip} placement={tooltipPlacement} sx={sx} onClick={onClick}>
        {loading ? <CircularProgress size={25} /> : renderIcon()}
      </Tooltip>
    );
  };
};

export const LoginRounded = withIconWrapper(MuiLoginRounded);
export const FavoriteRounded = withIconWrapper(MuiFavoriteRounded);
export const FavoriteOutlined = withIconWrapper(MuiFavoriteOutlined);
