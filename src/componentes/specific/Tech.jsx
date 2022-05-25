import React from "react";

export default function Tech(props) {
  return (
    <div
      className="flex flex-row justify-center items-center gap-1 border py-1 px-2 rounded-lg cursor-default"
      style={{ color: props.color, borderColor: props.color }}
    >
      {props.icon}
      <p className="text-sm">{props.value}</p>
    </div>
  );
}
