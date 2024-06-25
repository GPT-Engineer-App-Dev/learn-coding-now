import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Box, Button } from '@chakra-ui/react';

const CodeEditor = () => {
  const [code, setCode] = useState('// Write your code here');

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const executeCode = () => {
    try {
      // eslint-disable-next-line no-eval
      eval(code);
    } catch (error) {
      console.error('Error executing code:', error);
    }
  };

  return (
    <Box>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript()]}
        onChange={(value) => handleCodeChange(value)}
      />
      <Button mt={4} colorScheme="teal" onClick={executeCode}>
        Run Code
      </Button>
    </Box>
  );
};

export default CodeEditor;