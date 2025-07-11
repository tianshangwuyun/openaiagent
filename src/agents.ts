import { Agent, tool } from '@openai/agents';
import { aisdk } from '@openai/agents-extensions';
import { createOpenAI } from '@ai-sdk/openai';

import z from 'zod';


const openaiClient = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
});

const model = aisdk(openaiClient(process.env.OPENAI_MODEL!));


const getWeather = tool({
  name: 'getWeather',
  description: 'Get the weather for a given city',
  parameters: z.object({
    city: z.string(),
  }),
  execute: async ({ city }) => {
    return `The weather in ${city} is sunny.`;
  },

  needsApproval: true,
});

export const agent = new Agent({
  name: 'Basic Agent',
  instructions: 'You are a basic agent.',
  tools: [getWeather],
  model,
});
