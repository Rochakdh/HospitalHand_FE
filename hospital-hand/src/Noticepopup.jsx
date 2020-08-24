import React from 'react'
// import 'semantic-ui-css/semantic.min.css'

class Noticepopup extends React.Component { 
    state={
        credentials:{title:'',description:'',post_at:''}
    } 

    post=event=>{
        console.log('posted');
        fetch('http://127.0.0.1:8000/notice/list/',{
            method: 'GET',
            header:{'Content-Type':'application/json'},
            // body:JSON.stringify(this.state.credentials)
        }).then(
            data=>{
                console.log(data);
            }
        ).catch(error=>console.error(error))
    }
    // inputchanged= event=>{
    //     const cred =this.state.credentials;
    //     cred[event.target.name]=event.target.value;
    //     this.setState({credentials:cred});
    // }
    render(){
        return(
            <div >
                <label >Title:
                    <input type="text" name="title" value={this.state.credentials.title} onChange={this.inputchanged} />
                </label ><br />
                <label >Desc:
                    <input type="text" name="description" value={this.state.credentials.description} onChange={this.inputchanged} />
                </label><br />
                <label >post at:
                    <input type="text" name="post_at" value={this.state.credentials.post_at} onChange={this.inputchanged} />
                </label>
                <br />
                <button onClick={this.post}> Post </button>
            </div>
        );
    }
} 
export default Noticepopup;   
