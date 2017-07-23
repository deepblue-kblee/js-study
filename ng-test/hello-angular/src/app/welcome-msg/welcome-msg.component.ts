import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  userName = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_MSEC = 5000;

  ngAfterViewInit(): void {
    const checkTouchedFn = () => {
      if (this.valid) return;
      //alert('이름을 입력해 주세요.');
      console.log('이름을 입력해 주세요.');
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
}
