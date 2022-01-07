import { useNavigate } from "react-router-dom"
import { IoMdArrowRoundBack } from "react-icons/io";
import "./style.scss";

function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button className="go-back-btn" onClick={() => navigate(-1)}><IoMdArrowRoundBack /></button>
  )
}

export default GoBackButton
