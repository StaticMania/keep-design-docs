"use client";
import { useState } from "react";
import { Button } from "@/src/components/Button";
import { SearchBar } from "@/src/components/SearchBar";
import { ArrowRight, MapPinLine } from "phosphor-react";
import { Book, books } from "./DefaultSearchBar";
import { Dropdown } from "@/src/components/Dropdown";

const SearchBarWithRightSideIcon = () => {
  const [data, setData] = useState<Book[]>([]);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
    <SearchBar
      placeholder="Search Anything"
      addon={
        <Button type="primary" size="sm">
          Search
        </Button>
      }
      addonPosition="right"
      icon={
        <Button type="text" size="sm">
          <span className="mr-2">
            <MapPinLine size={24} color="#5E718D" />
          </span>
          Location
        </Button>
      }
      iconPosition="right"
      handleOnChange={handleOnChange}
      size="lg"
    >
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  );
};

const SearchBarWithRightSideIconCode = `
"use client";
import { useState } from "react";
import { Button,SearchBar,Dropdown } from "keep-design";
import { ArrowRight, MapPinLine } from "phosphor-react";

const books = [
  { id: 1, name: "To Kill a Mockingbird" },
  { id: 2, name: "Pride and Prejudice" },
  { id: 3, name: "1984" },
  { id: 4, name: "The Great Gatsby" },
  { id: 5, name: "Moby Dick" },
  { id: 6, name: "The Catcher in the Rye" },
  { id: 7, name: "Jane Eyre" },
  { id: 8, name: "The Lord of the Rings" },
  { id: 9, name: "To the Lighthouse" },
  { id: 10, name: "Brave New World" },
];

const SearchBarWithRightSideIcon = () => {
  const [data, setData] = useState([]);
  const handleOnChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const results = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );
    if (searchTerm === "") {
      setData([]);
    } else {
      setData(results);
    }
  };

  return (
     <SearchBar
      placeholder="Search Anything"
      addon={
        <Button type="primary" size="sm">
          Search
        </Button>
      }
      addonPosition="right"
      icon={
        <Button type="text" size="sm">
          <span className="mr-2">
            <MapPinLine size={24} color="#5E718D" />
          </span>
          Location
        </Button>
      }
      iconPosition="right"
      handleOnChange={handleOnChange}
      size="lg"
    >
      <ul>
        {data.map((book) => (
          <Dropdown.Item key={book?.id}>
            {book?.name}
            <span className="ml-auto">
              <ArrowRight size={20} color="#5E718D" />
            </span>
          </Dropdown.Item>
        ))}
      </ul>
    </SearchBar>
  );
};

export default SearchBarWithRightSideIcon;
`;

export { SearchBarWithRightSideIcon, SearchBarWithRightSideIconCode };