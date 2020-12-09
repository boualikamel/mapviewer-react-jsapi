import React from "react";
import TextField from '@material-ui/core/TextField';

const Affaire = () => {
  return (
    <div>
      <form className="affaireFormContainer" noValidate autoComplete="off">
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
          variant="outlined"
          margin="normal"
          fullWidth={true}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="outlined"
          margin="normal"
          fullWidth={true}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="outlined"
          margin="normal"
          fullWidth={true}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          margin="normal"
          fullWidth={true}
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          margin="normal"
          fullWidth={true}
        />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="outlined"
          margin="normal"
          fullWidth={true}
        />
      </form>
    </div>
  );
};

export default Affaire;
