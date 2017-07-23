import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrls: ['./lang-selector.component.css']
})
export class LangSelectorComponent implements OnInit {
  langCode = 'ko';

  constructor() { }

  ngOnInit() {
  }

  setLangCode(langCode) {
    this.langCode = langCode;
  }
}
