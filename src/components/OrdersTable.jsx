import '../css/OrdersTable.css';
import React, { useEffect, useState } from 'react';
import JsonData from '../json/dataTable.json';

export default function OrdersTable(){
    const [incompleteOrdersCount, setIncompleteOrdersCount] = useState(0);

    const countIncompleteOrders = (orders) => {
        return orders.filter(order => order.status !== 'Complete').length;
    };

    useEffect(() => {
        const count = countIncompleteOrders(JsonData);
        setIncompleteOrdersCount(count);
    }, []);

    const badgeClass = (status) => {
        switch(status) {
            case 'Confirmed':
                return 'badge-pill badge-outline-confirm';
            case 'In Transit':
                return 'badge-pill badge-outline-transit';
            case 'Complete':
                return 'badge-pill badge-outline-complete';
            default:
                return '';
        }
    };
    
    const DisplayTableData = JsonData && JsonData.flatMap((info) => {
        return info.products && info.products.map((product, index) => (
          <tr key={`${info.orderId}-${index}`}>
            <td>{index === 0 ? info.orderId : ''}</td>
            <td>{product.productName}</td>
            <td>{product.productId}</td>
            <td>{index === 0 ? info.customerId : ''}</td>
            <td>{index === 0 ? info.customerName : ''}</td>
            <td>
              <p style={{fontSize: '17px'}}>

                <span className={`${badgeClass(info.status)}`}>
                  {info.status}
                </span>
              </p>
            </td>
            <td>
              <button type="button" className="btn-jamazon">
                Cancel
              </button>
              <button type="button" className="btn-dark">
                Edit
              </button>
            </td>
          </tr>
        ));
      });



    return(
        <div id="content">
            <div className="card card-grey border-shadow justify-content-center p-3 m-4">
                <h3 className="d-flex "> {incompleteOrdersCount} Open Orders </h3>
                <div className="d-flex justify-content-center">
                    <div className="input-group mb-3" style={{width: '800px'}}>
                        <input type="text" className="form-control" placeholder="Search for " aria-label="Search bar" />
                        <button className="btn btn-dark" type="button" id="button-addon1">
                            {/*<i className="bi bi-binoculars-fill"></i>*/}
                        </button>
                        <button className="btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Filter</button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Order Status</a></li>
                            <li><a className="dropdown-item" href="#">Customer ID</a></li>
                            <li><a className="dropdown-item" href="#">Customer Name</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Descending Order</a></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    {/* table starts */}
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Order ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product ID</th>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Customer Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Management</th>
                            </tr>
                        </thead>
                        <tbody>
                           {DisplayTableData}       
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}