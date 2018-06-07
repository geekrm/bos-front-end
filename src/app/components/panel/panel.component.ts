import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { LastLoggedInfo } from '../../models/lastloggedinfo';
import { UserLastLogged } from '../../models/userlastlogged';
import { LastloggedService } from '../../services/lastlogged.service';
import { SigninService } from '../../services/signin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  lastLoggedDate = '';
  lastLoggedIP   = '';
  lastLoggedItems: Array<UserLastLogged> = [];
  role = localStorage.getItem('role');
  username = localStorage.getItem('username');
  showList = this.role === 'ADMIN';

  constructor(
    private lastLoggedService: LastloggedService, 
    private signInService: SigninService, 
    private router: Router) { 
  
  }

  ngOnInit() {
    this.lastLoggedService.getMyLastLoggedInfo().subscribe(data => this.setLastLoggedInfo(data));

    if (this.showList) {
      this.lastLoggedService.getAllLastLoggedInfo().subscribe(data => this.setAllLastLoggedItems(data));
    }
    
  }
  
  public signOut() {
    this.signInService.signOut();
    this.router.navigate(['/login']);
  }
  
  private setLastLoggedInfo(lastLoggedInfo: LastLoggedInfo) {
    this.lastLoggedDate = lastLoggedInfo.lastLoggedDate;
    this.lastLoggedIP = lastLoggedInfo.lastLoggedIP;
  }
  
  private setAllLastLoggedItems(items: Array<UserLastLogged>) {
    this.lastLoggedItems = items;
  }

}
