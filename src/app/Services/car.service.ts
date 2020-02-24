import { ClientsService } from './clients.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Veiculo } from './../register-client/veiculo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  readonly url: string = 'http://localhost:3000/list1'
  private CartSub$ : BehaviorSubject<Veiculo[]> = new BehaviorSubject<Veiculo[]>(null)
  private loaded : boolean= false;
  constructor(private http: HttpClient, private clienteService: ClientsService) { }
// ALGUEM ME AJUDA AQ Q EU TO PRESOOOOOO
  get(): Observable<Veiculo[]>{
      if(!this.loaded){
        combineLatest(
       this.http.get<Veiculo[]>(this.url),
        this.clienteService.get()).pipe(map(([car, user])=>{
          for(let p of car){
            let ids = (p.user as string[])
            console.log(p)
            p.user = ids.map((id)=>user.find(u =>u.id ==id))
          }
          return car

        }),
        tap((car)=>{ console.log(car)})
        )
        
        
      //this.http.get<Veiculo[]>(`${this.url}/list1`).pipe( tap((car)=>console.log(car)))
      .subscribe(this.CartSub$)
     this.loaded = true
      }
      return this.CartSub$.asObservable()
  }
  editCar(c:Veiculo): Observable<Veiculo>{
    return this.http.patch<Veiculo>(`${this.url}/list/${c.id}`, c)
   }

}

