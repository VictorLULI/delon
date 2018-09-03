import { Component, Input, QueryList, ContentChildren } from '@angular/core';
import { NaAvatarListItemComponent } from './avatar-list-item.component';

@Component({
  selector: 'avatar-list',
  template: `
  <ul class="avatar-list__wrap">
    <li *ngFor="let i of _items" class="avatar-list__item{{_size ? ' avatar-list__item-' + _size : ''}}">
      <nz-tooltip *ngIf="i.tips" [nzTitle]="i.tips">
        <nz-avatar nz-tooltip [nzSrc]="i.src" [nzText]="i.text" [nzIcon]="i.icon" [nzSize]="_avatarSize"></nz-avatar>
      </nz-tooltip>
      <nz-avatar *ngIf="!i.tips" [nzSrc]="i.src" [nzText]="i.text" [nzIcon]="i.icon" [nzSize]="_avatarSize"></nz-avatar>
    </li>
  </ul>
  `,
  host: { '[class.avatar-list]': 'true' },
  preserveWhitespaces: false,
})
export class NaAvatarListComponent {
  _size = '';

  _avatarSize = '';

  @Input()
  set size(value: 'large' | 'small' | 'mini' | 'default') {
    this._size = value === 'default' ? '' : value;
    switch (value) {
      case 'large':
      case 'small':
      case 'default':
        this._avatarSize = value;
        break;
      default:
        this._avatarSize = 'small';
        break;
    }
  }

  @ContentChildren(NaAvatarListItemComponent)
  _items: QueryList<NaAvatarListItemComponent>;
}
