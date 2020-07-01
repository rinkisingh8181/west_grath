import React, {useEffect} from "react";
import AccountStorage from './AccountStorageComponent/AccountStorageComponent'
import Invoice from './InvoiceComponent/InvoiceComponent'
import {account, getSource} from "../../../api";

const Account = () => {
    const [user, setUser] = React.useState({})
    const [invoices, setInvoices] = React.useState([])

    useEffect(() => {
        account.fetch('jJQViBKlSo9ZLo5asqU8', getSource())
            .then(res => {
                setUser({...res.data.account_info, ...res.data.storage})
                setInvoices(res.data.invoices)
            }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <AccountStorage user={user} />
            <Invoice invoices={invoices} />
        </>
    )
};

export default Account;
