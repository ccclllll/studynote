import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap, Router} from '@angular/router';

export interface MenuItem {
  /** 菜单项标题 */
  title: string;

  /** 菜单的名称 用于标识*/
  name?: any;

  /** 子菜单项 */
  items?: MenuItem[];

  /** 菜单图标 */
  icon?: string;

  /** 路由链接 */
  routerLink ?: string;

  /** 点击菜单项响应事件 */
  command ?: Function;

  /** 为每个菜单项挂接的数据 */
  tag?: any;
}

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {

  @Input() items: MenuItem[];
  @Output() activeRouter: EventEmitter<any> = new EventEmitter<any>();

  constructor(public  router: Router, public activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.reorganizationMenuOptions(this.items);
    // 获取当前路由的区段
    let activeChildRouter = null;
      this.activatedRoute.snapshot.children.forEach(res => {
      res.url.forEach(url => activeChildRouter = url.path);
    });
    activeChildRouter && (this.filterActiveOption(this.items, activeChildRouter));
  }

  /**菜单项数据的重置，这是组件添加内部交互的功能*/
  reorganizationMenuOptions(menuItems: any[]) {
    if (menuItems && menuItems instanceof Array) {
      menuItems.forEach(item => {
        item.active = false;
        if (item.items && item.items instanceof Array) {
          item.items.forEach(res => {
            if (item.indent) {
              res.indent = item.indent + 18;
            } else {
              res.indent = 18;
            }
          });
          this.reorganizationMenuOptions(item.items);
        }

        if (!item.command) {
          item.command = () => {
          };
        }
      })
    }
  }

  /** 筛选激活的项 --  防止 页面刷新后 菜单栏 折叠了*/
  filterActiveOption(items, activeRoute) {
    for (const item of items) {
      if (item.name && (item.name === activeRoute)) {
        item.active = true;
        if (item.parent) {
          this.trackParent(item.parent);
        }
        this.alreadyActiveRouter(item);
      } else {
        if (item.items && item.items.length) {
          for (const child of item.items) {
            child.parent = item;
          }
          this.filterActiveOption(item.items, activeRoute);
        }
      }
    }
  }

  /*追踪父项*/
  trackParent(option) {
    option.active = true;
    if (option.parent) {
      this.trackParent(option.parent);
    }
  }

  /**菜单项激活*/
  isActive(items, item) {
    if (item.items) {
      item.active = !item.active;
      item.active && this.alreadyActiveRouter(item);
    } else {
      item.active = true;
      this.alreadyActiveRouter(item);
    }

    items.forEach(res => {
      if (res !== item) {
        res.active = false;
      }
    });
  }

  /** 已经激活的菜单项*/
  alreadyActiveRouter(item: any) {
    this.activeRouter.emit(item);
  }
}
