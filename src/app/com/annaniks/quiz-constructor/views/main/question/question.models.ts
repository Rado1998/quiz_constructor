export interface IQuestionAnswer {
  url: string;
  id: number,
  answer: string,
  question: string,
  question_answer: QuestionAnswer[]
}

export interface QuestionRequestModel {
  question: string;
}

export interface QuestionResponseModel {
  id: number;
  question: string;
  question_answer: QuestionAnswer[];
  question_create: string;
  url: string;
}

export interface QuestionAnswer {
  answer: string;
  id: number;
  question: string;
  url: string;
}

export interface QuestionAnswerRequest {
  question_id: number,
  question_answer: Answer[]
}

export interface Answer {
  answer: string
}

export interface EmptyResponse {
  message: string
}

export interface QuestionCombinationRequest {
  answers: string;
  question: string
}