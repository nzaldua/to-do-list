import axios from "axios";
import { FormEvent, FormEventHandler } from "react";
import { useParams } from "react-router-dom";

const DeleteToDo: React.FunctionComponent<any> = props => {
  let { id }: any = useParams();

  const submit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();

    axios.delete(`http://localhost:5000/api/${id}/delete`)
      .then((res) => {
        console.log(`Successfully deleted to-do`)
      })
      .catch((e) => {
        console.error(e);
      });

    window.location.href = '/';
  }

  return (
    <div>
      <form onSubmit={(e) => {submit(e)}}>
        <input type="submit" value="Delete to-do"/>
      </form>
    </div>
  )
}

export default DeleteToDo;