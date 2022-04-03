import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export const PrimaryButton = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={styles.root}
      {...props}
    >
      {children}
    </Button>
  );
};
