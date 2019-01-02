import React from 'react'
import{withRouter} from 'react-router-dom'
import { connect } from "react-redux";
import { Input } from '@progress/kendo-react-inputs';
class Hello extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      basesite:window.location.origin,
      title:'',message:'',token: localStorage.getItem('toki').toString()
    }
  }
  componentWillMount()
  {
    
  }
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
}
  render() {
    return (<div>
      <div>Push Notification</div>
      <h3>{this.state.token}</h3>
      <Input name="title"label="title" value={this.state.title} onChange={this.handleChange} type="text" required/>
      <Input name="message"label="Message" value={this.state.message} onChange={this.handleChange} type="text" required/>
       <button onClick={()=>{sendpushnotification(this.state.token,this.state.basesite,this.state.title,this.state.message)}} className="k-button k-primary"> Send  </button>
    </div>
    )
  }
}
function sendpushnotification(token,basesite,title,message)
{
//   const token=localStorage.getItem('tokenapi')
//  console.log(title+' '+message+' '+basesite+' '+ token)
const authkey='key=AAAAKXFjjmo:APA91bHYjF0NK8RL2Tc3Kbh5GcY0BHqBrroWqLkbkVynMs2aNfYMjul0CD9C053FRylbgyPb6l5482kBYSbDDbAozh5iYmm-Kk_cx8PHPqKgkRgR2fruCfkZDxAu8N92eaMq4Yad8suB';
  let collection={
    "notification": {
        "title": title,
        "body":  message,
        "click_action": basesite,
        "icon": "http://url-to-an-icon/icon.png"
    },
    "to": '/topics/MedullusReactApp'
}
  
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json','Authorization':authkey},
    body: JSON.stringify(collection)
};

return fetch(`https://fcm.googleapis.com/fcm/send`, requestOptions)
    // .then(handleResponse)
    // .then(attendance => {
                  
    //     return attendance;
    // });
}
function handleResponse(response) {
  return response.text().then(text => {
      const data = text;
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              
          }

          const error = (data || data.message);
          return Promise.reject(error);
      }

      return data;
  });
}

export default  withRouter(connect(null,null)(Hello))
