import React from "react";
import { PageTemplate } from "../components/PageTemplate";
import { Helmet } from "react-helmet-async";

export function Intro() {
  return (
    <>
      <Helmet>
        <title>Introduction Lecture: Digital History</title>
        <meta
          name="description"
          content="Introductory presentation to QMP 100: Roadmaps taught by Dr. Nathan Michalewicz at Queens University of Charlotte. "
        />
      </Helmet>
      <PageTemplate url="https://raw.githubusercontent.com/nkmwicz/teach-lectures/master/roadmap/01-introduction.json" />
    </>
  );
}
