import React, { Component } from 'react';
import Blogs from '../components/Blogs';


export default class Blog extends Component {
    constructor(){
        super();

        this.state={
            blog: []
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:5000/index/posts`)
        .then(res => res.json())
        .then(data => this.setState({blog: data}))
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                this is my blog!
                <div className="row">
                    {this.state.blog.map(p => <Blogs key={p.id} blog={p} title={this.props.title}  content={this.props.content} />)}
                </div>
            </div>
        )
    }
}
