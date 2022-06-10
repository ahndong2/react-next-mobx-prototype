import styles from './TextEditor.module.scss';

export interface TextEditorProps {}

const TextEditor = (props: TextEditorProps) => {
  console.log('TextEditor : ', props);

  return <div className={styles.TextEditor}>TextEditor</div>;
};
export { TextEditor };
