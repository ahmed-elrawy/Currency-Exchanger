import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConvertData, Symbols } from '@app/@core/data/Api';
import { AppService } from '@app/@core/services/app.service';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  convert!: FormGroup;
  rates?: string[]
  symbols : Symbols= {}

  details?: ConvertData
 
  constructor(private service:AppService, private router: Router) {

  }
  

  ngOnInit(): void {

    this.convert = new FormGroup({
      amount: new FormControl('1'),
      from: new FormControl(''),
      to: new FormControl('')
    });

    // this.service.Latest().subscribe(res => {
    //   this.rates = Object.keys(res.rates)
      
    // })

    this.service.symbols().subscribe(res => {
       this.symbols = res

      //   console.log(this.symbols['AMD'])
    })

  }

  conver(form: FormGroup):void {
      
    this.service.convert(form.value.from,form.value.to, form.value.amount).pipe(
      map( res => {
         return  res
      })
    ).subscribe( (res:ConvertData) => {

      res.info.timestamp = this.format_time(+res.info.timestamp) //change timestamp to time
      res.query.from = this.symbols[res.query.from]  //full name of currency
      res.query.to = this.symbols[res.query.to]
      this.details = res      
    })
  
  }


  swap():void {
    let formValue = this.convert.controls['from'].value
    let toValue   = this.convert.controls['to'].value

    this.convert.controls['from'].patchValue(toValue)
    this.convert.controls['to'].patchValue(formValue)

  }

  format_time(s:number):string {
    const dtFormat = new Intl.DateTimeFormat('en-GB', {
      timeStyle: 'medium',
      timeZone: 'UTC'
    });
    return dtFormat.format(new Date(s * 1e3));
  }

  navigate(): void
  {
    let from = this.convert.controls['from'].value
    let to   = this.convert.controls['to'].value
    let amount   = this.convert.controls['amount'].value
    this.router.navigate([`/currency-exchanger/details/${from}/${to}/${amount}`]);
  }

}
