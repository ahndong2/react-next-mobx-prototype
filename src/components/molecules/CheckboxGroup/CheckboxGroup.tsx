import styles from './CheckboxGroup.module.scss';

export interface CheckboxGroupProps {}
const defaultProps: CheckboxGroupProps = {};

const CheckboxGroup = (props) => {
  // console.log('CheckboxGroup : ', props);
  const { className, children } = props;

  return (
    <div {...props} className={`${styles.root} ${className}`}>
      {children}
    </div>
  );
};
CheckboxGroup.defaultProps = defaultProps;

export { CheckboxGroup };
