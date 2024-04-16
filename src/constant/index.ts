import generateUUID from "@/utils/index";
import type { OptionItem } from "@/components/answerCard/AnswerCard";

export interface QuestionItem {
  sort: number;
  question: string;
  options: OptionItem[];
  correct: number;
  id: string;
  selectValue: number
}

const QUESTION_OPTIONS = [
  {
    question: "下列陈述哪一项最符合你?",
    options: [
      {
        sort: 1,
        label: "我认真对待每项工作任务。",
      },
      {
        sort: 2,
        label: "接触新事物能带给我乐趣。",
      },
      {
        sort: 3,
        label: "面对挑战，我跃跃欲试。",
      },
    ],
    correct: 3,
  },
  {
    question: "下列陈述哪一项最符合你?",
    options: [
      {
        sort: 1,
        label: "比赛中我一心想超过别人。",
      },
      {
        sort: 2,
        label: "我常往自己身上揽活。",
      },
      {
        sort: 3,
        label: "我喜欢当众表现自己。",
      },
    ],
    correct: 1,
  },
  {
    question: "下列陈述哪一项最符合你",
    options: [
      {
        sort: 1,
        label: "我喜欢在实践中学习。",
      },
      {
        sort: 2,
        label: "设定目标时我常着眼于未来。",
      },
      {
        sort: 3,
        label: "我做事力求精确",
      },
    ],
    correct: 2,
  },
];

const QUESTIONS: QuestionItem[] = QUESTION_OPTIONS.map((item, index) => {
  const uuid = generateUUID();
  item.options.forEach((opts) => {
    opts["parentId"] = uuid;
  });
  return {
    id: uuid,
    sort: index + 1,
    selectValue: 0,
    ...item,
  };
});

export const NUMBER2ENG = [
  {
    value: 1,
    label: "A",
  },
  {
    value: 2,
    label: "B",
  },
  {
    value: 3,
    label: "C",
  },
  {
    value: 4,
    label: "D",
  },
];

export default QUESTIONS;
