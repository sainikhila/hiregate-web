


import React, { useState } from 'react';
import { IconButton, InputBase, ClickAwayListener } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';


const SearchContainer = styled('div')(({ theme }) => ({

    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "42px",
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',

    transition: 'width 0.3s ease-in-out',
    marginLeft: 0,
    overflow: 'hidden',
    '&.open': {
        width: '300px'
    },
}));

const SearchInputComponent = () => {
    const [showInput, setShowInput] = useState(false);

    const handleSearchClick = () => {
        setShowInput(!showInput);
    };

    const handleSearchClickAway = () => {
        setShowInput(false);
    };

    return (
        <ClickAwayListener onClickAway={handleSearchClickAway}>
            <SearchContainer className={showInput ? 'open' : ''} sx={{ borderColor: "borderColor" }}>
                <IconButton aria-label="menu" onClick={handleSearchClick} sx={{
                    borderRadius: '5px',
                    '&:hover': {
                        backgroundColor: "transparent",
                    },
                }}>
                    <SearchIcon fontSize='small' />
                </IconButton>
                <InputBase
                    disabled={!showInput}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'Search' }}
                />
            </SearchContainer>
        </ClickAwayListener>
    );
};

export default SearchInputComponent;
