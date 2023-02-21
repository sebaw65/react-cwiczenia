import React, { useEffect, useState } from 'react';

const Data = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const debounce = setTimeout(() => getData(), 500);
    return () => clearTimeout(debounce);
  }, [query]);

  const getData = async () => {
    let res;
    if (query.length === 0)
      res = await fetch(`https://restcountries.com/v3.1/all`);
    else res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
    const data = await res.json();
    if (res.status === 200) {
      setCountries(data);
    } else console.log(data.message);
  };

  const handleChange = (e) => setQuery(e.target.value);

  console.log(countries);

  return (
    <div>
      <input
        value={query}
        placeholder="Search country"
        onChange={handleChange}
      />
      {countries.length > 0
        ? countries.map((country) => (
            <p key={country.altSpellings[0]}>{country.altSpellings[1]}</p>
          ))
        : ''}
    </div>
  );
};

export default Data;
