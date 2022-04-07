import { AdviceResponse } from './../models/advice-response';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {tap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  private API = '	https://api.adviceslip.com/advice'

  constructor(
    private http: HttpClient
  ) { }

  getAdvice():Observable<AdviceResponse>{
    return this.http.get<AdviceResponse>(this.API)
  }
}
