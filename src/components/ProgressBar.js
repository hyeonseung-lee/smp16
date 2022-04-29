import React from "react";
import Progress from "@material-tailwind/react/Progress";

export default function ProgressBar({ value }) {
  return <Progress color="lightBlue" value={value} percentage={true} />;
}
