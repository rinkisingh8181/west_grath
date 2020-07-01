import React from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './index.scss';

const Invoice = ({ invoices }) => {
    return (
        <div className="invoice-section">
          <Container>
              <div className="invoice-block">
                  <div className="invoice-card">
                      <div className="title">
                          <h4 className="text-uppercase mb-0">Invoices</h4>
                      </div>
                      <div className="invoice-table">
                          <Table responsive>
                              <thead>
                                  <tr>
                                      <th width="16%">PURCHASE DATE</th>
                                      <th width="10%">INVOICE</th>
                                      <th width="43%">wine</th>
                                      <th width="5%">Year</th>
                                      <th width="5%">BOTTLES</th>
                                      <th width="16%">PURCHASE PRICE</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  {
                                      invoices.length ? invoices.map(({ date, order_no, wine, price, qty }) => (
                                          <tr key={order_no}>
                                              <td>{date}</td>
                                              <td><span className="d-block text-left receipt-link">{order_no}</span></td>
                                              <td>{wine}</td>
                                              <td />
                                              <td>{qty}x{price}</td>
                                              <td>${qty * price}</td>
                                          </tr>
                                      )) : null
                                  }
                              </tbody>
                          </Table>
                      </div>
                      <div className="invoice-table-mobile">
                          {
                              invoices.length ? invoices.map(({ date, order_no, wine, price, qty, delivery }) => (
                                  <div className="invoice-table-mobile-list" key={order_no}>
                                      <div className="tr-middle-column d-flex justify-content-around align-items-center">
                                          <div className="th">
                                              <label>Date</label>
                                              <span>{date}</span>
                                          </div>
                                          <div className="th">
                                              <label>order</label>
                                              <span>#{order_no}</span>
                                          </div>
                                      </div>
                                      <div className="tr-full-column">
                                          <div className="tr-row d-flex">
                                              <div className="tr-row-th">
                                                  <label>wine</label>
                                              </div>
                                              <div className="tr-row-th">
                                                  <label>QTY</label>
                                              </div>
                                              <div className="tr-row-th">
                                                  <label>Price</label>
                                              </div>
                                          </div>
                                          <div className="tr-row d-flex">
                                              <div className="tr-row-th">
                                                  <span>{wine}</span>
                                              </div>
                                              <div className="tr-row-th">
                                                  <span>{qty}</span>
                                              </div>
                                              <div className="tr-row-th">
                                                  <span>${price}</span>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="tr-middle-column d-flex justify-content-around align-items-center">
                                          <div className="th">
                                              <label>RECEIPT</label>
                                              <span className="receipt-link">PDF</span>
                                          </div>
                                          <div className="th">
                                              <label>INVOICE</label>
                                              <span className="receipt-link">PDF</span>
                                          </div>
                                      </div>
                                      <div className="tr-middle-column d-flex justify-content-around align-items-center">
                                          <div className="th">
                                              <label>DELIVERY</label>
                                              <span className="receipt-link">{delivery === "No" ? 'PENDING' : 'DELIVERED'}</span>
                                          </div>
                                      </div>
                                  </div>
                              )) : null
                          }
                      </div>
                      <div className="invoice-footer d-flex justify-content-center justify-content-md-end">
                          <div className="invoice-xls-view">
                              <Button className="invoice-xls-view-btn mr-3" variant="link">Download XLS</Button>
                              <Button className="invoice-xls-view-btn" variant="link">View All</Button>
                          </div>
                      </div>
                  </div>
              </div>
          </Container>
        </div>
    )
};

export default Invoice;
