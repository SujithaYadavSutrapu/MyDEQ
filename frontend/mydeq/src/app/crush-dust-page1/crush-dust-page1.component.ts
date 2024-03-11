import { Component } from '@angular/core';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crush-dust-page1',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './crush-dust-page1.component.html',
  styleUrl: './crush-dust-page1.component.scss'
})
export class CrushDustPage1Component {
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
  onSubmit() {
      this.router.navigate(['/crush-dust-page2']);
  }
  onPrevious(){
    this.router.navigate(['/crush-dust']);    
  }
}
