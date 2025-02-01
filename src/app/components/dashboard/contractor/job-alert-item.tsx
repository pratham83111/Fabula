import React, { useState } from "react";
import Image from "next/image";
import view from "@/assets/dashboard/images/icon/icon_18.svg";
import share from "@/assets/dashboard/images/icon/icon_19.svg";
import edit from "@/assets/dashboard/images/icon/icon_20.svg";
import delete_icon from "@/assets/dashboard/images/icon/icon_21.svg";
import EditModal from "../../common/popup/EditjobModal";

const JobAlertItem = ({
  item,
  title,
  duration,
  location,
  category,
  found,
  time,
}: {
  item: any;
  title: string;
  duration: string;
  location: string;
  category: string;
  found: string;
  time: string;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false); // For delete confirmation modal
  const [jobDetails, setJobDetails] = useState({
    item,
    title: '',
    duration: '',
    date: '',
    company: '',
    location: '',
    category: [], 
    experience: '',
    salary: 0,
    salary_duration: '',
    tags: [],
    english_fluency: '',
    overview: '',
    created_at: '',
    description: '',
    responsibilities: '',
    tenderType: '',
    time: '',
    benefits: '',
    found: '',
  });
  
  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleSave = (updatedData: typeof jobDetails) => {
    setJobDetails(updatedData);
  };

  const handleDeleteClick = () => {
    setDeleteModalOpen(true); 
  };

  const handleDeleteConfirm = () => {
    console.log("Job deleted", item);
    setDeleteModalOpen(false); 
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false); 
  };

  return (
    <>
      <tr>
        <td>{item.title}</td>
        <td>
          <div className={`job-type fw-500 ${item.duration === "Part-Time" ? "part-time" : ""}`}>
            {item.duration}
          </div>
          <div>{item.location}</div>
          <div>{item.category}</div>
        </td>
        <td>Tender found {item.found}</td>
        <td>{item.created_at}</td>
        <td>
          <div className="action-dots float-end">
            <button
              className="action-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  <Image src={view} alt="icon" className="lazy-img" /> View
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Image src={share} alt="icon" className="lazy-img" /> Share
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={handleEditClick}>
                  <Image src={edit} alt="icon" className="lazy-img" /> Edit
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={handleDeleteClick}>
                  <Image src={delete_icon} alt="icon" className="lazy-img" /> Delete
                </a>
              </li>
            </ul>
          </div>
        </td>
      </tr>

      <EditModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        initialData={jobDetails} 
        onSave={handleSave}
      />

      {isDeleteModalOpen && (
        <div
          className="modal fade show d-block"
          tabIndex={-1}
          role="dialog"
          
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content">
              <div className="modal-header bg-success ">
                <h5 className="modal-title ">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleDeleteCancel}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this tender?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleDeleteCancel}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteConfirm}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobAlertItem;
