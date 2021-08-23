import axios from "axios";
import { FormEvent, FormEventHandler, useState } from "react";

const CreateToDo: React.FunctionComponent<any> = props => {
  const [title, setTitle] = useState('');

  const submit: FormEventHandler = (e: FormEvent) => {
    e.preventDefault();

    axios.post(`http://localhost:5000/api/add`, { activity: title })
      .then((res: any) => {
        console.log(`Successfully added to-do`)
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
        <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} required></input>
        <input type="submit" value="Create to-do"/>
      </form>
    </div>
  )
}

export default CreateToDo;