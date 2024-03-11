import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questions: { [key: number]: string } = {
    1: "What is the capital of France?",
    2: "How many continents are there in the world?",
    3: "Who wrote 'Romeo and Juliet'?",
    4: "What is the boiling point of water in Celsius?",
    5: "Which planet is known as the 'Red Planet'?",
    
  };
  getQuestionById(id: number): string {
    return this.questions[id] || 'Question not found';
  }

  constructor() { }
}