import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const ToDo: React.FunctionComponent<any> = props => {
  return (
    <div className="Item">
      <span className="left">
        <h5>{props.activity}</h5>
      </span>
      <span className="right">
        <span>
          <Link className="Link" to={{ pathname: `/${props.id}/edit`, state: { activity: props.activity } }}><button type="button">Edit</button></Link>
        </span>
        <span>
          <Link className="Link" to={`/${props.id}/delete`}><button type="button">Delete</button></Link>
        </span>
      </span>
    </div>);
}

const ListToDo: React.FunctionComponent<any> = props => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/?limit=30')
      .then((res: any) => {
        let activities: any = [];
        for (const todo of res.data.body) {
          activities = [...activities, todo];
        }
        setList(activities as any);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="List">
      {list.map((item, index) => <ToDo key={index} activity={(item as any)["activity"]} id={(item as any)["_id"]}/>)}
    </div>
  )
}

export default ListToDo;