
import { Cep } from './../EdCep/cep.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CEPService {
  emmitCep ={}
  constructor(private http:HttpClient) { }

search(cep:string){
  return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
  .toPromise().then((res:Response) =>{
    this.emmitCep = this.converterResp(res)
   return  this.converterResp(res)
  
  })
  }
  private converterResp(cepRes):Cep{
    let cep = new Cep()
    cep.cep = cepRes.cep;
    cep.logradouro = cepRes.logradouro;
    cep.cidade = cepRes.localidade
    cep.bairro = cepRes.bairro
    cep.complemento = cepRes.complemento
    cep.numero = cepRes.unidade
    cep.estado  =  cepRes.uf
    return cep

  }


}
