import { useStore } from '@/store';
import { observer } from 'mobx-react';

const SampleMobx = observer(() => {
  const store = useStore(null);
  const {
    number,
    object,
    array,
    addNumber,
    double,
    changeObject,
    addArray,
    flowApi,
    runInActionAPI,
  } = store.SampleStore;

  const changeObjectAction = () => {
    changeObject('number', object.number + 1);
  };
  const addArrayAction = () => {
    const idx = array.length;
    addArray(idx, array[idx - 1] + 1);
  };

  return (
    <>
      {number} / {double} : <button onClick={addNumber}>addNumber</button>
      <br />
      {JSON.stringify(object)} : <button onClick={changeObjectAction}>changeObject</button>
      <br />
      {JSON.stringify([...array])} : <button onClick={addArrayAction}>addArray</button>
      <br />
      <button onClick={flowApi}>flowApi</button>
      <br />
      <button onClick={runInActionAPI}>runInActionAPI</button>
      <br />
    </>
  );
});

export { SampleMobx };

export function getStaticProps() {
  return { props: { initialState: { lastUpdate: Date.now() } } };
}
