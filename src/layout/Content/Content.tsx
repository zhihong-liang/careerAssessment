import React, { useMemo } from "react";
import { View, Text } from "@tarojs/components";
import clas from "classnames";
import "./Content.scss";

export type IProps = {
  children: React.ReactNode;
  title?: string;
  className?: any;
  action?: React.ReactNode;
};

const Content = ({ children, title, action, className }: IProps) => {
  const header = useMemo(
    () =>
      title ? (
        <View className="content-header">
          <Text>{title}</Text>
          {action ? action : null}
        </View>
      ) : null,
    [title, action]
  );

  return (
    <View className={clas(className, "content")}>
      {header}
      <View>{children}</View>
    </View>
  );
};

export default Content;
