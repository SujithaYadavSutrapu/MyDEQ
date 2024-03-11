import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  bottomLeftText: string = 'Get New or Add an existing permit/registration/certificate';
  showRightButtons: boolean = true;
  myApplicationsClicked: boolean = false;
  myStuffClicked: boolean = false;
  http = inject(HttpClient);
  posts: any = [];

  ngOnInit(): void {
    this.fetchPosts();
  }
  fetchPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .subscribe((posts: any) => {
        // console.log(posts);
        this.posts = posts;
      })
  }

  handleMyStuffClick() {
    this.bottomLeftText = 'View Permits/registrations/certificates, and modify, termiante or renew by clicking SELECT AN ACTION';
    this.showRightButtons = false;
    this.myApplicationsClicked = false;
    this.myStuffClicked = true;
  }

  handleMyApplicationsClick() {
    this.bottomLeftText = 'Get New or Add an existing permit/registration/certificate';
    this.showRightButtons = true;
    this.myApplicationsClicked = true;
    this.myStuffClicked = false;
  }

}
