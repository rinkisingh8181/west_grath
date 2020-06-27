import React from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './index.scss';

const Invoice = () => {
    return (
        <div className="invoice-section">
          <Container fluid>
              <div className="invoice-block">
                  <div className="invoice-card">
                      <div className="title">
                          <h4 className="text-uppercase mb-0">Invoice</h4>
                      </div>
                      <div className="invoice-table">
                          <Table responsive>
                              <thead>
                                  <tr>
                                      <th width="18%">date</th>
                                      <th width="10%">order</th>
                                      <th width="33%">wine</th>
                                      <th width="4%">QTY</th>
                                      <th width="10%">Price</th>
                                      <th width="8%">RECEIPT</th>
                                      <th width="8%">INVOICE</th>
                                      <th width="10%">DELIVERY</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>dd mmm yyyy</td>
                                      <td>#56425</td>
                                      <td>
                                          <div className="invoice-wine-list">
                                              <span className="d-block text-nowrap">Wine Name, Region</span>
                                              <span className="d-block text-nowrap">Vintage, Format</span>
                                          </div>
                                          <div className="invoice-wine-list">
                                              <span className="d-block">Wine Name, Region</span>
                                              <span className="d-block">Vintage, Format</span>
                                          </div>
                                          <div className="invoice-wine-list">
                                              <span className="d-block">Wine Name, Region</span>
                                              <span className="d-block">Vintage, Format</span>
                                          </div>
                                      </td>
                                      <td>
                                          <div className="invoice-wine-list text-center">
                                              <span>3</span>
                                          </div>
                                          <div className="invoice-wine-list text-center">
                                              <span>3</span>
                                          </div>
                                          <div className="invoice-wine-list text-center">
                                              <span>6</span>
                                          </div>
                                      </td>
                                      <td>
                                          <div className="invoice-wine-list text-center">
                                              <span>$47,010</span>
                                          </div>
                                          <div className="invoice-wine-list text-center">
                                              <span>$7500</span>
                                          </div>
                                          <div className="invoice-wine-list text-center">
                                              <span>$1500</span>
                                          </div>
                                      </td>
                                      <td><span className="d-block text-center receipt-link">PDF</span></td>
                                      <td><span className="d-block text-center receipt-link">PDF</span></td>
                                      <td><span className="d-block text-center receipt-link">PENDING</span></td>
                                  </tr>
                                  <tr>
                                      <td>dd mmm yyyy</td>
                                      <td>#56425</td>
                                      <td>
                                          <div className="invoice-wine-list">
                                              <span className="d-block">Wine Name, Region</span>
                                              <span className="d-block">Vintage, Format</span>
                                          </div>
                                      </td>
                                      <td>
                                          <div className="invoice-wine-list text-center">
                                              <span>3</span>
                                          </div>
                                      </td>
                                      <td>
                                          <div className="invoice-wine-list text-center">
                                              <span>$47,010</span>
                                          </div>
                                      </td>
                                      <td><span className="d-block text-center receipt-link">PDF</span></td>
                                      <td><span className="d-block text-center receipt-link">PDF</span></td>
                                      <td><span className="d-block text-center receipt-link">PENDING</span></td>
                                  </tr>
                                  <tr>
                                      <td>dd mmm yyyy</td>
                                      <td>#56425</td>
                                      <td>
                                          <div className="invoice-wine-list">
                                              <span className="d-block">Wine Name, Region</span>
                                              <span className="d-block">Vintage, Format</span>
                                          </div>
                                      </td>
                                      <td>
                                          <div className="invoice-wine-list text-center">
                                              <span>3</span>
                                          </div>
                                      </td>
                                      <td>
                                          <div className="invoice-wine-list text-center">
                                              <span>$47,010</span>
                                          </div>
                                      </td>
                                      <td><span className="d-block text-center receipt-link">PDF</span></td>
                                      <td><span className="d-block text-center receipt-link">PDF</span></td>
                                      <td><span className="d-block text-center receipt-link">PENDING</span></td>
                                  </tr>

                              </tbody>
                          </Table>
                      </div>
                      <div className="invoice-table-mobile">
                          <div className="invoice-table-mobile-list">
                              <div className="tr-middle-column d-flex justify-content-around align-items-center">
                                  <div className="th">
                                      <label>Date</label>
                                      <span>dd mmm yyyy</span>
                                  </div>
                                  <div className="th">
                                      <label>order</label>
                                      <span>#56425</span>
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
                                          <span>Wine Name, Region</span>
                                          <span>Vintage, Format</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>3</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>$47,010</span>
                                      </div>
                                  </div>
                                  <div className="tr-row d-flex">
                                      <div className="tr-row-th">
                                          <span>Wine Name, Region</span>
                                          <span>Vintage, Format</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>3</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>$7500</span>
                                      </div>
                                  </div>
                                  <div className="tr-row d-flex">
                                      <div className="tr-row-th">
                                          <span>Wine Name, Region</span>
                                          <span>Vintage, Format</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>6</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>$1500</span>
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
                                      <span className="receipt-link">PENDING</span>
                                  </div>
                              </div>
                          </div>
                          <div className="invoice-table-mobile-list">
                              <div className="tr-middle-column d-flex justify-content-around align-items-center">
                                  <div className="th">
                                      <label>Date</label>
                                      <span>dd mmm yyyy</span>
                                  </div>
                                  <div className="th">
                                      <label>order</label>
                                      <span>#56425</span>
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
                                          <span>Wine Name, Region</span>
                                          <span>Vintage, Format</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>3</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>$47,010</span>
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
                                      <span className="receipt-link">PENDING</span>
                                  </div>
                              </div>
                          </div>
                          <div className="invoice-table-mobile-list">
                              <div className="tr-middle-column d-flex justify-content-around align-items-center">
                                  <div className="th">
                                      <label>Date</label>
                                      <span>dd mmm yyyy</span>
                                  </div>
                                  <div className="th">
                                      <label>order</label>
                                      <span>#56425</span>
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
                                          <span>Wine Name, Region</span>
                                          <span>Vintage, Format</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>3</span>
                                      </div>
                                      <div className="tr-row-th">
                                          <span>$47,010</span>
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
                                      <span className="receipt-link">PENDING</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="invoice-footer d-flex justify-content-center justify-content-md-end">
                          <div className="invoice-xls-view">
                              <Button className="invoice-xls-view-btn mx-2" variant="link">Download XLS</Button>
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
