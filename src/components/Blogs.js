import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Blogs extends Component {
    render() {
        const p = this.props.blog;
        return (
            <div>
                <div className="card">
                    <div className="card-header"><h4>{p.title}</h4></div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p>
                            {p.content}
                        </p>
                        <Link to={`/blog/${p.post_id}`}>
                            <button  href="/" className="btn btn-secondary float-end">More Info</button>
                            </Link>
                        {/* <footer className="blockquote-footer">
                            Someone famous in <cite title="Source Title">Source {p.post_id} Title</cite>
                        </footer> */}
                        </blockquote>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}
