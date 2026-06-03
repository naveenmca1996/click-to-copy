import React, { useState } from "react";

const topics = [
  {
    title: "map",
    code: `const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]`
  },
  {
    title: "forEach",
    code: `const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num);
});`
  }
];

export default function App() {
  const [expanded, setExpanded] = useState({});

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied!");
  };

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>JavaScript Topics</h1>

      {topics.map((topic, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "15px",
            padding: "15px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h3>{topic.title}</h3>

            <div>
              <button
                onClick={() => copyCode(topic.code)}
                style={{ marginRight: "10px" }}
              >
                Copy
              </button>

              <button onClick={() => toggleExpand(index)}>
                {expanded[index] ? "Hide" : "Extend"}
              </button>
            </div>
          </div>

          {expanded[index] && (
            <pre
              style={{
                background: "#f4f4f4",
                padding: "10px",
                borderRadius: "5px",
                overflowX: "auto"
              }}
            >
              <code>{topic.code}</code>
            </pre>
          )}
        </div>
      ))}
    </div>
  );
}
