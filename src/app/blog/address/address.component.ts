import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../core/models/author';

@Component({
  selector: 'wmd-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() contact: Author;
  constructor() {}

  ngOnInit() {}
}
