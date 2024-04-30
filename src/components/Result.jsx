import { useContext, useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { Datacontext } from '../context/DataProviders';

const Container = styled(Box)`
  height: 41vh;
`;

const Result = () => {
  const [src, setSrc] = useState('');

  const { html, css, js } = useContext(Datacontext);
     
  const srccode = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
  `;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srccode);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Container>
      <iframe
        srcDoc={src}
        title="output"
        sandbox='allow-scripts'
        frameBorder={0}
        width="100%"
        height="100%"
      />
    </Container>
  );
};

export default Result;
