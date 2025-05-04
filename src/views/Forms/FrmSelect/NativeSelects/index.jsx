import React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';

// custom style
const FormControlCustom = styled((props) => <FormControl {...props} />)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120
}));

// ==============================|| NATIVE SELECTS||============================== //

export default function NativeSelects() {
  const theme = useTheme();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai'
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <>
      <FormControlCustom variant="standard">
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-simple'
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControlCustom>
      <FormControlCustom>
        <InputLabel htmlFor="age-native-helper">Age</InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-helper'
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Some important helper text</FormHelperText>
      </FormControlCustom>
      <FormControlCustom>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          name="age"
          sx={{ marginTop: theme.spacing(2) }}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>With visually hidden label</FormHelperText>
      </FormControlCustom>
      <FormControlCustom>
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Age
        </InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder'
          }}
        >
          <option value="">None</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Label + placeholder</FormHelperText>
      </FormControlCustom>
      <FormControlCustom disabled>
        <InputLabel htmlFor="name-native-disabled">Name</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange}
          inputProps={{
            name: 'name',
            id: 'name-native-disabled'
          }}
        >
          <option value="">None</option>
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Disabled</FormHelperText>
      </FormControlCustom>
      <FormControlCustom error>
        <InputLabel htmlFor="name-native-error">Name</InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange}
          name="name"
          inputProps={{
            id: 'name-native-error'
          }}
        >
          <optgroup label="Author">
            <option value="hai">Hai</option>
          </optgroup>
          <optgroup label="Contributors">
            <option value="olivier">Olivier</option>
            <option value="kevin">Kevin</option>
          </optgroup>
        </NativeSelect>
        <FormHelperText>Error</FormHelperText>
      </FormControlCustom>
      <FormControlCustom>
        <InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'name',
            id: 'uncontrolled-native'
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Uncontrolled</FormHelperText>
      </FormControlCustom>
      <FormControlCustom>
        <NativeSelect
          sx={{ marginTop: theme.spacing(2) }}
          value={state.age}
          name="age"
          onChange={handleChange}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="" disabled>
            Placeholder
          </option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Placeholder</FormHelperText>
      </FormControlCustom>
      <FormControlCustom required variant="standard">
        <InputLabel htmlFor="age-native-required">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          name="age"
          inputProps={{
            id: 'age-native-required'
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControlCustom>
      <FormControlCustom variant="outlined">
        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple'
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControlCustom>
      <FormControlCustom variant="filled">
        <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple'
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControlCustom>
    </>
  );
}
