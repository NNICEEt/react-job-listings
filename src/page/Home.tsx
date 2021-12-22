import { useState, useEffect } from "react";
import jsonData from "../data/data.json";

/*--------------------COMPONENTS--------------------*/
import FilterPanel from "./components/FilterPanel";
import List from "./components/List";
import styled from "styled-components";

/*--------------------INTERFACE--------------------*/
import { Job } from "../models/Job";

export interface JobListingProps {
  items: Job[];
  onAddFilter: Function;
}

function Home() {
  const [jobItems, setJobItems] = useState<Job[]>([]);
  const [filteredItems, setFilteredItems] = useState<string[]>([]);

  useEffect(() => {
    filterJob();
  }, [filteredItems]);

  const filterJob = async () => {
    if (filteredItems.length > 0) {
      const data: Job[] = await jsonData;
      const filter = await data.filter((item) => {
        const newItems = Object.entries(item).flatMap((value) => value[1]);
        return filteredItems.every((value) => newItems.includes(value));
      });
      setJobItems([...filter]);
    } else {
      setJobItems([...jsonData]);
    }
  };

  const addFilterJob = (value: string) => {
    const tmp = [...filteredItems];
    tmp.push(value);
    setFilteredItems([...Array.from(new Set(tmp))]);
  };

  const removeItemFiltered = (item: string) => {
    const newFilter = filteredItems.filter((value) => value !== item);
    setFilteredItems([...newFilter]);
  };

  const onClear = () => {
    setFilteredItems([]);
  };

  return (
    <Container>
      <Banner />
      <Grid.Layout>
        <Grid.Row>
          <FilterPanel
            itemFiltered={filteredItems}
            onRemoveItemFiltered={removeItemFiltered}
            onClear={onClear}
          />
        </Grid.Row>
        <Grid.Row>
          <List items={jobItems} onAddFilter={addFilterJob} />
        </Grid.Row>
      </Grid.Layout>
    </Container>
  );
}

/*-------------------Style-------------------*/
const Container = styled.div`
  min-height: 100vh;
  background: hsl(180, 52%, 96%);
`;

const Banner = styled.div`
  height: 150px;
  background-image: url(${process.env.PUBLIC_URL + "/images/bg-header-desktop.svg"});
  background-color: hsl(180, 29%, 50%);
`;

const Grid = {
  Layout: styled.div`
    display: grid;
    grid-template-columns: minmax(20px, 1fr) minmax(auto, 1100px) minmax(20px, 1fr);
  `,
  Row: styled.section`
    grid-column: 2/3;
  `,
};

export default Home;
