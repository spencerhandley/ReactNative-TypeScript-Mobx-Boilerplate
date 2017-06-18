import { observable, action } from 'mobx';

export default class CounterStore {
    @observable count: number;

    constructor(start: number = 0){
        this.count = start;
    }

    @action.bound
    public increment(): void {    
        this.count++;
    }

    @action.bound
    public decrement(): void {               
        this.count--;
    }
}