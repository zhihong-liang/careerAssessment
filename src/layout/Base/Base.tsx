import React, { useMemo } from "react";
import { View, ScrollView, ScrollViewProps } from "@tarojs/components";
import "./styles.scss";

export interface IProps extends ScrollViewProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  popup?: React.ReactNode;
  scroll?: boolean;
}

const Base = ({
  className,
  children,
  header = null,
  footer = null,
  popup = null,
  scroll = true,
  onScroll,
  scrollTop,
  onRefresherRefresh,
  refresherEnabled,
  refresherTriggered,
  onScrollToUpper,
}: IProps) => {
  const scrollView = useMemo(() => {
    return (
      <ScrollView
        className="scrollview"
        scrollY
        scrollWithAnimation
        scrollTop={scrollTop || 0}
        onScroll={onScroll}
        bounces={false}
        onRefresherRefresh={onRefresherRefresh}
        refresherEnabled={refresherEnabled}
        refresherTriggered={refresherTriggered}
        onScrollToUpper={onScrollToUpper}
      >
        {children}
      </ScrollView>
    );
  }, [
    children,
    onRefresherRefresh,
    onScroll,
    onScrollToUpper,
    refresherEnabled,
    refresherTriggered,
    scrollTop,
  ]);
  const content = scroll ? scrollView : children;

  return (
    <View className={`wrapper ${popup ? "popup-open" : ""}`}>
      <View className="header">{header}</View>
      <View className={`main ${className ? className : ""}`}>{content}</View>
      <View className="footer">{footer}</View>
      <View className="popup" style={{ display: popup ? "block" : "none" }}>
        {popup}
      </View>
    </View>
  );
};

export default Base;
