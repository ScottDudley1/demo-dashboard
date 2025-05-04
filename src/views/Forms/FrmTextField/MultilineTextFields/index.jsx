import React from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

// ==============================|| MULTILINE TEXTFIELDS ||============================== //

export default function MultilineTextFields() {
  const theme = useTheme();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form noValidate autoComplete="off">
      <Box
        sx={{
          '& .MuiTextField-root': {
            m: theme.spacing(1),
            width: '25ch'
          }
        }}
      >
        <TextField
          variant="standard"
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField variant="standard" id="standard-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline />

        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField id="filled-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="filled" />

        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField id="outlined-textarea" label="Multiline Placeholder" placeholder="Placeholder" multiline variant="outlined" />
        <TextField variant="standard" id="standard-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" />
        <TextField id="filled-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" variant="filled" />
        <TextField id="outlined-multiline-static" label="Multiline" multiline rows={4} defaultValue="Default Value" variant="outlined" />
      </Box>
    </form>
  );
}
