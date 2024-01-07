import React from "react";

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Adding some items on Packing list👜</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const packedPercent = Math.round((numPacked * 100) / numItems);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? `🏃You are all set for the trip`
          : `You have ${numItems} items on your list and you have already packed ${numPacked} items (${
              numPacked === 0 ? 0 : packedPercent
            }%).`}
      </em>
    </footer>
  );
}
