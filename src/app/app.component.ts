import { AppState } from './app.reducer';
import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ilumno Docker Angular';
  mode = environment.name;
  dato$ : Observable<any>;

  constructor(private store : Store<{texto:string}>){
    this.dato$ = store.select("texto");
  }
  showMensajeHome(){
    this.store.dispatch({ type : "Home"});
  }
  showMensajeRegister(){
    this.store.dispatch({ type : "Registro"});
  }
}
