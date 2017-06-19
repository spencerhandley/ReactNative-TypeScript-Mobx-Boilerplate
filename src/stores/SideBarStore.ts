import { observable, action } from 'mobx';

export default class SideBarStore {
  @observable public isOpen: boolean;

  constructor() {
    this.isOpen = false;
  }

  @action
  toggleSideMenu(): void {
    this.isOpen = !this.isOpen;
  }
}
