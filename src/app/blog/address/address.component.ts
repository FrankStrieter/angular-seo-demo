import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wmd-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() contact;
  constructor() {}

  ngOnInit() {}
}
