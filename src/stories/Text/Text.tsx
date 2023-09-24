import React from "react";
import { ContentText } from "./Text.style";
import { TextProps } from "./Text.types";


export default function Text({ 
  className, TextTag, Text }: TextProps) {
return (
<ContentText>
  <TextTag className={className}>
    {Text}
  </TextTag>
</ContentText>
)
}