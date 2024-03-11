import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crush-dust',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule , CommonModule],
  templateUrl: './crush-dust.component.html',
  styleUrl: './crush-dust.component.css'
})
export class CrushDustComponent {
  title = 'project';
  contactForm!: FormGroup;
  expirationDate!: string;
  showText: boolean = false;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      comment: [''],
      option: [''] // 'option' is the form control for radio buttons
    });
    const currentDate = new Date();
    const expirationDate = new Date();
    expirationDate.setFullYear(currentDate.getFullYear() + 5);
    this.expirationDate = `${expirationDate.getMonth() + 1}/${expirationDate.getDate()}/${expirationDate.getFullYear()}`;
    console.log(expirationDate)
  }
  displayText(): void {
    this.showText = this.contactForm.get('option')?.value === 'option2';
  }
  onSubmit() {
      this.router.navigate(['/crush-dust-page1']);    
  }
  onPrevious(){
    this.router.navigate(['/']);    
  }
}
