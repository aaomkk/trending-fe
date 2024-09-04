import React, { useState } from 'react';
import { Navbar, Container, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const DatePickerWrapper = styled(DatePicker)`
    margin: 0 10px;
    font-size: 10px;
`;
const FormSelectWrapper = styled(Form.Select)`
    margin: 0 10px;
    font-size: 10px;
`;
const ButtonWrapper = styled(Button)`
    border-radius: 24px;
    font-size: 10px;
    width: inherit;
`;

const NavSearch = ({ handleFilter }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const submitSearch = () => {
        handleFilter({ startDate, endDate });
    };
    console.log(startDate, endDate);

    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12 col-md-2 d-flex justify-content-start">
                            <Navbar.Brand>Search</Navbar.Brand>
                        </div>
                        <div className="col-12 col-md-9 d-flex flex-wrap justify-content-center justify-content-md-end align-items-center mb-2 mb-md-0">
                            <div className="col-12 col-md-4 d-flex align-items-center justify-content-start justify-content-md-end mb-2 mb-md-0">
                                <label>Period</label>
                                <FormSelectWrapper>
                                    <option value="tranmission">Tranmission</option>
                                </FormSelectWrapper>
                            </div>
                            <div className="col-12 col-md-4 d-flex align-items-center justify-content-start justify-content-md-end mb-2 mb-md-0">
                                <label>Status</label>
                                <FormSelectWrapper>
                                    <option value="waiting">Waiting</option>
                                </FormSelectWrapper>
                            </div>
                            <div className="col-12 col-md-4 d-flex align-items-center justify-content-start justify-content-md-end">
                                <label>From</label>
                                <DatePickerWrapper
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    maxDate={endDate}
                                    endDate={endDate}
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control"
                                />
                                <label className="ms-4">To</label>
                                <DatePickerWrapper
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    minDate={startDate}
                                    endDate={endDate}
                                    dateFormat="yyyy-MM-dd"
                                    className="form-control"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md d-flex justify-content-end">
                            <ButtonWrapper variant="primary" onClick={submitSearch}> Search </ButtonWrapper>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavSearch;
