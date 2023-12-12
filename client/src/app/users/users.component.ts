import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // Corrected to 'styleUrls'
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Consider defining a User type for better type checking
  newUser = { username: '', email: '' };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(
      data => this.users = data,
      error => {
        console.error(error);
        // Consider adding more robust error handling here
      }
    );
  }
}

