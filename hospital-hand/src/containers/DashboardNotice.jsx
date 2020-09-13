import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Notice from './Notice'
import Authenticated from '../api/Authenticated'
import axios from 'axios'
import UpdateNoticeForm from './UpdateNoticeForm'
import { API_URL2 } from "../constants";

const color = 'teal'


export default class DashboardNotice extends Component {

    state = {
        id: "",
        title: "",
        description: "",
        post_at: "",
        openNotice: false,

        allnotices: [],
        isUpdateOpen: false

    }

    noticeOpen = () => {
        this.setState({
            openNotice: true
        })
    }

    onCloseNotice = () => {
        this.setState({
            openNotice: false
        })
    }

    componentDidMount() {
        axios.get(API_URL2)
            .then(res => {
                this.setState({ allnotices: res.data })


            })

    }

    update_data = (id, title, description, post_at) => {
        this.setState({
            isUpdateOpen: true,

            id: id,
            title: title,
            description: description,
            post_at: post_at
        })
        console.log(this.state.id)
    }

    del_data(id) {
        console.log(id);
        axios.delete(`http://127.0.0.1:8000/notice/notice/update_delete/${id}`, this.state)
            .then((response) => {
                if (response.status === 204) {
                    alert('Notice Deleted! ')
                    window.location.reload()
                }
            })


    };


    onUpdateClose = () => {
        this.setState({
            isUpdateOpen: false

        })
    }


    render() {

        const { openNotice } = this.state
        const { isUpdateOpen } = this.state
        const { id, title, description, post_at } = this.state

        return (
            <div className="hospital-work" >
                <UpdateNoticeForm id={id} title={title} description={description} post_at={post_at} isUpdateOpen={isUpdateOpen} onUpdateClose={this.onUpdateClose} />
                <h3>Notices
                <Button floated='right' onClick={this.noticeOpen} circular color='green' icon='add' />
                </h3>
                <Notice onCloseNotice={this.onCloseNotice} openNotice={openNotice}></Notice>

                <br></br>
                <Table color={color} key={color} inverted>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Post At</Table.HeaderCell>
                            <Table.HeaderCell>Update/Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>

                        {
                            this.state.allnotices.map(notice =>
                                <Table.Row >
                                    <Table.Cell><h3 style={{ color: 'blue' }}>{notice.title}</h3></Table.Cell>
                                    <Table.Cell><h5 style={{ color: 'blue' }}>{notice.post_at}</h5></Table.Cell>
                                    <Table.Cell>
                                        <Button circular color='yellow' icon='edit' onClick={this.update_data.bind(this, notice.id, notice.title, notice.description, notice.post_at)} />

                                        <Button circular color='red' icon='delete' onClick={this.del_data.bind(this, notice.id)} />
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }

                    </Table.Body>
                </Table>

            </div>
        )
    }
}
