import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConvertData, Symbols } from '@app/@core/data/Api';
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
 
  constructor(
    private service:AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {}
  

  ngOnInit(): void {
      // this.service.Latest().subscribe(res => this.rates = Object.keys(res.rates))

    this.convert = new FormGroup({
      amount: new FormControl('1',Validators.required),
      from: new FormControl('',Validators.required),
      to: new FormControl('',Validators.required)
    });
    this.activatedRoute.data.pipe( //featch tha data by Resolver 
      map((data) => {
       return data
       })
      ).subscribe(res =>{
      this.symbols = res['resolve']     
    })
  } //end of ngOnInit

  conver(form: FormGroup):void {  
    this.service.convert(form.value.from,form.value.to, form.value.amount).pipe(
      map( res => {
        res.info.timestamp = this.format_time(+res.info.timestamp) //change timestamp to time
        res.query.from = this.symbols[res.query.from]  //change symbol of currency to full name 
        res.query.to = this.symbols[res.query.to]
         return  res
      })
    ).subscribe( (res:ConvertData) => this.details = res )
  } // end of function


  swap():void {
    let formValue = this.convert.controls['from'].value
    let toValue   = this.convert.controls['to'].value

    this.convert.controls['from'].patchValue(toValue)
    this.convert.controls['to'].patchValue(formValue)
  }// end of function


  format_time(s:number):string { //change timestamp to time
    const dtFormat = new Intl.DateTimeFormat('en-GB', {
      timeStyle: 'medium',
      timeZone: 'UTC'
    });
    return dtFormat.format(new Date(s * 1e3));
  }// end of function

  navigate(): void
  {
    let from = this.convert.controls['from'].value
    let to   = this.convert.controls['to'].value
    let amount   = this.convert.controls['amount'].value
    this.router.navigate([`/currency-exchanger/details/${from}/${to}/${amount}`]);
  }

}
