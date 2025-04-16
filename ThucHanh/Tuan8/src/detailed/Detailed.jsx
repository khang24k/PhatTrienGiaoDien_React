import React, { useState, useEffect } from 'react';
import data from '../../data/detailed.json';
import './Detailed.css';
import Filepng from '../assets/File text 1.png';
import EditIcon from '../assets/create.png';

function Detailed() {
  const [reportData, setReportData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // State để kiểm soát việc hiển thị cửa sổ chỉnh sửa
  const [editingIndex, setEditingIndex] = useState(null); // State để theo dõi index của hàng đang chỉnh sửa
  const [editingData, setEditingData] = useState({}); // State để lưu trữ dữ liệu chỉnh sửa

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
    console.log('Selected items:', selectedItems);
  };

  const handleEditClick = (index) => {
    console.log(`Edit clicked for row ${index}`);
    setEditingIndex(index);
    setEditingData({ ...reportData[index] }); // Khởi tạo dữ liệu chỉnh sửa với dữ liệu hiện tại
    setIsEditing(true); // Hiển thị cửa sổ chỉnh sửa
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditingData({ ...editingData, [name]: value });
  };

  const handleSaveClick = () => {
    console.log('Saving edited data:', editingData);
    // Thực hiện logic lưu dữ liệu đã chỉnh sửa ở đây (ví dụ: gọi API)
    const updatedData = [...reportData];
    updatedData[editingIndex] = editingData;
    setReportData(updatedData);
    setIsEditing(false); // Ẩn cửa sổ chỉnh sửa sau khi lưu
    setEditingIndex(null);
  };

  const handleCancelClick = () => {
    setIsEditing(false); // Ẩn cửa sổ chỉnh sửa
    setEditingIndex(null);
  };

  return (
    <div className="container">
      {/* ... Phần header và table giữ nguyên ... */}
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
              <td className="customer-info">
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

      {/* Cửa sổ chỉnh sửa */}
      {isEditing && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Report Item</h2>
            <label>
              Customer Name:
              <input
                type="text"
                name="name"
                value={editingData.name || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Company:
              <input
                type="text"
                name="company"
                value={editingData.company || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Order Value:
              <input
                type="number"
                name="orderValue"
                value={editingData.orderValue || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Order Date:
              <input
                type="text"
                name="orderDate"
                value={editingData.orderDate || ''}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Status:
              <select
                name="status"
                value={editingData.status || ''}
                onChange={handleInputChange}
              >
                <option value="New">New</option>
                <option value="In-progress">In-progress</option>
                <option value="Completed">Completed</option>
              </select>
            </label>
            <div className="modal-actions">
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detailed;