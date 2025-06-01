import { MorePageInformation } from "@/constants/text";
import InfoGeneral from "../pages/InfoGeneral";

export default function FlippedClass() {
  return (
    <InfoGeneral
      title={MorePageInformation.FLIPPED_CLASS.title}
      text={MorePageInformation.FLIPPED_CLASS.content}
    />
  );
}
