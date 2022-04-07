import { AdviceService } from './../../services/advice.service';
import { Component, OnInit } from '@angular/core';
import { AdviceResponse } from 'src/app/models/advice-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public adviceId:number | undefined
  public adviceMensage:string | undefined

  constructor(
    private adviceService:AdviceService
  ) { }

  ngOnInit(): void {
    this.getAdvice()
  }

  getAdvice(){
    this.adviceService.getAdvice().subscribe((res: AdviceResponse) => {
      console.log(res.slip)
      this.adviceId = res.slip.id;
      this.adviceMensage = res.slip.advice;
    })
  }

}
