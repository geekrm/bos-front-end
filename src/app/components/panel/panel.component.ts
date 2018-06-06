import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LastLoggedInfo } from '../../models/lastloggedinfo';
import { LastloggedService } from '../../services/lastlogged.service';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  lastLoggedDate = '';
  lastLoggedIP   = '';

  constructor(private lastLoggedService: LastloggedService) { }

  ngOnInit() {
    this.lastLoggedService.getMyLastLoggedInfo().subscribe(data => this.setLastLoggedInfo(data));
  }
  
  private setLastLoggedInfo(lastLoggedInfo: LastLoggedInfo) {
    this.lastLoggedDate = lastLoggedInfo.lastLoggedDate;
    this.lastLoggedIP = lastLoggedInfo.lastLoggedIP;
  }

}
