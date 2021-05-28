import React from "react";
import { GiRank1, GiRank2, GiRank3 } from "react-icons/gi";
import { BsFillBookmarkFill } from "react-icons/bs";

interface RankIconProps {
  upVotes?: number;
  downVotes?: number;
}

export const RankIcon: React.FC<RankIconProps> = ({
  upVotes = 100,
  downVotes = 20,
}) => {
  let rankPer =
    upVotes + downVotes === 0
      ? 0
      : Math.round((upVotes / (upVotes + downVotes)) * 100);
  if (rankPer === 0) {
    return <BsFillBookmarkFill size="40px" />;
  } else if (rankPer > 0 && rankPer <= 69) {
    return <GiRank1 size="40px" color="#C0C0C0" />;
  } else if (rankPer > 69 && rankPer <= 80) {
    return <GiRank2 size="40px" color="orange" />;
  } else {
    return <GiRank3 size="40px" color="yellow" />;
  }
};
