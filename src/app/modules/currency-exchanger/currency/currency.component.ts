import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LatestData, Timeseries } from '@app/@core/data/Api';
import { AppService } from '@app/@core/services/app.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  public data?: LatestData 
  public timeseries?: Timeseries
  constructor(
    private appService: AppService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.appService.LatestEUR().subscribe(res => {
      this.data = res
      console.log(res)
    })
    this.route.params.subscribe( params => {
      
    this.appService.timeseries("start:string", "end:string", params['type'], []).subscribe(res => {
      this.timeseries = res
      console.log(res)
    })
    })

  }

}
