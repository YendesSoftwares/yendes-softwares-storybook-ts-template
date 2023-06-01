import type { CSSProperties, FC as ReactFC, ReactNode } from 'react';

import { useHover } from './hooks';

import styles from './styles/Button00001.module.scss';

interface Props {
    /**
     * What us background color to use
     */
    backgroundColor?: string;
    /**
     * Border radius to apply
     */
    borderRadius?: string;
    /**
     * Should this button extends classes?
     */
    className?: string | undefined;
    /**
     * Button contents
     */
    children: ReactNode;
    /**
     * Custom height for button
     */
    height?: string;
    /**
     * Size for button
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Should this button extends styles?
     */
    style?: CSSProperties;
    /**
     * Text color on button
     */
    textColor?: string;
    /**
     * Custom width for button
     */
    width?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export const Button00001: ReactFC<Props> = ({
    backgroundColor = '#333333',
    borderRadius = 'full',
    className,
    children = 'Click me',
    height,
    size = 'medium',
    style,
    textColor = '#ffffff',
    width,
    onClick = () => null,
    ...props
}) => {
    const { isHover, onMouseEnter, onMouseLeave } = useHover();
    return (
        <button
            className={
                className ? `${styles.button} className` : `${styles.button}`
            }
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                background: backgroundColor,
                borderRadius:
                    borderRadius === 'full'
                        ? '30px'
                        : borderRadius === 'medium'
                        ? '6px'
                        : borderRadius,
                boxShadow: isHover
                    ? `0px 0px 15px ${backgroundColor}`
                    : `0px 0px 0px ${backgroundColor}`,
                color: textColor,
                height: height ? height : size === 'large' ? '52px' : size === 'small' ? '32px' : '40px',
                lineHeight: size === 'large' ? '52px' : size === 'small' ? '32px' : '40px',
                minWidth: width ? width : size === 'large' ? '160px' : size === 'small' ? '120px' : '140px',
                ...style
            }}
            {...props}
        >
            {children}
        </button>
    );
};
