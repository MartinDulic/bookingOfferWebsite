"use client";
import { useFeatureValue } from "@growthbook/growthbook-react";

const AbTest = ({featureKey, fallBack}) => {

  const featureValue = useFeatureValue(featureKey, fallBack);

  return (
    <>{featureValue}</>
  )
}

export default AbTest