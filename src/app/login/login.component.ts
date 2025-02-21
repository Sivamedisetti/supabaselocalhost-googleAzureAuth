import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private supabase:SupabaseService, private router:Router){ }
     async loginWithgoogle(){
      await this.supabase.signInWithGoogle().then(()=> {
      });
    }

    async loginwithAzure(){
      await this.supabase.signInWithAzure();
    }


    
}
