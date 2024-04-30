import { useState } from 'react';

import { Box, styled } from '@mui/material'; // Changed import to specifically import Box and styled
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 7px 7px;
`;

const Heading = styled(Box)`
   background: #1d1e22;
   display: flex;
   padding: 9px 12px; /* Removed unnecessary forward slash */
`;

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC; /* Removed extra digit */
    justify-content: space-between; /* Corrected justify-content property */
`;

const Editor = ({ heading, icon, color, value, onchange }) => {
     
    const[open, setOpen] = useState(true);

    const handlechange = (editor, data, value) => {
        onchange(value);

    }

    return (
        <Container style={open ? null : {flexGrow: 0}}>
            <Header>
                <Heading>
                    <Box component="span" style={{
                        background: color,
                        height: 20,
                        width: 20,
                        display: 'flex',
                        justifyContent: 'center',
                        borderRadius: 5,
                        marginRight: 5,
                        paddingBottom: 2,
                        color: '#000'
                    }}>
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                fontSize="small"
                style={{alignSelf: 'center'}}
                onClick={()=> setOpen(prevstate => !prevstate)}
                />
            </Header>
            <div>
                <ControlledEditor 
                    className='Controlled-editor'
                    value={value}
                    onBeforeChange={handlechange}
                    options={{
                        theme: 'material',
                        lineNumbers: true
                    }}
                />
            </div>
        </Container>
    );
};

export default Editor;
