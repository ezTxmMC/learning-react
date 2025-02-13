import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Product() {
  let { id } = useParams();
  return (
    <div>
      <Header />
      <h1>{id}</h1>
    </div>
  );
}
