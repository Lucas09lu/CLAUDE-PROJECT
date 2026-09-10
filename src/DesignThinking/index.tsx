import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Cover } from "./Cover";
import { Problem } from "./Problem";
import { StageScene } from "./StageScene";
import { Conclusion } from "./Conclusion";
import { STAGES } from "./theme";

const COVER_DURATION = 150;
const PROBLEM_DURATION = 270;
const STAGE_DURATION = 240;
const CONCLUSION_DURATION = 180;

export const DesignThinkingBlackBerry: React.FC = () => {
  let cursor = 0;
  const coverStart = cursor;
  cursor += COVER_DURATION;
  const problemStart = cursor;
  cursor += PROBLEM_DURATION;
  const stageStarts = STAGES.map(() => {
    const start = cursor;
    cursor += STAGE_DURATION;
    return start;
  });
  const conclusionStart = cursor;

  return (
    <AbsoluteFill style={{ backgroundColor: "#0A0C10" }}>
      <Sequence from={coverStart} durationInFrames={COVER_DURATION}>
        <Cover />
      </Sequence>
      <Sequence from={problemStart} durationInFrames={PROBLEM_DURATION}>
        <Problem />
      </Sequence>
      {STAGES.map((stage, i) => (
        <Sequence key={stage.key} from={stageStarts[i]} durationInFrames={STAGE_DURATION}>
          <StageScene stage={stage} />
        </Sequence>
      ))}
      <Sequence from={conclusionStart} durationInFrames={CONCLUSION_DURATION}>
        <Conclusion />
      </Sequence>
    </AbsoluteFill>
  );
};
