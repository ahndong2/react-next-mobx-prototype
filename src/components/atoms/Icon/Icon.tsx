import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Icon.module.scss';

type SizeProps =
  | '2xs'
  | 'xs'
  | 'sm' // 0.875em
  | 'lg' // 1.25em
  | 'xl'
  | '2xl'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x';
const Icon = (props) => {
  // console.log('Icon : ', props);
  const { className = '' } = props;
  return (
    <>
      <FontAwesomeIcon {...props} className={`${styles.root} ${className}`} />
    </>
  );
};
export { Icon };
