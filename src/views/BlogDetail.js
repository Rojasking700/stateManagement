import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BlogDetail extends Component {
    constructor(){
        super();

        this.state={
            blog: []
        }
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:5000/index/posts/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => this.setState({blog: data}))
        .catch(error => console.log(error))
    }

    render() {
        const p = this.state.blog;
        return (
            <div>
                hello
                <div className="card">
                    <div className="card-header"><h4>{p.title} </h4></div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p>
                            {p.content}
                        </p>
                        <Link to="/blog">
                            <button className="btn btn-secondary float-end">Back to Blog</button>
                        </Link>
                        {/* <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source Title</cite>
                        </footer> */}
                        </blockquote>
                    </div>
                </div>
                
            </div>
        )
    }
}
