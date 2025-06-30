import { NextApiRequest, NextApiResponse } from 'next';

type AssistantResponse = {
  answer: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AssistantResponse>
) {
  const { question } = req.query;

  let answer = "Sorry, I don't understand that question.";

  // Define responses (customize as needed)
  if (typeof question === 'string') {
    const lowerQuestion = question.toLowerCase();
    if (lowerQuestion.includes('framework') || lowerQuestion.includes('react')) {
      answer = "Sheila knows React, Tailwind CSS, and Next.js.";
    } else if (lowerQuestion.includes('tool') || lowerQuestion.includes('figma')) {
      answer = "Sheila uses Git, VS Code, Figma, and Canva.";
    } else if (lowerQuestion.includes('experience') || lowerQuestion.includes('web')) {
      answer = "Sheila has hands-on experience in HTML, CSS, and JavaScript.";
    }
  }

  res.status(200).json({ answer });
}