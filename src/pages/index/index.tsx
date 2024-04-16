import { useEffect, useState } from "react";
import { Button, Rate } from "@taroify/core";
import QUESTIONS from "@/constant/index";
import { View } from "@tarojs/components";
import type { QuestionItem } from "@/constant/index";

import Content from "@/layout/Content/Content";
import AnswerCard from "@/components/answerCard/AnswerCard";

import styles from "./index.module.scss";

const index = () => {
  // 1：question; 2: result
  const [step, setStep] = useState("result");
  const [questions, setQuestions] = useState<QuestionItem[]>([...QUESTIONS]);
  const [currentQuestion, setCurrentQuestion] = useState<QuestionItem>();
  const [currentSort, setCurrentSort] = useState<number>(0);

  useEffect(() => {
    if (!questions.length) setQuestions([...QUESTIONS]);
    setCurrentQuestion(questions[0]);
    setCurrentSort(1);
  }, []);

  const handleSelect = (values) => {
    const index = questions.findIndex((item) => item.id === values.id);
    const newArr = [...questions];

    if (currentQuestion) {
      newArr.splice(index, 1, {
        ...currentQuestion,
        selectValue: values.index,
      });
      setQuestions(newArr);
    }

    setTimeout(() => {
      handleNext();
    }, 100);
  };

  const handleNext = () => {
    if (currentSort >= questions.length) return;
    setCurrentSort(currentSort + 1);
    setCurrentQuestion(questions[currentSort]);
  };

  const handlePrev = () => {
    if (currentSort <= 1) return;
    setCurrentSort(currentSort - 1);
    setCurrentQuestion(questions[currentSort - 2]);
  };

  return (
    <Content className={styles["main"]}>
      <View className={styles["main_root"]}>
        {step === "question" ? (
          <View className={styles["main_root_content"]}>
            {/* 进度 */}
            <View className={styles["main_root_content_process"]}>
              <View className={styles["currentSort"]}>
                {currentQuestion?.sort}/{questions.length}
              </View>
            </View>
            {/* 问题卡片 */}
            <View className={styles["main_root_content_questionsCard"]}>
              {/* {currentQuestion?.sort === currentSort && (
                <AnswerCard
                  {...currentQuestion}
                  sort={currentSort}
                  onSelect={handleSelect}
                />
              )} */}
              {questions.map((item, index) => {
                return currentSort === index + 1 ? (
                  <AnswerCard
                    {...item}
                    sort={index + 1}
                    onSelect={handleSelect}
                  />
                ) : null;
              })}
            </View>
          </View>
        ) : (
          <View className={styles["main_root_result"]}>
            <View className={styles["main_root_result_content"]}>
              <View className={styles["comments"]}>评分较弱</View>
              <Rate
                style={{ marginTop: "20px" }}
                defaultValue={3.3}
                readonly
                allowHalf
                size={30}
              />
            </View>
          </View>
        )}

        <View className={styles["main_root_footer"]}>
          {step === "question" ? (
            <>
              <Button
                variant="contained"
                color="primary"
                shape="round"
                block
                onClick={handlePrev}
              >
                上一题
              </Button>
              <Button
                variant="contained"
                color="primary"
                shape="round"
                block
                onClick={() => {
                  currentSort === questions.length
                    ? setStep("result")
                    : handleNext();
                }}
              >
                {currentSort === questions.length ? "提交" : "下一题"}
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              shape="round"
              block
              onClick={() => {
                setQuestions([...QUESTIONS]);
                setCurrentQuestion(QUESTIONS[0]);
                setCurrentSort(1);
                setStep('question')
              }}
            >
              重新作答
            </Button>
          )}
        </View>
      </View>
    </Content>
  );
};

export default index;
