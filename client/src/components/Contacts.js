import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'




const Contacts = () => {
    const fakeContacts = [
        {
            id: 1,
            names: [
                {
                    displayName: "",
                }
            ],
            photos: [
                {
                    metadata: {
                        url: ""
                    }
                }
            ],
            emailAddresses: [
                {
                    value: "",
                }
            ],
            phoneNumbers: [
                {
                    value: ""
                }
            ],
        },
        {
            id: 1,
            names: [
                {
                    displayName: "",
                }
            ],
            photos: [
                {
                    metadata: {
                        url: ""
                    }
                }
            ],
            emailAddresses: [
                {
                    value: "",
                }
            ],
            phoneNumbers: [
                {
                    value: ""
                }
            ],
        },
    ]
    let { id } = useParams()
    const [contacts, setContacts] = useState(fakeContacts)
    const fetchTasks = async (id) => {
        axios.get(`http://localhost:5000/contacts/${id}`)
            .then(res => {
                const persons = res.data;
                setContacts(persons);
                console.log({ "res.data": res.data })
                console.log("working")
                console.log(contacts)
            })
    }

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks(id)
        }
        getTasks()
    }, [])



    return (
        <div>
            <nav>
                <div className="nav-wrapper deep-purple accent-3">
                    <ul id="nav-mobile" className="left">
                        <li><a href="/api/logout">Logout</a></li>
                    </ul>
                </div>
            </nav>
            <h1 align="center"><b>My Contacts</b></h1>
            <ul class="list-group list-group-flush">
            {
                contacts.map(function (contact) {
                    return <li class="list-group-item"><h5><img src={contact.photos[0].url} style={{ borderRadius: "70%", marginTop: "20px", position: "relative", top: "0px" }} />   {contact.names[0].displayName} || {contact.emailAddresses[0].value} || {contact.phoneNumbers[0].value}</h5></li>
                })
            }
            </ul>
    )
}



export default Contacts;
