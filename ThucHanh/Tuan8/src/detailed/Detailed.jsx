import React, { useState, useEffect } from 'react';
import data from '../../data/detailed.json';
import './Detailed.css'; // Import CSS riêng
import Filepng from '../assets/File text 1.png';
import EditIcon from '../assets/create.png'; // Import icon cây bút

function Detailed() {
  const [reportData, setReportData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    setReportData(data);
  }, []);

  const statusClass = (status) => {
    switch (status) {
      case 'New':
        return 'status status-new';
      case 'In-progress':
        return 'status status-inprogress';
      case 'Completed':
        return 'status status-completed';
      default:
        return 'status';
    }
  };

  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, index]);
    } else {
      setSelectedItems(selectedItems.filter((itemIndex) => itemIndex !== index));
    }
    console.log('Selected items:', selectedItems); // Để theo dõi (tùy chọn)
  };

  const handleEditClick = (index) => {
    console.log(`Edit clicked for row ${index}`);
    // Xử lý logic chỉnh sửa ở đây
  };

  return (
    <div className="container">
      <div className="overview-header">
        <div className="overview-title">
          <img src={Filepng} alt="Detailed" />
          <h2>Detailed Report</h2>
        </div>
        <div className="report-actions">
          <button className="import-button">Import</button>
          <button className="export-button">Export</button>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Order Value</th>
            <th>Order Date</th>
            <th className="status-header">Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="checkbox"
                  onChange={(event) => handleCheckboxChange(event, index)}
                  checked={selectedItems.includes(index)}
                />
              </td>
              <td className="customer-info"> {/* Thêm class để style */}
                <img src={item.avatar} alt={item.name} className="avatar" />
                {item.name}
              </td>
              <td>{item.company}</td>
              <td>${item.orderValue}</td>
              <td>{item.orderDate}</td>
              <td className="status-cell">
                <span className={statusClass(item.status)}>
                  {item.status}
                </span>
              </td>
              <td className="edit-cell">
                <button className="edit-button" onClick={() => handleEditClick(index)}>
                  <img src={EditIcon} alt="Edit" className="edit-icon" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="report-summary">
        {reportData.length} results
      </div>
    </div>
  );
}

export default Detailed;