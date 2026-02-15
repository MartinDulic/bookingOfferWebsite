// "use client";
// import { useFeatureValue } from "@growthbook/growthbook-react";

// const AbTest = ({featureKey, fallBack}) => {

//   const featureValue = useFeatureValue(featureKey, fallBack);

//   return (
//     <>{featureValue}</>
//   )
// }

// export default AbTest

// "use client";
// import { useGrowthBook } from "@growthbook/growthbook-react";

// const AbTest = ({ featureKey, fallBack }) => {
//   const gb = useGrowthBook();
  
//   // If we have the GB instance, get the value. 
//   // If not (first render), use the fallback immediately.
//   const featureValue = gb ? gb.getFeatureValue(featureKey, fallBack) : fallBack;

//   return <>{featureValue}</>;
// }

// export default AbTest;


"use client";
import { useGrowthBook } from "@growthbook/growthbook-react";
import { useEffect } from "react";

const AbTest = ({ featureKey, fallBack }) => {
  const gb = useGrowthBook();
  const featureValue = gb ? gb.getFeatureValue(featureKey, fallBack) : "";

  useEffect(() => {
    // As soon as this component mounts/updates on the client, 
    // we signal the AntiFlicker to show the content.
    if (window.showAbContent) {
      window.showAbContent();
    }
  }, [gb]);

  return <span className="gb-ab-test">{featureValue}</span>;
}

export default AbTest;