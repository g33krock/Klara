import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] // Corrected to 'styleUrls'
})
export class UsersComponent implements OnInit {
  users: any[] = []; // Consider defining a User type for better type checking
  newUser = { username: '', email: '' };

  constructor(private apiService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.apiService.getUser().subscribe(
      data => this.users = [data],
      error => {
        console.error(error);
        document.write(JSON.stringify(error));
        // Consider adding more robust error handling here
      }
    );
  }
}

