import Editor from "./Editor";

import { useContext } from "react";

import { Datacontext } from "../context/DataProviders";

import {Box, styled} from '@mui/material';
const Container = styled(Box)`
      display: flex;
      background-color: #060606; 
      height: 55vh;


`

const Code = () => {
     
    const {html, setHtml, css, setCss, js, setJs} =  useContext(Datacontext);


    return (
        <Container>
            <Editor
                heading="HTML"
                icon="/"
                color="#FF3C41"
                value={html}
                onchange={setHtml}
            />
            <Editor
                heading="CSS"
                icon="*"
                color="#0EBEFF"
                value={css}
                onchange={setCss}
            />
            <Editor
                heading="JS"
                icon="()"
                color="#FCD000"
                value={js}
                onchange={setJs}
            />
        </Container>
    );
};

export default Code;
