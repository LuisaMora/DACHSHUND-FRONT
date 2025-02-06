import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoversComponent } from "./pages/lovers/lovers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dachshund';
}

