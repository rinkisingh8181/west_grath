import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './index.scss';
import filterIcon from './../../../images/filter-icon.png';
import _ from 'lodash';

const data = [
    {
        uid: 2,
        wine: 'ab',
        vintage: 1999,
        unit: '1x15',
        status: 'Live Offer',
        cost: 200,
        marketPrice: 250,
        transactionPrice: 410,
        transactionDate: '20-jun-2020'
    },
    {
        uid: 1,
        wine: 'Screaming Eagle, Cabernet Sauvignon',
        vintage: 1999,
        unit: '1x15',
        status: 'Sell',
        cost: 200,
        marketPrice: 250,
        transactionPrice: 310,
        transactionDate: '20-jun-2020'
    },
    {
        uid: 3,
        wine: 'ab',
        vintage: 1999,
        unit: '1x15',
        status: 'Sold',
        cost: 500,
        marketPrice: 550,
        transactionPrice: 250,
        transactionDate: '20-jun-2020'
    }
];

const columns = [
    {name: 'uid', label: 'UID', style: {width: 125}, sort: 0},
    {name: 'wine', label: 'Wine / Vintage / Unit', style: {width: 225}, sort: 0},
    {name: 'status', label: 'Status', style: {width: 130}, sort: 0},
    {name: 'cost', label: 'Cost / Bottle', style: {width: 150}, sort: 0},
    {name: 'marketPrice', label: 'Market Price', style: {width: 148}, sort: 0},
    {name: 'transactionPrice', label: 'Transaction Price', style: {width: 180}, sort: 0},
    {name: 'transactionDate', label: 'Transaction Date', style: {width: 180}, sort: 0}
];

const WineColloection = () => {
    const [isLocationOpen, setIsLocationOpen] = React.useState(false);
    const [isViewOpen, setIsViewOpene] = React.useState(false);
    const [isFilterOpen, setIsFilterOpene] = React.useState(false);
    const [wData, setWineData] = useState([...data]);
    const [columnList, setColumnList] = useState([...columns]);

    const sortData = (field, order, idx) => {
        const sortOrder = {1: 'asc', 2: 'desc'};
        let sort = 0;
        if (order === 1) {
            sort = 2;
        } else if (order === 2) {
            sort = 1;
        }  else if (order === 0) {
            sort = 1;
        } else {
            sort = 0;
        }
        const d = _.orderBy(wData, [field], [sortOrder[sort]]);
        const col = _.cloneDeep(columnList);
        col[idx] = {
            ...col[idx],
            sort
        };
        setWineData([...d]);
        setColumnList([...col]);
    };

    // useEffect(() => {

    // }, [])
    return (
        <div className="wine-colloection-section">
            <Container>
                <div className="wine-colloection-block">
                    <div className="wine-colloection-card">
                        <div className="wine-colloection-head">
                            <div className="wine-colloection-title w-100">
                                <h4>WINE PORTFOLIO</h4>
                            </div>
                            <div className="wine-colloection-filter d-flex mt-3">
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
                                    {
                                        columnList.map((col, idx) => (
                                            <th key={idx} width={col.style.width}>
                                                <div className="table-th-sort" onClick={() => sortData(col.name, col.sort, idx)}>
                                                    {col.label}
                                                    <div className="table-sort">
                                                        <span className={(col.sort === 1) ? "sort-up active" :  "sort-up"} onClick={() => sortData(col.name, col.sort, idx)}></span>
                                                        <span className={(col.sort === 2) ? "sort-down active " : "sort-down"} onClick={() => sortData(col.name, col.sort, idx)}></span>
                                                    </div>
                                                </div>
                                            </th>
                                        ))
                                    }
                                </tr>
                                </thead>
                                <tbody>
                                    {
                                        wData.map((wineData) => (
                                            <tr key={wineData.uid}>
                                                <td>{wineData.uid}</td>
                                                <td>
                                                    <div className="wine-list">
                                                        <span className="d-block text-nowrap wine-name">{wineData.wine}</span>
                                                        <span className="d-block text-nowrap">{wineData.vintage}, {wineData.unit}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className={(wineData.status === 'Sold') ? "status-list sold-td" : "status-list live-offer"}>
                                                        <span>{wineData.status}</span>
                                                    </div>
                                                </td>
                                                <td>{wineData.cost}</td>
                                                <td>{wineData.marketPrice}</td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                        <div className="wine-table-footer d-flex flex-column flex-md-row justify-content-around justify-content-md-center">
                            <div className="d-flex justify-content-center flex-fill">
                                <div className="wine-table-footer-prev">
                                    <Button className="wine-table-prev-next-btn" variant="link">{'Prev 10'}</Button>
                                </div>
                                <div className="wine-table-footer-no mx-3">
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
                                    <Button className="wine-table-prev-next-btn" variant="link">Next 10</Button>
                                </div>
                            </div>
                            <div className="win-table-export text-right">
                                <Button className="export-btn mr-4" variant="link">Export PDF</Button>
                                <Button className="export-btn" variant="link">Export CSV</Button>
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
