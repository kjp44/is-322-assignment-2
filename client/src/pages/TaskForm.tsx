import {Link} from "react-router-dom";
import * as React from "react";

interface FormProps {
  action: string
}
 
interface FormState {
  taskTitle: string;
  taskType: string;
  taskID: string;
} 

export class TaskForm extends React.Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);
    this.state = {
      taskTitle: '',
      taskType: '',
      taskID: ''
    };
  }


  handleSubmit(e: any) {
    e.preventDefault();
    
  }
 


  public render() {
    console.log(this.state);
    return (
            <React.Fragment>
              <Link className="m-5 text-info" to="/">Dashboard</Link>
              <div className="row d-flex m-0 justify-content-center">
                <div className="col-6 col-sm-6 col-md-4 col-lg-4 border h-100 m-1">
                <h2 className="mt-2">Add New Task</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
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
            </React.Fragment>
    );
  }
}


export default TaskForm;
