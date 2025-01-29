"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContractorTender, IJobType } from "@/types/job-data-type";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { add_to_wishlist } from "@/redux/features/wishlist";
import logo from '../../../../../public/assets/images/assets/ogg.png'

const ListItemTwo = ({ item }: { item: ContractorTender }) => {
  console.log("ppp",item)
  const {wishlist} = useAppSelector(state => state.wishlist);
  const isActive = wishlist.some(p => p.id === item.id);
  const dispatch = useAppDispatch();
  // handle add wishlist
  const handleAddWishlist = (item: ContractorTender) => {
    dispatch(add_to_wishlist(item));
  };
  return (
    <div className="job-list-one style-two position-relative border-style mb-20">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-5">
          <div className="job-title d-flex align-items-center">
            <Link href={`/job-details-v1/${item.id}`} className="logo">
              <Image src={logo} alt="logo" width={40} height={40} className="lazy-img m-auto rounded-circle" />
            </Link>
            <div className="split-box1">
              <Link
                href={`/tenders-details/${item.id}`}
                className="job-duration fw-500"
              >
                {/* {item.ContractorTender} */}
              </Link>
              <Link
                href={`/tenders-details/${item.id}`}
                className="title fw-500 tran3s"
              >
                {item.title.slice(0, 50)} {item.title.length > 20 ? ".." : ""}
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="job-location">
            <Link href={`/tenders-details/${item.id}`}>{item.location}</Link>
          </div>
          <div className="job-salary">
            {/* <span className="fw-500 text-dark">{item.budget}</span> /{" "} */}
            {item.salary_duration} . {item.experience}
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="btn-group d-flex align-items-center justify-content-sm-end xs-mt-20">
            <a
              onClick={() => handleAddWishlist(item)}
              className={`save-btn text-center rounded-circle tran3s me-3 cursor-pointer ${isActive?'active':''}`}
              title={`${isActive?'Remove Job':'Save Job'}`}
            >
              <i className="bi bi-bookmark-dash"></i>
            </a>
            <Link
              href={`/tenders-details/${item.id}`}
              className="bg-success p-2 rounded-4 text-center tran3s"
            >
              DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItemTwo;
