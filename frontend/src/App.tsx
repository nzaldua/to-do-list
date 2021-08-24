import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import ListToDo from './components/ListToDo';
import CreateToDo from './components/CreateToDo';
import EditToDo from './components/EditToDo';
import DeleteToDo from './components/DeleteToDo';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="center"><h1>To-do List</h1></div>
        <div className="NavBar left">
          <NavBar />
        </div>
        <div className="center">
          <Route path="/" exact component={ListToDo} />
          <Route path="/create" component={CreateToDo} />
          <Route path="/:id/edit" component={EditToDo} />
          <Route path="/:id/delete" component={DeleteToDo} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
