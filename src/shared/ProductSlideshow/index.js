import React, { useState, useEffect, useRef } from 'react'
import { withStyles } from '@material-ui/core';
import ProductItem from '../../subcategory/ProductItem';

const MAX_WIDTH = 240

const styles = theme => ({
  root: {
    width: '100%',
    position: 'relative',
    margin: '10rem 0'
  },
  title: theme.section.title,
  rootContainer: {
    overflow: 'hidden',
    margin: '4rem auto 0',
    width: '100%'
  },
  productsContainer: {
    display: 'flex',
    transition: 'transform, .3s'
  },
  arrow: {
    position: 'absolute',
    backgroundColor: 'transparent',
    color: '#1d1f22',
    cursor: 'pointer',
    top: 'calc(50% - 20px)',
    boxShadow: '0 5px 12px -5px transparent',
    transition: 'padding .15s linear,background-color .15s linear,box-shadow .15s linear',

    '&:hover': {
      backgroundColor: '#1d1f22',
      color: '#fff',
      boxShadow: '0 5px 12px -5px rgba(29,31,34,.6)',
    }
  },
  leftArrow: {
    padding: '9px 26px 9px 10px',
    textAlign: 'left',
    left: 0,

    '&:hover': {
      padding: '14px 36px 14px 10px',
    }
  },
  rightArrow: {
    padding: '9px 10px 9px 26px',
    textAlign: 'right',
    right: 0,

    '&:hover': {
      padding: '14px 10px 14px 36px',
    }
  },
  arrowIcon: {
    fontSize: '46px',
    lineHeight: 0
  },
  productOverride: {
    flex: '0 0 auto',
    width: '25%',
    listStyle: 'none',
    padding: '1.25rem',
    boxShadow: 'none',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '50%'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  }
})

const ProductSlideshow = ({ classes, title = null, products, elementsVisible = 4 }) => {
  const [maxOffset, setMaxOffset] = useState(0);
  const [offset, setOffset] = useState(0);

  const rootContainer = useRef(null);

  const calculateMaxElementsVisible = (containerWidth) => Math.ceil((containerWidth - 160) / MAX_WIDTH);

  const calculateMaxOffset = (maximumElementsVisible) => maximumElementsVisible > 0
    ? Math.ceil(products.length / maximumElementsVisible) - 1
    : 0

  const handleWindowResize = () => {
    const elementsVisibleCalculated = calculateMaxElementsVisible(rootContainer.current.getBoundingClientRect().width)

    const visibleElementsQty = elementsVisibleCalculated < elementsVisible ? elementsVisibleCalculated : elementsVisible;

    setMaxOffset(calculateMaxOffset(visibleElementsQty))
  }

  useEffect(() => {
    handleWindowResize();
  }, [products, elementsVisible])


  const prevSlide = () => setOffset(offset > 0 ? offset - 1 : maxOffset)

  const nextSlide = () => setOffset(offset < maxOffset ? offset + 1 : 0)

  return (
    <div className={classes.root}>
      { typeof title === 'string' && title.length > 0 && <div className={classes.title}>{title}</div> }
      <div ref={rootContainer} className={classes.rootContainer}>
        <div className={classes.productsContainer} style={{
          transform: `translate3d(${-offset * 100}%, 0, 0)`
        }}>
          {products.map((product, key) => <ProductItem
            key={key}
            product={product}
            rootStyle={classes.productOverride}
          />)}
        </div>
      </div>

      <div onClick={prevSlide} className={`${classes.arrow} ${classes.leftArrow}`}>
          <span className={classes.arrowIcon}>←</span>
        </div>
        <div onClick={nextSlide} className={`${classes.arrow} ${classes.rightArrow}`}>
          <span className={classes.arrowIcon}>→</span>
        </div>
    </div>

  )
}

export default withStyles(styles)(ProductSlideshow)
