import React from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './index.scss';
import filterIcon from './../../../images/filter-icon.png';

const WineColloection = () => {
    const [isLocationOpen, setIsLocationOpen] = React.useState(false);
    const [isViewOpen, setIsViewOpene] = React.useState(false);
    const [isFilterOpen, setIsFilterOpene] = React.useState(false);

    return (
        <div className="wine-colloection-section">
            <Container fluid>
                <div className="wine-colloection-block">
                    <div className="wine-colloection-card">
                        <div className="wine-colloection-head d-lg-flex align-items-center">
                            <div className="wine-colloection-title">
                                <h4>Wine collection</h4>
                            </div>
                            <div className="wine-colloection-filter d-flex">
                                <div className="search-filter mr-4">
                                    <input className="search-input" type="text" placeholder="Search"/>
                                </div>
                                <div className="location-view-filter d-flex align-items-center">
                                    <div className="custom-select-wrapper d-flex align-items-center mr-4">
                                        <label>Location:</label>
                                        <div className={`custom-selectDrop ${isLocationOpen ? 'open':''}` }>
                                            <div className="custom-select__trigger" onClick={()=>setIsLocationOpen(!isLocationOpen)}><span>Tesla</span>
                                                <div className="arrow"></div>
                                            </div>
                                            <div className="custom-options">
                                                <span className="custom-option selected" data-value="tesla">Tesla</span>
                                                <span className="custom-option" data-value="volvo">Volvo</span>
                                                <span className="custom-option" data-value="mercedes">Mercedes</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="custom-select-wrapper d-flex align-items-center">
                                        <label>View:</label>
                                        <div className={`custom-selectDrop ${isViewOpen ? 'open':''}` }>
                                            <div className="custom-select__trigger" onClick={()=>setIsViewOpene(!isViewOpen)}><span>Tesla</span>
                                                <div className="arrow"></div>
                                            </div>
                                            <div className="custom-options">
                                                <span className="custom-option selected" data-value="tesla">Tesla</span>
                                                <span className="custom-option" data-value="volvo">Volvo</span>
                                                <span className="custom-option" data-value="mercedes">Mercedes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`filter ${isFilterOpen ? 'open':''}` }>
                                    <div className="filter-icon" onClick={()=>setIsFilterOpene(!isFilterOpen)}>
                                        <img src={filterIcon} alt=""/>
                                    </div>
                                    <div className="filter-dropdown">
                                        <div className="filter-list">
                                            <span>location</span>
                                        </div>
                                        <div className="filter-list">
                                            <span>view</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="wine-colloection-table-wrapper">
                        <div className="wine-colloection-table">
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th width="13%">UID</th>
                                    <th width="22%">Wine / Vintage / Unit</th>
                                    <th className="status-th" width="14%">Status</th>
                                    <th width="14%">cost</th>
                                    <th width="14%">Market Price</th>
                                    <th width="14%">gain</th>
                                    <th width="10%">% gain</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <div className="wine-list">
                                                <span className="d-block text-nowrap wine-name">Screaming Eagle, Cabernet Sauvignon</span>
                                                <span className="d-block text-nowrap">2016 1x75cl</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="status-list live-offer">
                                                <span>Live Offer</span>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <div className="wine-list">
                                                <span className="d-block text-nowrap wine-name">Lafite Rothschild</span>
                                                <span className="d-block text-nowrap">2019 6x75cl, SIB</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="status-list sell-td">
                                                <span>Sell</span>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <div className="wine-list">
                                                <span className="d-block text-nowrap wine-name">creaming Eagle, Cabernet Sauvignon, 2016</span>
                                                <span className="d-block text-nowrap">2019 1x75cl</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="status-list sold-td">
                                                <span>Sold</span>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="wine-table-footer d-flex justify-content-around justify-content-md-center">
                            <div className="wine-table-footer-prev">
                                <Button className="wine-table-prev-next-btn" variant="link">{'< Prev 10'}</Button>
                            </div>
                            <div className="wine-table-footer-no mx-5">
                                <ul className="p-0 m-0 d-flex">
                                    <li>
                                        <Button className="wine-table-no-btn" variant="link">1</Button>
                                    </li>
                                    <li>
                                        <Button className="wine-table-no-btn" variant="link">2</Button>
                                    </li>
                                    <li>
                                        <Button className="wine-table-no-btn" variant="link">3</Button>
                                    </li>
                                    <li>
                                        <Button className="wine-table-no-btn" variant="link">4</Button>
                                    </li>
                                    <li>
                                        <Button className="wine-table-no-btn" variant="link">5</Button>
                                    </li>
                                    <li>
                                        <Button className="wine-table-no-btn" variant="link">6</Button>
                                    </li>
                                </ul>
                            </div>
                            <div className="wine-table-footer-next">
                                <Button className="wine-table-prev-next-btn" variant="link">Next 10 ></Button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default WineColloection;
