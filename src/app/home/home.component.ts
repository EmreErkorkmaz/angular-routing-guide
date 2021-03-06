import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLogin: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogin(){
    this.auth.login();
    this.isLogin = this.auth.loggedIn;
  }

  onLogout(){
    this.auth.logout();
    this.isLogin = this.auth.loggedIn;
  }

}
