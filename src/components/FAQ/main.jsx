import React from 'react';
import { QuestionCard } from './questionCard';
import { questions} from '../../data/faquestions'

export const FAQ = () => {

  return (
    <div className="container mx-auto p-6 text-center bg-white rounded-2xl">
      <h2 className="text-5xl font-semibold mb-6">Frequently Asked Questions</h2>
      <div className='flex flex-col space-y-4 text-left'>
        {questions.map((item, index) => (
            <QuestionCard key={index} question={item.question} answer={item.answer} number={index+1} />
        ))}
      </div>
    </div>
  );
};
