import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Tag = ({ text, selected, handleTagClick }) => {
    return (
        <Stack spacing={1} alignItems="center" >
            <Stack direction="row" spacing={1}>
                <Chip label={text} color="success" variant={selected ? "filled" : "outlined"} onClick={handleTagClick}
                    sx={!selected ? { color: "black", background: "white", borderColor: "grey" } : {}}
                    className='tag-wrapper'
                />
            </Stack>
        </Stack>
    );
};

export default Tag;