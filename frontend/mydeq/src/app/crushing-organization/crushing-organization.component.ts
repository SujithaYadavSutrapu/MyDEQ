import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crushing-organization',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './crushing-organization.component.html',
  styleUrl: './crushing-organization.component.css'
})
export class CrushingOrganizationComponent {
  constructor(private router: Router) {}
  
  onLiClick(companyName: string) {
    
    // Assuming "crushindex" is the route you want to navigate to
    // You can replace it with your actual route
    this.router.navigate(['/crushindex']);
  }

}
