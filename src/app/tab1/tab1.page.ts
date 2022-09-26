import {Component, OnInit} from '@angular/core';
import TCGdex from '@tcgdex/sdk';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
  ) {}

  async ngOnInit(): Promise<void> {
    const tcgdex = new TCGdex();
    const cards = await tcgdex.fetch('cards');
  }

}
