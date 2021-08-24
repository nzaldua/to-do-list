import axios from "axios";
import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditToDo: React.FunctionComponent<any> = props => {
  let { id }: any = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(props.location.state.activity);
  }, [props.location.state.activity]);


  const submit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();

    axios.put(`http://localhost:5000/api/${id}/update`, { activity: title })
      .then((res) => {
        console.log(`Successfully updated to-do`)
      })
      .catch((e) => {
        console.error(e);
      });

    setTitle('');

    window.location.href = '/';
  }

  return (
    <div>
      <form onSubmit={(e) => {submit(e)}}>
        <input autoFocus type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required></input>
        <input type="submit" value="Edit to-do"/>
      </form>
    </div>
  )
}

export default EditToDo;