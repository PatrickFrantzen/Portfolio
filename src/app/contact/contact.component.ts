import { Component } from '@angular/core';
import { EmailValidator, NgForm, Validators, FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  /*fullName:string ='';
  email:string = '';
  message:string = '';*/
  contactForm;

constructor(private formBuilder: FormBuilder) {

  this.contactForm = this.formBuilder.group( {
    fullname: ['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    message:['', [Validators.required, Validators.minLength(3)]],
  })
}

get fullname() {
  return this.contactForm.get('fullname');
}

get email() {
  return this.contactForm.get('email');
}

get message() {
  return this.contactForm.get('mesage');
  
}

  /*onSubmit(form: NgForm) {
    console.log('Your form Data :', form.value);
    form.reset();
  }*/

  onSubmit() {
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
