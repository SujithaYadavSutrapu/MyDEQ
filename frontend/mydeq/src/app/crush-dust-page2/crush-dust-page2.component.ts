import { Component } from '@angular/core';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-crush-dust-page2',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './crush-dust-page2.component.html',
  styleUrl: './crush-dust-page2.component.scss'
})
export class CrushDustPage2Component {
  title = 'project';
  contactForm!: FormGroup;
  expirationDate!: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      comment: [''],
      option: [''] // Assuming 'option' is the form control for radio buttons
    });

  }

  onSubmit(){
    // if (this.contactForm.valid) {
      this.router.navigate(['/crush-dust-page3']);
    // }
  }
  onPrevious(){
    this.router.navigate(['/crush-dust-page1']);    
  }
}
