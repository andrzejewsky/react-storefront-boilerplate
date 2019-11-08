import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    margin: '5rem auto',
    textAlign: 'center'
  },
  title: theme.section.title,
  description: theme.section.description,
  gridsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '3.75rem',
    margin: '0 -10px'
  }
})

const GridGallery = ({ title = null, description = null, size, children, maxWidth = 960, classes }) => (
  <section className={classes.root} style={{ maxWidth: `${maxWidth}px` }}>
    { typeof title === 'string' && title.length > 0 && <div className={classes.title}>{title}</div> }
    { typeof description === 'string' && description.length > 0 && <div className={classes.description}>{description}</div> }
    <div className={classes.gridsContainer}>
      {children}
    </div>
  </section>
)

GridGallery.propTypes = {
  title: PropTypes.string
}

export default withStyles(styles)(GridGallery)
