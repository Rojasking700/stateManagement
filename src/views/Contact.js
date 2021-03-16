import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(){
        super();

        this.state={
            contact: []
        };
        console.log(this.state.contact);
    };
    componentDidMount(){
        console.log("mounted");
        this.setState({
            contact: [{
                firstName: "Gabriel",
                lastName: "Rojas",
                address: "123 main st",
                phoneNum: "0123456789",
                email: "email@domain.com"
              }]
        })
    }

    render() {
        console.log(this.state.contact);
        return (
            <div>
                This is the contact page 
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contact.map((contacts, index) => (
                            <tr key={index}>
                                <td>{contacts.firstName}</td>
                                <td>{contacts.lastName}</td>
                                <td>{contacts.address}</td>
                                <td>{contacts.phoneNum}</td>
                                <td>{contacts.email}</td>
                            </tr>
                        ) )}
                    </tbody>
                </table>
            </div>
        )
    }
}
