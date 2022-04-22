import { action, makeObservable, observable, computed, flow, runInAction  } from "mobx";
import {RootStore} from "@/store";
import { sampleAPI, sampleUpdateAPI } from "@/api";
import { SampleObject, SampleArray} from '@/types';
class SampleStore {
  readonly rootStore: RootStore;
  number:number = 0;
  object:SampleObject = {number: 1 , string: 'test'};
  array: SampleArray = [1,2,3,4,5];
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    // observable 은 state를 저장하는 추적 가능한 필드를 정의합니다.
    // action은 state를 수정하는 메서드를 표시합니다.
    // computed는 state로부터 새로운 사실을 도출하고 그 결괏값을 캐시 하는 getter를 나타냅니다.

    // makeObservable(target, annotations?, options?)
    makeObservable(this, {
      number: observable,
      object: observable,
      array: observable,
      addNumber: action,
      double: computed,
      changeObject: action,
      addArray: action,
      removeArray: action,
      flowApi: flow,
      runInActionAPI: action
    });
  }
  get double():number {
    return this.number * 2;
  }
  addNumber = ():void => {
    this.number = this.number + 1;
  }
  changeObject = (key:string, value:number|string):void => {
    this.object[key] = value;
    // this.object = {
    //   ...this.object,
    //   [key] : value
    // }
  }
  addArray = (idx, data):void => {
    this.array.splice(idx, 0, data);
  }
  removeArray = (idx):void => {
    this.array.splice(idx, 1);
  }

  // flowApi = flow(function* (){
  //   const res = yield sampleAPI('flow');
  //   try{
  //     console.log(res);
  //   }catch(e){
  //     console.log(e.message)
  //   }
  // });
  *flowApi() {
    const res = yield sampleUpdateAPI();
    try{
      console.log(res);
      this.array = res;
    }catch(e){
      console.log(e.message)
    }
  }
  
  runInActionAPI = async ():Promise<void> => {
    const res = await sampleAPI('runInActionAPI');
    runInAction(()=>{
      console.log(res);
    })
  }
}

export default SampleStore;