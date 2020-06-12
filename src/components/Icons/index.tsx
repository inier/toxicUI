import React from 'react';

import './index.scss';
import classnames from '../../utils/classNames';

interface IProps {
  name: string;
  dot?: boolean;
  badge?: boolean;
  color?: string;
  size?: string;
  classPrefix?: string;
  tag?: 'i' | 'span';
  click?: Function;
}

const baseClass = 'toxic-icon';

export default function Icon({
  name,
  dot,
  badge,
  color,
  size,
  classPrefix = baseClass,
  tag,
  click
}: IProps) {
  const CustomTag = tag || 'i' || 'span';
  const containerProps = {
    className: classnames(`${classPrefix}__container`, [
      {
        dot: dot || badge
      }
    ])
  };
  const iconProps = {
    className: `${classPrefix} ${classPrefix}-${name}`,
    style: {
      fontSize: '28px'
    }
  };

  if (color)
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        color
      }
    });

  if (size) {
    Object.assign(iconProps, {
      style: {
        ...iconProps.style,
        fontSize: size
      }
    });
  }
  if (click) {
    Object.assign(iconProps, {
      onClick: click
    });
  }

  return (
    <div {...containerProps}>
      {dot && !badge && <span className={`${classPrefix}--dot`} />}
      {badge && <span className={`${classPrefix}--badge`}>{badge}</span>}
      <CustomTag {...iconProps} />
    </div>
  );
}
