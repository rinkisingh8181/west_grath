import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
import './index.scss';
import {getSource, product as item} from '../../../api';
import historicalChart from '../../../images/historical-chart.png';

const ProductPage = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        item.fetch('jJQViBKlSo9ZLo5asqU8', getSource())
            .then(res => {
                setProduct(res.data)
            }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <div className="product-page">
                <Container>
                    <div className="product-item-detail d-flex flex-column flex-lg-row">
                        <div className="product-detail">
                            <div className="product-detail-head">
                                <h4>{product.name}</h4>
                                <span>{product.region ? product.region.toUpperCase() : ''},{' '}
                                    {product.country ? product.country.toUpperCase() : ''}</span>
                                <span>{product.color ? product.color.toUpperCase() : ''}</span>
                            </div>
                            <div className="product-detail-descripton mt-3">
                                <span>DESCRIPTION</span>
                                <p>{product.desc}</p>
                            </div>
                        </div>
                        <div className="product-volume-img d-flex">
                            <div className="product-volume">
                                <div className="product-volume-list mb-4">
                                    <span>PRODUCTION VOLUME</span>
                                    <p>{product.product_volume}</p>
                                </div>
                                <div className="product-volume-list mb-4">
                                    <span>PRODUCTION VOLUME</span>
                                    <p>{product.product_volume}</p>
                                </div>
                                <div className="product-volume-list mb-4">
                                    <span>PRODUCTION VOLUME</span>
                                    <p>{product.product_volume}</p>
                                </div>
                            </div>
                            <div className="product-img-block pl-3 d-flex flex-column">
                                <div className="product-img">
                                    <div className="product-img-info">
                                        <span>Sample Bottle Image</span>
                                        <p>awaiting SIB</p>
                                        <p>approved SIB</p>
                                        <p>Actual image</p>
                                        <p>post condition report</p>
                                    </div>
                                </div>
                                <div className="product-img-option">
                                    <span className="img-option-link">Image Purchase Options</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="historical-live-offer d-flex flex-column flex-md-row">
                        <div className="historical-card">
                            <div className="historical-head">
                                <h4>Historical Performance</h4>
                            </div>
                            <div className="historical-detail">
                                <div className="historical-map">
                                    <img src={historicalChart} alt=""/>
                                </div>
                                <div className="historical-map-value d-flex">
                                    <div className="historical-value-block">
                                        <h6>Performance Snapshot</h6>
                                        <ul>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>Day</span></div>
                                                <div className="value-count"><span>+/- 6%</span></div>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>Month To Date</span></div>
                                                <div className="value-count"><span>+/- 6%</span></div>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>6 Months To Date</span></div>
                                                <div className="value-count"><span>+/- 6%</span></div>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>Year To Date</span></div>
                                                <div className="value-count"><span>+/- 6%</span></div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="historical-value-block">
                                        <h6>Value</h6>
                                        <ul>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>Total Cases</span></div>
                                                <div className="value-count"><span>3</span></div>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>Items Due In</span></div>
                                                <div className="value-count"><span>2</span></div>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>Gain/Loss $</span></div>
                                                <div className="value-count"><span>+/- $903</span></div>
                                            </li>
                                            <li className="d-flex justify-content-between">
                                                <div className="value-name"><span>Gain/Loss %</span></div>
                                                <div className="value-count"><span>+/- 6%</span></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="coming-soon">
                                <span>Coming Soon</span>
                            </div>
                        </div>
                        <div className="live-card">
                            <Tabs className="live-card-tabs" defaultActiveKey="liveOffer" id="uncontrolled-tab-example">
                                <Tab eventKey="liveOffer" title="Live Offer/Buy">
                                    <div className="live-tab d-flex flex-column">
                                        <div className="live-details flex-fill">
                                            <div className="offer-time d-flex">
                                                <div className="offer-time-title">
                                                    <span>Offer time:</span>
                                                </div>
                                                <div className="offer-time-radio">
                                                    <Form.Check
                                                        custom
                                                        type="radio"
                                                        label="30 Days"
                                                        name="billing-shipping-radio"
                                                        id="formHorizontalRadios1"
                                                    />
                                                    <Form.Check
                                                        custom
                                                        type="radio"
                                                        label="60 Days"
                                                        name="billing-shipping-radio"
                                                        id="formHorizontalRadios2"
                                                    />
                                                    <Form.Check
                                                        custom
                                                        type="radio"
                                                        label="90 Days"
                                                        name="billing-shipping-radio"
                                                        id="formHorizontalRadios3"
                                                    />
                                                </div>
                                            </div>
                                            <div className="format-drop d-flex">
                                                <span>Format:</span>
                                                <div className="format-drop-input">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="quantity-drop d-flex">
                                                <span>Quantity:</span>
                                                <div className="format-drop-input d-flex">
                                                    <input type="text"/>
                                                    <p><span>(#)</span>Available</p>
                                                </div>
                                            </div>
                                            <div className="live-market d-flex">
                                                <span>Live Market Price:</span>
                                                <div className="format-drop-input">
                                                    <span>$2398</span>
                                                </div>
                                            </div>
                                            <div className="format-drop d-flex">
                                                <span>Price:</span>
                                                <div className="format-drop-input">
                                                    <input type="text"/>
                                                </div>
                                            </div>
                                            <div className="agree-checkbox d-flex">
                                            <Form.Check aria-label="option 1" />
                                            <p>I agree to the <span>Terms & Conditions of Sales</span> and <span>Legal Documentation</span></p>
                                        </div>
                                        </div>
                                        <div className="commit-box">
                                            <span>Commit to Buy></span>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="liveBid" title="Live Bid/Sell">
                                    Live Bid/Sell
                                </Tab>
                            </Tabs>
                            <div className="coming-soon">
                                <span>Coming Soon</span>
                            </div>
                        </div>
                    </div>
                    <div className="transaction-history-section">
                        <div className="transaction-history-card">
                            <div className="transaction-history-head">
                                <h4 className="text-uppercase mb-0">TRANSACTION HISTORY</h4>
                            </div>
                            <div className="transaction-history-table">
                                <Table responsive>
                                    <thead>
                                    <tr>
                                        <th width="10%">DATE</th>
                                        <th width="10%">ACTION</th>
                                        <th width="15%">UID</th>
                                        <th width="10%">PRICE</th>
                                        <th width="10%">QTY</th>
                                        <th width="15%">OUTCOME</th>
                                        <th width="30%"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>13/02/2020</td>
                                        <td>Bid</td>
                                        <td>12345678</td>
                                        <td>$9323</td>
                                        <td>1x75</td>
                                        <td>Ouctcome</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>13/02/2020</td>
                                        <td>Bid</td>
                                        <td>12345678</td>
                                        <td>$9323</td>
                                        <td>1x75</td>
                                        <td>Ouctcome</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>13/02/2020</td>
                                        <td colSpan="5">New tasting notes from Alex W.</td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="transaction-history-table-export d-flex justify-content-end">
                                <Button className="table-export-btn mr-3" variant="link">Export PDF</Button>
                                <Button className="table-export-btn" variant="link">Export XLS</Button>
                            </div>
                        </div>
                    </div>
                    <div className="tasting-notes-section">
                        <div className="tasting-notes-card">
                            <div className="tasting-notes-head">
                                <h4 className="text-uppercase mb-0">TASTING NOTES</h4>
                            </div>
                            <div className="tasting-notes-wrapper">
                                {
                                    product.tasting_notes ?
                                        product.tasting_notes.map((note, i) => (
                                            <div className="tasting-notes-list" key={i}>
                                                <div className="tasting-notes-title d-flex flex-wrap">
                                                    <div className="notes-title mr-4">
                                                        <span>Score:</span>
                                                        <span className="ml-2">{note.score}</span>
                                                    </div>
                                                    <div className="notes-title mr-4">
                                                        <span>Drinking Dates:</span>
                                                        <span className="ml-2">{note.drink_dates}</span>
                                                    </div>
                                                    <div className="notes-title mr-4">
                                                        <span>Critic:</span>
                                                        <span className="ml-2">{note.critics}</span>
                                                    </div>
                                                    <div className="notes-title mr-4">
                                                        <span>Tasted:</span>
                                                        <span className="ml-2">{note.tasted_date}</span>
                                                    </div>
                                                </div>
                                                <p>{note.review}</p>
                                            </div>
                                        )) : null
                                }
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
};

export default ProductPage;
