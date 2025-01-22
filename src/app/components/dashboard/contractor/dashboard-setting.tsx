import React, { useState } from "react";
import DashboardHeader from "./dashboard-header";
import ChangePasswordArea from "./change-password";
// import ModalComponent from "./ModalComponent";    
import SettingModalComponent from "../../common/popup/settingModal";

type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardSettingArea = ({ setIsOpenSidebar }: IProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* Header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* Header end */}

        <h2 className="main-title">Account Settings</h2>

        <div className="bg-white card-box border-20">
          <button
            className="dash-btn-two tran3s me-3 rounded-3"
            onClick={handleModalOpen}
          >
            Edit & Update
          </button>

          <form className="mt-4">
            <div className="row">
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John Doe"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Kabir"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+810 321 889 021"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="button-group d-inline-flex align-items-center mt-30">
                <a href="#" className="dash-btn-two tran3s me-3 rounded-3">
                  Save
                </a>
                <a href="#" className="dash-cancel-btn tran3s">
                  Cancel
                </a>
              </div>
            </div>
          </form>
        </div>

        {/* Change password area */}
        <ChangePasswordArea />
        {/* Change password area */}

        {/* Reusable Modal Component */}
        <SettingModalComponent
          show={isModalOpen}
          onClose={handleModalClose}
          title="Edit & Update"
          onSave={handleModalClose}
        >
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John Doe"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Kabir"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+810 321 889 021"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </form>
        </SettingModalComponent>
      </div>
    </div>
  );
};

export default DashboardSettingArea;
