import React, { useEffect, useState } from 'react';
import DashboardHeader from './dashboard-header';
import JobAlertItem from './job-alert-item';
import ShortSelect from '../../common/short-select';
import { getAlljobs } from '@/redux/Api/JobApi';
import contractorTenders from '@/data/job-data';

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}

const JobAlertArea = ({ setIsOpenSidebar }: IProps) => {
  const [allJobs, setAllJobs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Set number of items per page
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    try {
      setAllJobs(contractorTenders);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  }, []);

  // Calculate the current jobs based on the selected page
  const currentJobs = allJobs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page click
  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // Calculate total pages
  useEffect(() => {
    setPageCount(Math.ceil(allJobs.length / itemsPerPage));
  }, [allJobs]);

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        <div className="d-flex align-items-center justify-content-between mb-40 lg-mb-30">
          <h2 className="main-title m0">My Contract</h2>
          <div className="short-filter d-flex align-items-center">
            <div className="text-dark fw-500 me-2">Short by:</div>
            <ShortSelect />
          </div>
        </div>

        <div className="bg-white card-box border-20">
          <div className="table-responsive">
            <table className="table job-alert-table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Alert </th>
                  <th scope="col">Contracter</th>
                  <th scope="col">Time</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody className="border-0">
                {currentJobs.map((item, index) => (
                  <JobAlertItem
                    key={index}
                    item={item}
                    title={item.title}
                    location={item.location}
                    duration='Fulltime'
                    category={item.overview}
                    found='2'
                    time='Weekly'
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <ul className="pagination">
            {/* Previous Button */}
            <li
              className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              onClick={() => handlePageClick(currentPage - 1)}
            >
              <a className="page-link" href="#!" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li
              className={`page-item ${currentPage === 1 ? "active" : ""}`}
              onClick={() => handlePageClick(1)}
            >
              <a className="page-link" href="#!">1</a>
            </li>

            {pageCount > 3 && currentPage > 3 && (
              <li className="page-item disabled"><span className="page-link">...</span></li>
            )}

            {pageCount > 1 && currentPage !== 1 && currentPage !== pageCount && (
              <li
                className={`page-item ${currentPage === 2 ? "active" : ""}`}
                onClick={() => handlePageClick(2)}
              >
                <a className="page-link" href="#!">2</a>
              </li>
            )}

            {pageCount > 2 && currentPage !== pageCount && (
              <li
                className={`page-item ${currentPage === 3 ? "active" : ""}`}
                onClick={() => handlePageClick(3)}
              >
                <a className="page-link" href="#!">3</a>
              </li>
            )}

            {pageCount > 3 && currentPage < pageCount - 1 && (
              <li className="page-item disabled"><span className="page-link">...</span></li>
            )}

            {pageCount > 3 && (
              <li
                className={`page-item ${currentPage === pageCount ? "active" : ""}`}
                onClick={() => handlePageClick(pageCount)}
              >
                <a className="page-link" href="#!">{pageCount}</a>
              </li>
            )}

            <li
              className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}
              onClick={() => handlePageClick(currentPage + 1)}
            >
              <a className="page-link" href="#!" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>



      </div>
    </div>
  );
};

export default JobAlertArea;
