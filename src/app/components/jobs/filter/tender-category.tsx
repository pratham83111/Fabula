import React, { useState } from "react";
import job_data from "@/data/job-data";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setCategory } from "@/redux/features/filterSlice";
import contractorTenders from "@/data/job-data";

const TenderCategory = () => {
  const uniqueCategories = [
    ...new Set(contractorTenders.flatMap((tender) => tender.category)),
  ];
  const [isShowMore, setIsShowMore] = useState(false);
  const { category } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  const visibleCategories = isShowMore
    ? uniqueCategories
    : uniqueCategories.slice(0, 5);

  return (
    <div className="main-body">
      <ul className="style-none filter-input">
        {visibleCategories.map((c, i) => (
          <li key={i}>
            <input
              onChange={() => dispatch(setCategory(c))}
              type="checkbox"
              name={c}
              defaultValue={c}
              checked={category.includes(c)}
            />
            <label>
              {c}{" "}
              <span>
                {contractorTenders.filter((tender) => tender.category.includes(c)).length}
              </span>
            </label>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setIsShowMore((prevState) => !prevState)}
        className="more-btn"
      >
        <i className="bi bi-dash"></i> Show {isShowMore ? "Less" : "More"}
      </div>
    </div>
  );
};

export default TenderCategory;
