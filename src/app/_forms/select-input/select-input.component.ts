import { Component, Input,  Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})

export class SelectInputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() options :  Map<number, string> = new  Map<number, string>();
  @Input() multiple = false;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }
  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
  }
  registerOnTouched(fn: any): void {
  }

  get control():  FormControl {
    return this.ngControl.control as FormControl
  }
}
