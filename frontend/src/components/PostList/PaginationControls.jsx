import React from 'react';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PaginationControls = ({ page, totalPages, onPageChange }) => {
  const pageSize = 5;
  const currentGroup = Math.floor(page / pageSize);
  const startPage = currentGroup * pageSize;
  const endPage = Math.min(startPage + pageSize, totalPages);

  const pageNumbers = [];
  for (let i = startPage; i < endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '35px 0' }}>
      {currentGroup > 0 && (
        <Button onClick={() => onPageChange(startPage - 1)} sx={{ mx: 0.5, color: 'black' }}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Button>
      )}

      {pageNumbers.map(i => (
        <Button
          key={i}
          variant={i === page ? 'contained' : 'outlined'}
          onClick={() => onPageChange(i)}
          sx={{
            mx: 0.5,
            color: i === page ? 'white' : 'black',
            backgroundColor: i === page ? 'black' : 'transparent',
            borderColor: 'black',
            '&:hover': { backgroundColor: 'black', color: 'white' }
          }}
        >
          {i + 1}
        </Button>
      ))}

      {endPage < totalPages && (
        <Button onClick={() => onPageChange(endPage)} sx={{ mx: 0.5, color: 'black', minWidth: '0' }}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      )}
    </div>
  );
};

export default PaginationControls;
