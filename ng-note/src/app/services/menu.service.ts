import {Injectable} from "@angular/core";

@Injectable()
export class MenuService {
  items: any;

  setItems(items) {
    this.items = items;
  }

  getItems(): any {
    return this.items;
  }
}
