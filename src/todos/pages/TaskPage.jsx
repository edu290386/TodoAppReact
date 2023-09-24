import { useParams } from "react-router-dom"


export const TaskPage = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>TaskPage</div>
  )
}
