import React from "react";
import job_data from "@/data/job-data";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setTenderType } from "@/redux/features/filterSlice";
import contractorTenders from "@/data/job-data";

// job type items

export function TenderTypeItems({ showLength = true }: { showLength?: boolean }) {
  const jobDuration = [...new Set(contractorTenders.map((job) => job.tenderType))];
  const {tenderType } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  return (
    <>
      {jobDuration.map((duration, index) => (
        <li key={index}>
          <input
            onChange={() => dispatch(setTenderType(duration))}
            type="checkbox"
            name="TenderType"
            defaultValue={duration}
            checked={tenderType.includes(duration)}
          />
          <label>
            {duration}{" "}
            {showLength && (
              <span>
                {contractorTenders.filter((tender) => tender.duration === duration).length}
              </span>
            )}
          </label>
        </li>
      ))}
    </>
  );
}

const TenderType = () => {
  return (
    <div className="main-body">
      <ul className="style-none filter-input">
        <TenderTypeItems />
      </ul>
    </div>
  );
};

export default TenderType;
