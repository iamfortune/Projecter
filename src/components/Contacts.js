import React, { Component } from 'react'

class Contacts extends Component {
    constructor() {
        super();
        this.state = {
          contacts: [
            {
              id: 1,
              name: "John Doe",
              email: "jide@gmail.com",
              phone: "08109526245"
            },
            {
              id: 2,
              name: "Francy Ana",
              email: "francy@gmail.com",
              phone: "08109526567"
            },
            {
              id: 3,
              name: "Chioma B",
              email: "chiomab@gmail.com",
              phone: "08109526123"
            }
          ]
        };
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Contacts;