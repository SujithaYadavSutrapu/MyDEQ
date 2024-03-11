import { Component } from '@angular/core';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-crush-dust-page3',
  standalone: true,
  imports: [RouterOutlet,FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './crush-dust-page3.component.html',
  styleUrl: './crush-dust-page3.component.scss'
})
export class CrushDustPage3Component {
  title = 'project';
  contactForm!: FormGroup;
  expirationDate!: string;
  showText: boolean = false;
  selectedFile: File | undefined;


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
  onUploadEvent(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  onUpload(){
    this.showText = this.contactForm.get('option')?.value === 'option2';
  }

  onSubmit(){
    // if (this.contactForm.valid) {
      this.router.navigate(['/crush-dust-page3']);
    // }
  }
  onPrevious(){
    this.router.navigate(['/crush-dust-page2']);    
  }
}
