import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputValue: string = '';
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Display the form values in the console (you can send them to a server or perform other actions)
      console.log('Form submitted:', this.myForm.value);
    }
  }
}
