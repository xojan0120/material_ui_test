import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ReactSwipe from 'react-swipe';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function aaa() {
  alert("huga");
}

function ContainedButtons(props) {
  const { classes } = props;
  let reactSwipeEl;
  return (
    <div>
      <ReactSwipe
        className="carousel"
        swipeOptions={{ continuous: false, callback: function(index,elem){aaa()}}}
        ref={el => (reactSwipeEl = el)} >
        <Button variant="contained" className={classes.button}>
          Default1
        </Button>
        <Button variant="contained" className={classes.button}>
          Default2
        </Button>
      </ReactSwipe>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
