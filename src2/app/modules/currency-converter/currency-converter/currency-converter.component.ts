import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '@app/@core/services/app.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  convert!: FormGroup;
  rates?: string[]
  symbols : {[key: string]: string}= {}

  // from:string;
  // to?:string

  constructor(private service:AppService) {

  }
  

  ngOnInit(): void {
    
    this.convert = new FormGroup({
      amount: new FormControl(''),
      from: new FormControl(''),
      to: new FormControl('')
    });

    // this.service.Latest().subscribe(res => {
      
    //   this.rates = Object.keys(res.rates)
    // })

    this.service.symbols().subscribe(res => {
      this.symbols = res.symbols
      console.log(this.symbols)

        console.log(this.symbols['AMD'])
    })

  }

  onSubmit(form: FormGroup):void {
       console.log('Valid?', form.valid);
       console.log('amount', form.value.amount)
       console.log('amount', form.value)


    this.service.convert(form.value.amount,form.value.to,form.value.amount).subscribe(res => {
      console.log(res)
    })
  
  }


  swap(form: FormGroup):void {
    let formValue = this.convert.controls['from'].value
    let toValue   = this.convert.controls['to'].value

    this.convert.controls['from'].patchValue(toValue)
    this.convert.controls['to'].patchValue(formValue)

  }
}
