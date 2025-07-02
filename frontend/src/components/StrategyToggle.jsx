import React from 'react';
import { AppBar, Toolbar, Typography, Switch, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons';

const StrategyToggle = ({ strategy, onChange }) => {
  const handleToggle = () => {
    const next = strategy === 'scroll' ? 'paging' : 'scroll';
    onChange(next);
  };

  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#fff', borderBottom: '2px solid #000' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: '#000' }}>
          <FontAwesomeIcon icon={faBookOpenReader} />&nbsp;Story Board
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ color: '#000', fontWeight: 500 }}>무한스크롤</Typography>
          <Switch
            checked={strategy === 'paging'}
            onChange={handleToggle}
            color="default"
          />
          <Typography sx={{ color: '#000', fontWeight: 500 }}>페이징</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default StrategyToggle;
