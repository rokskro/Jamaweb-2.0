// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "../components/Sidebar";
import OrdersTable from "../components/OrdersTable";

function Orders(){
    return(
        <div style={{display: 'flex'}}>
            <div style={{flex: '1'}}>
                <Sidebar />
            </div>
            <div style={{flex: '3'}}>
                <OrdersTable />
            </div>
        </div>
    )
}

export default Orders;