import { useNavigate } from "react-router-dom"


export default function Home() {
  const navigate=useNavigate()


  return (
    <div>
      <h1>Tadahiro Yano</h1>
      <p>Portfolio</p>
      <button onClick={() => navigate("/about")}>
        経歴
      </button>
      <button onClick={() => navigate("/works")}>
        制作物を見る
      </button>
    </div>
  )
}
