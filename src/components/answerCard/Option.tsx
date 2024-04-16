import { View } from "@tarojs/components";
import { NUMBER2ENG } from "@/constant/index";
import clas from "classnames";
import styles from "./Option.module.scss";
import { useMemo } from "react";

interface IProps {
  sort: number;
  label: string;
  active: boolean;
  onClick: (index: number) => void;
}

const Option = ({ sort, active, label, onClick }: IProps) => {
  const finalSort = useMemo(() => {
    let text = "";
    text = NUMBER2ENG.find((v) => v.value === sort)?.label || sort.toString();
    text += ". ";
    return text;
  }, [sort]);

  return (
    <View
      className={clas(styles["Option"], styles[`${active ? "active" : ""}`])}
      onClick={() => onClick(sort)}
    >
      <View className="sort">{finalSort}</View>
      <View className="label">{label}</View>
    </View>
  );
};

export default Option;
