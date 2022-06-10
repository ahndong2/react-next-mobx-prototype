import styles from './Tooltip.module.scss';

export interface TooltipProps {}

const Tooltip = (props: TooltipProps) => {
  console.log('Tooltip : ', props);

  return <div className={styles.Tooltip}>Tooltip</div>;
};
export { Tooltip };
