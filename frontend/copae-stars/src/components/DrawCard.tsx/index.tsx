import { Link } from "react-router-dom";
import "./style.scss";

type DrawCardProps = {
  link: string;
  children: string;
}

function DrawCard({ link, children }: DrawCardProps) {
  return (
    <div className="draw-card">
      <Link to={link}>{children}</Link>
    </div>
  )
}

export default DrawCard
