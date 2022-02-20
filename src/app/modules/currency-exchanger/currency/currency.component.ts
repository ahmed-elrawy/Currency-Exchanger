import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LatestData, Timeseries } from '@app/@core/data/Api';
import { AppService } from '@app/@core/services/app.service';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  public  data?: LatestData 
  public  timeseries?: Timeseries
  public  xAxisData:string[] = []
  public  base?:number[] = []
  public  AUD?:number[] = []
  public  CAD?:number[] = []
  public  options!: EChartsOption;

  constructor( private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe( params => {
    this.appService.Currency( params['type']).subscribe(res => {
      this.data = res
    })
    
    this.appService.timeseries("start:string", "end:string", params['type'], "").subscribe(res => {
      this.timeseries = res
      console.log(res)
        this.xAxisData = Object.keys(this.timeseries?.rates)
        this.xAxisData.forEach((key, index) => {
          if(res.base== "EUR") {
            this.base?.push(this.timeseries!.rates[key]['USD'])
          } else {this.base?.push(this.timeseries!.rates[key]['EUR'])}
          this.AUD?.push(this.timeseries!.rates[key]['AUD'])
          this.CAD?.push(this.timeseries!.rates[key]['CAD'])
       });
      })
    })

    this.options = {
      legend: {
        data: ['USD', 'AUD', 'CAD'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: this.xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'USD',
          type: 'bar',
          data: this.base,
          animationDelay: (idx:number) => idx * 10,
        },
        {
          name: 'AUD',
          type: 'bar',
          data: this.AUD,
          animationDelay: (idx:number) => idx * 10 + 100,
        },
        {
          name: 'CAD',
          type: 'bar',
          data: this.CAD,
          animationDelay: (idx:number) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx:number) => idx * 5,
    };



  }





}
