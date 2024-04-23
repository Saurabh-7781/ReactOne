import React, { useState } from 'react'

export default function Searching() {
    const [originalList] = useState(["Gt Mustang", "Lamborgini", "G magon", "Tata Nano", "Jaguar", "Alto 800"]);
    const [List, setList] = useState(originalList);
    const [val, setVal] = useState("");

    const handleSearch = (e) => {
        const searchQuery = e.target.value;
        setVal(searchQuery);

        if (searchQuery) {
            const result = originalList.filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
            setList(result);
        } else {
            setList(originalList);
        }
    };

  return (
    <>
      <input value={val} onChange={handleSearch} />
      {List.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </>
  )
}
