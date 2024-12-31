import React from 'react';
import { Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PaginationComponent = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
         <h6 className='text-[16px] text-[#141414]'> Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} products</h6>
    <nav>
      <Pagination>
        {pageNumbers.map((number) => (
          <li key={number} className={`cursor-pointer w-[30px] h-[30px] bg-[#F5F5F5] mr-[5px] flex justify-center items-center  ${number === currentPage ? 'bg-gray-600' : ''} `}  onClick={() => paginate(number)}>
            <Link to="#" className={`text-[#000] no-underline ${number === currentPage ? 'text-white' : ''}`}>
              {number}
            </Link>
          </li>
        ))}
      </Pagination>
    </nav>
    </>
  );
};

export default PaginationComponent;
