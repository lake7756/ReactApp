import React from "react";

const ITEM_HEIGHT = 40;
const CONTAINER_HEIGHT = 400;
const OVERSCAN = 10;

export default function ReactVirtualized({ items }) {
  const [scrollTop, setScrollTop] = React.useState(0);

  const handleScroll = (e) => {
    const scroll = e.target.scrollTop;
    setScrollTop(scroll);
  };

  const totalHeight = items.length * ITEM_HEIGHT;

  const rawStartIndex = Math.floor(scrollTop / ITEM_HEIGHT);

  const startIndex = Math.max(0, rawStartIndex - OVERSCAN);

  const visibleCount = Math.ceil(CONTAINER_HEIGHT / ITEM_HEIGHT) + OVERSCAN * 2;

  const endIndex = Math.min(items.length, startIndex + visibleCount);

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div
      style={{ height: CONTAINER_HEIGHT, overflowY: "auto" }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        {visibleItems.map((item, i) => {
          const index = startIndex + i;
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: index * ITEM_HEIGHT,
                height: ITEM_HEIGHT,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
