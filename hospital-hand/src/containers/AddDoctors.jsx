import React, { Component } from 'react'
import { Form, Input, Button } from 'semantic-ui-react'
import Axios from 'axios';



export default class AddDoctors extends Component {

    state = {
        allDepartment: [],
        allHospital: [],


        pk: 0,
        name: "",
        experience: "",
        department: "",
        hospital: [],
    }




    componentDidMount() {

        if (this.props.doctor) {
            const { id, name, experience, department, hospital } = this.props.doctor;
            this.setState({ id, name, experience, department, hospital })
        }

        Axios.get(`http://127.0.0.1:8000/categories/alldepartment/`)
            .then(dept => {
                this.setState({
                    allDepartment: dept.data,

                })
                console.log(dept.data);

            })

        Axios.get(`http://127.0.0.1:8000/hospital/list/`)
            .then(dept => {
                this.setState({
                    allHospital: dept.data,

                })
                console.log(dept.data);

            })


    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });

    };

    multipleSelect = (event) => {
        let opts = [], opt;

        for (let i = 0, len = event.target.options.length; i < len; i++) {
            opt = event.target.options[i];

            if (opt.selected) {
                opts.push(opt.value);
            }

            console.log('opts: ', opts);
            this.setState({ hospital: opts });

        }
    };

    createDoctor = e => {
        e.preventDefault();
        Axios.post(`http://127.0.0.1:8000/categories/create/`, this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            });
        console.log(this.state)
    };

    editDoctor = e => {
        e.preventDefault();
        Axios.put(`http://127.0.0.1:8000/categories/update/` + this.state.pk + '/', this.state)
            .then(() => {
                this.props.resetState();
                this.props.toggle();
            })
    }

    defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };




    render() {



        return (



            <Form onSubmit={this.props.doctor ? this.editDoctor : this.createDoctor} action='/categories' style={{ paddingLeft: 40 + "em" }} >
                <Form.Group style={{ paddingTop: 10 + "em" }}>
                    <Input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.name)}
                    />
                </Form.Group>
                <Form.Group>

                    <Input
                        type="text"
                        placeholder="Experience"
                        name="experience"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.experience)}
                    />
                </Form.Group>
                <Form.Group >


                    <select onChange={this.onChange} name="department" value={this.defaultIfEmpty(this.state.department)} placeholder='Department' style={{ width: 15 + "em" }}>

                        <option selected disabled>Department Name</option>
                        {
                            this.state.allDepartment.map(
                                deps =>
                                    <option value={deps.id}>
                                        {deps.department_name}
                                    </option>
                            )
                        }
                    </select>

                </Form.Group>

                <Form.Group >
                    <select name="hospital" onChange={this.multipleSelect} value={this.defaultIfEmpty(this.state.hospital)} placeholder='Hospitals' style={{ width: 15 + "em" }} multiple selection>
                        {
                            this.state.allHospital.map(
                                hospital =>

                                    <option >
                                        {hospital.name}
                                    </option>
                            )
                        }
                    </select>


                </Form.Group>




                <Form.Field
                    control={Button}
                    content='Add Doctor'

                />

            </Form >
        )
    }
}
