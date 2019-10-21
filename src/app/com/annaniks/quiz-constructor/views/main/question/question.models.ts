export interface IQuestionAnswer {
  id: number;
  question: string;
  is_begin: boolean;
  question_answer: QuestionAnswer[];
  question_create: string;
  url: string;
}

export interface QuestionRequestModel {
  question: string;
  is_begin: boolean
}

export interface QuestionResponseModel {
  id: number;
  question: string;
  is_begin: boolean;
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
  question: string;
}

export interface QuestionCombinationResponse {
  id: number;
  question: string;
  is_begin: boolean;
  question_answer: QuestionAnswer[];
  question_create: string;
  url: string;
}