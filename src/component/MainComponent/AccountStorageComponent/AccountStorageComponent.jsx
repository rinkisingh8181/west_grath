import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import EditContactInformation from '../Modal/EditContactInformationComponent';
import ChangeAddress from '../Modal/ChangeAddressComponent';
import './index.scss';

const AccountStorage = () => {
    const [EditContactInformationShow, setEditContactInformationShow] = React.useState(false);
    const [ChangeAddressShow, setChangeAddressShow] = React.useState(false);

    return (
        <div className="account-storage-info">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="account-storage-info-card d-flex flex-column">
                            <div className="title">
                                <h4 className="mb-0 text-uppercase">CONTACT Information</h4>
                            </div>
                            <div className="content">
                                <div className="content-row d-flex">
                                    <div className="content-info">
                                        <div className="content-info-list d-flex flex-column">
                                            <label className="text-uppercase">Name:</label>
                                            <span>John Smith</span>
                                        </div>
                                        <div className="content-info-list d-flex flex-column">
                                            <label className="text-uppercase">Email:</label>
                                            <span>johnsmith@gmail.com</span>
                                        </div>
                                        <div className="content-info-list d-flex flex-column">
                                            <label className="text-uppercase">PHONE:</label>
                                            <span>+1 310 555-1234</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account-storage-info-card-edit text-right">
                                <Button className="edit-btn" variant="link" onClick={() => setEditContactInformationShow(true)}>Edit Info</Button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="account-storage-info-card d-flex flex-column">
                            <div className="title">
                                <h4 className="mb-0 text-uppercase">ADDRESSES</h4>
                            </div>
                            <div className="content">
                                <div className="content-row d-flex">
                                    <div className="content-info pr-3">
                                        <div className="content-info-list d-flex flex-column">
                                            <label className="text-uppercase">BILLING ADDRESS:</label>
                                            <p>123456 Elm Street Suite 204 Los Angeles, CA 90045 USA</p>
                                        </div>
                                    </div>
                                    <div className="content-info">
                                        <div className="content-info-list d-flex flex-column">
                                            <label className="text-uppercase">SHIPPING ADDRESS:</label>
                                            <p>123456 Elm Street Suite 204 Los Angeles, CA 90045 USA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="account-storage-info-card-edit text-right">
                                <Button className="edit-btn" variant="link" onClick={() => setChangeAddressShow(true)}>Edit Info</Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <EditContactInformation
                show={EditContactInformationShow}
                onHide={() => setEditContactInformationShow(false)}
            />
            <ChangeAddress
                show={ChangeAddressShow}
                onHide={() => setChangeAddressShow(false)}
            />
        </div>
    )
};

export default AccountStorage;
