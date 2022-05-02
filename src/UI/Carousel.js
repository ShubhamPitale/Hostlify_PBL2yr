import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Carousel.module.css";
import {
  faArrowLeft,
  faArrowRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className={classes["carousel-item"]} style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div
      {...handlers}
      className={classes.carousel}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className={classes.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className={classes.indicators}>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} color="#f25c54" />
        </button>
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? classes.active : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              <div className={classes.dot}></div>
            </button>
          );
        })}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <FontAwesomeIcon icon={faArrowRight} color="#f25c54" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
