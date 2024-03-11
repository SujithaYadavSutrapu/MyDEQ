import { Component } from '@angular/core';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dummy-question',
  standalone: true,
  imports: [],
  templateUrl: './dummy-question.component.html',
  styleUrl: './dummy-question.component.css'
})
export class DummyQuestionComponent {
  constructor(private questionService: QuestionService) {}

  getQuestionById(id: number): string {
    return this.questionService.getQuestionById(id);
  }

}
