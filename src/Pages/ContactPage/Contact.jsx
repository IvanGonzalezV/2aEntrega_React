import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Contact Page</h1>
      <button onClick={() => navigate("/")}>
        Back to Home</button>
    </div>
  )
}

export default Contact