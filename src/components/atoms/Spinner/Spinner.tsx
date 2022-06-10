import * as Loader from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export interface SpinnerProps {
  type?: string;
  width?: number;
  height?: number;
  color?: string;
  strokeColor?: string;
  strokeWidth?: number;
  ariaLabel?: string;
}

const defaultProps: SpinnerProps = {
  type: 'RotatingLines',
  width: 50,
  height: 50,
  strokeWidth: 3,
};

// 참고 https://mhnpd.github.io/react-loader-spinner/grid
const Spinner = (props: SpinnerProps) => {
  const { type, width, height, color, strokeColor, strokeWidth, ariaLabel } = props;

  const CustomSpinner = Loader[type];

  return (
    <div className={styles.root}>
      <CustomSpinner
        width={width}
        height={height}
        color={color}
        strokeColor={strokeColor}
        strokeWidth={strokeWidth}
        ariaLabel={ariaLabel}
      />
    </div>
  );
};
Spinner.defaultProps = defaultProps;
export { Spinner };
