import {Link} from "react-router-dom";
import * as React from "react";
 
interface FormState {
  taskCategory: string;
  taskTitle: string;
  taskType: string;
  taskID: string;
} 

export class TaskForm extends React.Component<{}, FormState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      taskCategory: 'to_do',
      taskTitle: '',
      taskType: '',
      taskID: ''
    };
  }


  handleSubmit(e: any) {
    e.preventDefault();
    fetch(`http://localhost:3000/${this.state.taskCategory}`, {
      method: 'POST',
      body: JSON.stringify({id: this.state.taskID, type: this.state.taskType, title: this.state.taskTitle}),
      headers: {'Content-Type': 'application/json'}
    })
  }

  onSelectChange(e: any){
    this.setState({
        taskCategory: e.target.value
    })
  }


  public render() {
    console.log(this.state);
    return (
            <div>
              <Link className="m-5 text-info" to="/">Dashboard</Link>
              <div className="row d-flex m-0 justify-content-center">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 border h-100 m-1">
                <h2 className="mt-2">Add New Task</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                  <label>
                    <select onChange={(e) => this.onSelectChange(e)}>
                      <option value ="to_do">To Do</option>
                      <option value ="in_progress">In Progress</option>
                      <option value ="review">Review</option>
                      <option value ="done">Done</option>
                    </select>
                  </label>
                  <br />
                  <label>
                    <input type="text" placeholder="Task Title" onChange={e => this.setState({taskTitle: e.target.value})} />
                  </label>
                  <br />
                  <label>
                    <input type="text" placeholder="Task Type" onChange={e => this.setState({taskType: e.target.value})} />
                  </label>
                  <br />
                  <label>
                    <input type="text" placeholder="Task ID" onChange={e => this.setState({taskID: e.target.value})}/>
                  </label>
                  <br />
                  <input className="btn btn-info m-2" type="submit" value="Submit" />
                </form>
                </div>
              </div>
            </div>
    );
  }
}


export default TaskForm;
