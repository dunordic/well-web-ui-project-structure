import { useParams } from "react-router-dom";

export default function SubViewMessage() {
  const { subViewParam } = useParams();

  return subViewParam === "easter-egg"
    ? "Easter Egg 🥚!"
    : subViewParam || null;
}
