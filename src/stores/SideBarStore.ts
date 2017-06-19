import { observable, action } from 'mobx';

export default class SideBarStore {
  @observable public isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  @action
  openSideMenu(): void {
    this.isOpen = true;
  }

  @action
  closeSideMenu(): void {
    this.isOpen = false;
  }
}
