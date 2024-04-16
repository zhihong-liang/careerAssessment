import { useEffect, useState } from "react";
import { View } from "@tarojs/components";

import Content from "@/layout/Content/Content";
import Option from "./Option";

import styles from "./AnswerCard.module.scss";
import Taro from "@tarojs/taro";

export interface OptionItem {
  sort: number;
  label: string;
}

interface IProps {
  id: any;
  sort: number;
  question: string;
  options: OptionItem[];
  correct: number;
  selectValue?: number;
  onSelect?: (options: any) => void;
}

const AnswerCard = ({
  id,
  sort,
  question,
  options,
  correct,
  selectValue,
  onSelect = () => {},
}: IProps) => {
  const [animationData, setAnimationData] = useState<any>();

  useEffect(() => {
    const animation = Taro.createAnimation({
      duration: 300,
      timingFunction: "linear",
      delay: 0,
    });
    animation.opacity(0).step();
    setAnimationData(animation.export());

    setTimeout(() => {
      animation.opacity(1).step();
      setAnimationData(animation.export());
    }, 300)
  }, []);

  const handleOptionClick = (index) => {
    onSelect({ id, index });
  };

  return (
    <Content className={styles["answer_card_root"]}>
      <View className={styles["answer_card"]} animation={animationData}>
        <View className={styles["answer_card_header"]}>
          第{sort}题：{question}
        </View>

        <View className={styles["answer_card_content"]}>
          {options.map((item) => {
            return (
              <Option
                {...item}
                active={selectValue === item.sort}
                onClick={handleOptionClick}
              />
            );
          })}
        </View>
      </View>
    </Content>
  );
};

export default AnswerCard;
