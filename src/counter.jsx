import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


class Counter extends React.Component{
    state = {
        count:0,
        tags: ['tag1', 'tag2', 'tag3']
    }
    
    handleIncrement = () => {
        this.setState({count: this.state.count+1})
    }

    render(){
        return(
            <div>
                <span className = "badge m-2 bg-info text-danger">{this.formatCount()}</span>
                <button onClick = {this.handleIncrement} className = "btn btn-secondary btn-sm" >Increment</button>
                <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
            </div>
        )
    }
    formatCount () {
        const {count} = this.state;
        return this.state.count == 0 ? "Zero" : count;
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'));

export default Counter