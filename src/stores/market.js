import { observable, action, computed } from "mobx";

export default class MarketStore {
  @observable selectedItems = [];

  @action
  put = (name, price) => {
    const exists = this.selectedItem.find((item) => item.name === name);
    if (!exists) {
      this.selectedItem.push({
        name,
        price,
        count: 1,
      });
      return;
    }
    exists.count++;
  };

  @action
  take = (name) => {
    const itemToTake = this.selectedItem.find((item) => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      this.selectedItem.remove(itemToTake);
    }
  };

  @computed
  get total() {
    console.log(`총합 계산...`);
    return this.selectedItem.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  }
}
