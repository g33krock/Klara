import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, {
  providers: [
    HttpClientModule, // Provide HttpClientModule here
  ]
}).catch(err => console.error(err));

