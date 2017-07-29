import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  userName = '';
  welcomeMsg = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_MSEC = 5000;

  constructor(public i18nSupporter: I18nSupportService, private snackbar: MdSnackBar) {
  }

  ngAfterViewInit(): void {
    const checkTouchedFn = () => {
      if (this.valid) return;
      console.log('이름을 입력해 주세요.');
      //alert('이름을 입력해 주세요.');
      this.snackbar.open('이름을 입력해 주세요', '확인', {duration: 3000});
    };

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_MSEC);
  }

  // onKeyUp(name: string) {
  //   var nm = name.trim();
  //   console.log('[' + name + '][' + nm + ']');
  //   this.valid = nm.length > 0;
  // }

  onChange() {
    this.valid = this.userName.length > 0;
  }

  setName(name) {
    this.userName = name;
  }

  showWelcomMsg() {
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
  }
}
