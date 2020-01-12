import { NgModule } from '@angular/core';
import { NZ_ICONS } from 'ng-zorro-antd';

import {
  ArrowLeftOutline,
  ContainerOutline,
  DashboardOutline,
  DeleteTwoTone,
  EyeOutline,
  FormOutline,
  MenuFoldOutline,
  MenuUnfoldOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  ContainerOutline,
  ArrowLeftOutline,
  EyeOutline,
  DeleteTwoTone
];

@NgModule({
  providers: [
    {provide: NZ_ICONS, useValue: icons}
  ]
})
export class IconsProviderModule {
}
