import { SampleTemplate } from '@/components';
import { observer } from 'mobx-react'
import {store} from '@/store';

const SampleContainer = observer(() => {
  const addNumber = () => {
    store.SampleStore.addNumber();
  }
  const changeObject = () => {
    store.SampleStore.changeObject('number', store.SampleStore.object.number+1);
  }
  const addArray = () => {
    const idx = store.SampleStore.array.length;
    store.SampleStore.addArray(idx, store.SampleStore.array[idx-1] + 1)
  }
  const flowApi = () => {
    store.SampleStore.flowApi();
  }
  const runInActionAPI = () => {
    store.SampleStore.runInActionAPI();
  }
  
  return <>
    <SampleTemplate />
    {store.SampleStore.number} / {store.SampleStore.double} : <button onClick={addNumber}>addNumber</button><br/>
    {JSON.stringify(store.SampleStore.object)} : <button onClick={changeObject}>changeObject</button><br/>
    {JSON.stringify([...store.SampleStore.array])} : <button onClick={addArray}>addArray</button><br/>
    <button onClick={flowApi}>flowApi</button><br/>
    <button onClick={runInActionAPI}>runInActionAPI</button><br/>
  </>
});

export { SampleContainer };
