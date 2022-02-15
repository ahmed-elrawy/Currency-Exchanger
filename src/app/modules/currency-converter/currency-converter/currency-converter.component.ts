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

    this.service.Latest().subscribe(res => {
      
      this.rates = Object.keys(res.rates)
    })
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('amount', form.value.amount);
  
  }


  swap(form: FormGroup) {
    let formValue = this.convert.controls['from'].value
    let toValue   = this.convert.controls['to'].value
    this.convert.controls['from'].patchValue(toValue)
    this.convert.controls['to'].patchValue(formValue)

  }
}
