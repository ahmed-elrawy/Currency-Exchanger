import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConvertData } from '@app/@core/data/Api';
import { Symbols } from '@app/@core/data/fake-symbole-data';
import { AppService } from '@app/@core/services/app.service';
import { map } from 'rxjs';

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
  // from:string;
  // to?:string

  constructor(private service:AppService) {

  }
  

  ngOnInit(): void {
    console.log(this.format_time(1519328414))

    this.convert = new FormGroup({
      amount: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl('')
    });

    // this.service.Latest().subscribe(res => {
    //   this.rates = Object.keys(res.rates)
      
    // })

    this.service.symbols().subscribe(res => {
      console.log(res)
       this.symbols = res
      console.log(this.symbols)

      //   console.log(this.symbols['AMD'])
    })

  }

  onSubmit(form: FormGroup):void {
      
    this.service.convert(form.value.from,form.value.to, form.value.amount).pipe(
      map( res => {
         return  res
      })
    ).subscribe( (res:ConvertData) => {

      res.info.timestamp = this.format_time(+res.info.timestamp) //change timestamp to time
      res.query.from = this.symbols[res.query.from]  //full name of currency
      res.query.to = this.symbols[res.query.to]

      this.details = res
      console.log(res)
      
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
}
