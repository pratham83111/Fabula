import React from "react";
import job_data from "@/data/job-data";
import { setExperience } from "@/redux/features/filterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import contractorTenders from "@/data/job-data";

export function TenderExperienceItems({showLength = true}: {showLength?: boolean}) {
  const uniqueExperiences = [...new Set(contractorTenders.map((tender) => tender.experience))];
  const { experience } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  return (
    <>
      {uniqueExperiences.map((e, index) => (
        <li key={index}>
          <input
            onChange={() => dispatch(setExperience(e))}
            type="checkbox"
            name={e}
            defaultValue={e}
            checked={experience.includes(e)}
          />
          <label>
            {e}
            {showLength && (
              <span>
                {contractorTenders.filter((tender) => tender.experience === e).length}
              </span>
            )}
          </label>
        </li>
      ))}
    </>
  );
}

const TenderExperience = () => {
  return (
    <>
      <div className="main-body">
        <ul className="style-none filter-input">
          <TenderExperienceItems />
        </ul>
      </div>
    </>
  );
};

export default TenderExperience;
