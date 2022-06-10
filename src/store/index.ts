import { useMemo } from 'react';
import { enableStaticRendering } from 'mobx-react';
import { SampleStore, initialSample } from './SampleStore';

// NextJS 특정, 서버 측 렌더링하지 않음
enableStaticRendering(typeof window === 'undefined');

const isServer = typeof window === 'undefined';
let rootStore = null;
export class RootStore {
  SampleStore: SampleStore;
  constructor(initialData) {
    this.SampleStore = new SampleStore(initialData, this);
  }
}

function initializeStore(initialData = initialSample) {
  // ssr과 ssg는 항상 새로운 store를 생성함
  if (isServer) return new RootStore(initialData);
  // client에서 한번 store를 생성
  if (rootStore === null) rootStore = new RootStore(initialData);

  return rootStore;
}

export function useStore(initialState) {
  const rootStore = useMemo(
    () => initializeStore({ ...initialSample, ...initialState }),
    [initialState]
  );
  return rootStore;
}
