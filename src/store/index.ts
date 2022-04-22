import SampleStore from "./SampleStore";

export class RootStore {
  SampleStore: SampleStore
  constructor() {
      this.SampleStore = new SampleStore(this);
  }
}

export const store = new RootStore();
