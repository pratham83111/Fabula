
"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import avatar from '@/assets/dashboard/images/avatar_02.jpg';
import { toast } from 'react-toastify';
import { updateUser } from '@/redux/Api/UserManagementApi';
import DashboardHeader from './dashboard-header';
import CountrySelect from './country-select';
import CitySelect from './city-select';
import StateSelect from './state-select';

// props type 
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const DashboardProfileArea = ({ setIsOpenSidebar }: IProps) => {

  const [formData, setFormData] = useState({
    avatar: "",
    fullname: "",
    email: "",
    website: "",
    foundedDate: "",
    companySize: "",
    number: "",
    category: "",
    about: "",
    Location: {
      country: "",
      zipcode: "",
      city: "",
      address: "",
    },
    country: "",
    city: "",
    zipCode: "",
    state: "",
    mapLocation: "",
    socialLinks: ["", ""],
    gender: "",
    dob: "",
    recruiterName: "",
    socialMediaLink: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null); // State for selected image

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("IsLoginData") || "{}");
    setFormData({
      avatar: user.avatar || "",
      fullname: user.fullname || "",
      email: user.email || "",
      website: user.websiteLink || "",
      foundedDate: user.dob || "",
      companySize: user.companySize || "",
      number: user.contact_number || "",
      category: user.category || "",
      about: user.aboutUs || "",
      Location: {
        country: user.Location?.country || "",
        zipcode: user.Location?.zipcode || "",
        city: user.Location?.city || "",
        address: user.Location?.address || "",
      },
      country: user.country || "",
      city: user.city || "",
      zipCode: user.zipCode || "",
      state: user.state || "",
      mapLocation: user.mapLocation || "",
      socialLinks: user.socialLinks || ["", ""],
      gender: user.gender || "",
      dob: user.dob || "",
      recruiterName: user.recruiterName || "",
      socialMediaLink: user.socialMediaLink || "",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    index?: number
  ) => {
    if (field.startsWith("Location.")) {
      const locationField = field.split(".")[1];
      setFormData({
        ...formData,
        Location: {
          ...formData.Location,
          [locationField]: e.target.value,
        },
      });
    } else if (field === "socialLinks" && typeof index === "number") {
      const updatedSocialLinks = [...formData.socialLinks];
      updatedSocialLinks[index] = e.target.value;
      setFormData({ ...formData, socialLinks: updatedSocialLinks });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setFormData({
        ...formData,
        avatar: URL.createObjectURL(file), // Update avatar preview with selected image
      });
    }
  };

  // Handle form submission to update user API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userData = {
      fullname: formData.fullname,
      email: formData.email,
      contact_number: formData.number,
      dob: formData.dob,
      gender: formData.gender,
      Location: {
        country: formData.Location.country,
        zipcode: formData.Location.zipcode,
        city: formData.Location.city,
        address: formData.Location.address,
      },
      is_activated: true,
      aboutUs: formData.about,
      websiteLink: formData.website,
      socialMediaLink: formData.socialMediaLink,
      recruiterName: formData.recruiterName,
      companySize: formData.companySize,
      category: formData.category,
      avatar: selectedImage, // Include selected image in the data
    };

    try {
      const user = JSON.parse(localStorage.getItem("IsLoginData") || "{}");
      const response = await updateUser(user, userData);
      toast.success("Profile Updated Successfully!");
      localStorage.setItem("IsLoginData", JSON.stringify({ ...user, ...userData }))
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Something Went Wrong !!")
    }
  };

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        <h2 className="main-title">My Profile</h2>

        <div className="bg-white card-box border-20">
          <div className="user-avatar-setting d-flex align-items-center mb-30">
            <Image
              src={formData.avatar || avatar} // Use selected image or default avatar
              alt="avatar"
              className="lazy-img user-img"
              width={100}
              height={100}
            />
            <div className="upload-btn position-relative tran3s ms-4 me-3">
              Upload new photo
              <input
                type="file"
                id="uploadImg"
                name="uploadImg"
                onChange={handleImageChange}
                placeholder=""
              />
            </div>
            <button className="delete-btn tran3s">Delete</button>
          </div>

          <div className="dash-input-wrapper mb-30">
            <label htmlFor="">Employer Name*</label>
            <input type="text" placeholder="John Doe" value={formData.fullname || ""}
              onChange={(e) => handleChange(e, "fullname")}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Email*</label>
                <input type="email" placeholder="companyinc@gmail.com" value={formData.email}
                  onChange={(e) => handleChange(e, "email")} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Website*</label>
                <input type="text" placeholder="http://somename.come" value={formData.website}
                  onChange={(e) => handleChange(e, "website")} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Founded Date*</label>
                <input type="date" value={formData.foundedDate}
                  onChange={(e) => handleChange(e, "foundedDate")} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Company Size*</label>
                <input type="text" placeholder="700" value={formData.companySize}
                  onChange={(e) => handleChange(e, "companySize")} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Phone Number*</label>
                <input type="tel"
                  value={formData.number}
                  onChange={(e) => handleChange(e, "number")} placeholder="+880 01723801729" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="">Category*</label>
                <input type="text" placeholder="Account, Finance, Marketing" value={formData.category}
                  onChange={(e) => handleChange(e, "category")} />
              </div>
            </div>
          </div>
          <div className="dash-input-wrapper">
            <label htmlFor="">About Company*</label>
            <textarea className="size-lg" placeholder="Write something interesting about you...." value={formData.about}
              onChange={(e) => handleChange(e, "about")} />
            <div className="alert-text">Brief description for your company. URLs are hyperlinked.</div>
          </div>
        </div>

        <div className="bg-white card-box border-20 mt-40">
          <h4 className="dash-title-three">Social Media</h4>
          <div className="dash-input-wrapper mb-20">
            <label htmlFor="">Network 1</label>
            <input
              id="network1"
              type="text"
              placeholder="https://www.facebook.com/"
              value={formData.socialLinks[0] || ""} // Ensure the value is not undefined
              onChange={(e) => handleChange(e, "socialLinks", 0)} // Pass correct arguments to handleChange
            />
          </div>
          <div className="dash-input-wrapper mb-20">
            <label htmlFor="">Network 2</label>
            <input
              id="network1"
              type="text"
              placeholder="https://www.facebook.com/"
              value={formData.socialLinks[1] || ""}
              onChange={(e) => handleChange(e, "socialLinks", 1)}
            />
          </div>
          <a href="#" className="dash-btn-one"><i className="bi bi-plus"></i> Add more link</a>
        </div>

        <div className="row mt-4">
          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Country*</label>
              <CountrySelect />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">City*</label>
              <CitySelect />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">Zip Code*</label>
              <input
                type="number"
                placeholder="1708"
                value={formData.Location.zipcode}
                onChange={(e) => handleChange(e, "Location.zipcode")}
              />
            </div>
          </div>

          <div className="col-lg-3">
            <div className="dash-input-wrapper mb-25">
              <label htmlFor="">State*</label>
              <StateSelect />
            </div>
          </div>
        </div>



        {/* Rest of the form */}
        <div className="button-group d-inline-flex align-items-center mt-30">
          <button onClick={handleSubmit} className="dash-btn-two tran3s me-3">Save</button>
          <a href="#" className="dash-cancel-btn tran3s">Cancel</a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default DashboardProfileArea;
