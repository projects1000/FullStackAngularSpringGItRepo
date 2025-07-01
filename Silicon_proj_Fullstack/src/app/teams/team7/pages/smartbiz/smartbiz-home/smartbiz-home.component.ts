import { Component } from '@angular/core';

@Component({
  selector: 'app-smartbiz-home',
  templateUrl: './smartbiz-home.component.html',
  styleUrls: ['./smartbiz-home.component.css']
})
export class SmartbizHomeComponent {
  smartbizMembers = [
    { label: 'SmartBiz - Akansha', route: 'akansha' },
    { label: 'SmartBiz - Arpita', route: 'arpita' },
    { label: 'SmartBiz - Ipsita', route: 'ipsita' },
    { label: 'SmartBiz - Jyoti', route: 'jyoti' },
    { label: 'SmartBiz - Sajeya', route: 'sajeya' },
    { label: 'SmartBiz - Shobha', route: 'shobha' },
    { label: 'SmartBiz - Soma', route: 'soma' },
  ];
}
