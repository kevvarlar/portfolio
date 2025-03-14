import React from 'react';
import js from '../assets/js.png';
import nosql from '../assets/nosql.png';
import sql from '../assets/sql.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import python from '../assets/python.png';
import java from '../assets/java.png';
import TechStack from './TechStack.jsx';
import react from '../assets/react.png';
import axios from '../assets/axios.png';
import reactRouter from '../assets/react_router.png';
import webpack from '../assets/webpack.png';
import tailwindcss from '../assets/tailwindcss.png';
import daisyui from '../assets/daisyui.png';
import redux from '../assets/redux.png';
import vite from '../assets/vite.png';
import nextjs from '../assets/nextjs.png';
import reactQuery from '../assets/react_query.png';
import express from '../assets/express.png';
import node from '../assets/node.png';
import mongodb from '../assets/mongodb.png';
import mongoose from '../assets/mongoose.png';
import mysql from '../assets/mysql.png';
import sqlite from '../assets/sqlite.png';
import sequelize from '../assets/sequelize.png';
import firebase from '../assets/firebase.png';

const Skills = () => {
  const languages = [
    {language: 'JS', photo: js, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
    {language: 'HTML', photo: html, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    {language: 'CSS', photo: css, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    {language: 'NoSQL', photo: nosql, url: 'https://en.wikipedia.org/wiki/NoSQL'},
    {language: 'SQL', photo: sql, url: 'https://en.wikipedia.org/wiki/SQL'},
    {language: 'Python', photo: python, url: 'https://docs.python.org/3/'},
    {language: 'Java', photo: java, url: 'https://dev.java/'}
  ];

  const frontend = [
    {techStack: 'React', photo: react, url: 'https://reactjs.org/'},
    {techStack: 'Axios', photo: axios, url: 'https://axios-http.com/'},
    {techStack: 'React Router', photo: reactRouter, url: 'https://reactrouter.com/'},
    {techStack: 'Webpack', photo: webpack, url: 'https://webpack.js.org/'},
    {techStack: 'TailwindCSS', photo: tailwindcss, url: 'https://tailwindcss.com/'},
    {techStack: 'DaisyUI', photo: daisyui, url: 'https://daisyui.com/'},
    {techStack: 'Redux', photo: redux, url: 'https://redux.js.org/'},
    {techStack: 'Vite', photo: vite, url: 'https://vitejs.dev/'},
    {techStack: 'NextJS', photo: nextjs, url: 'https://nextjs.org/'},
    {techStack: 'React Query', photo: reactQuery, url: 'https://react-query.tanstack.com/'}
  ];

  const backend = [
    {techStack: 'ExpressJS', photo: express, url: 'https://expressjs.com/'},
    {techStack: 'NodeJS', photo: node, url: 'https://nodejs.org/'},
    {techStack: 'MongoDB', photo: mongodb, url: 'https://www.mongodb.com/'},
    {techStack: 'Mongoose', photo: mongoose, url: 'https://mongoosejs.com/'},
    {techStack: 'MySQL', photo: mysql, url: 'https://www.mysql.com/'},
    {techStack: 'SQLite', photo: sqlite, url: 'https://www.sqlite.org/'},
    {techStack: 'Sequelize', photo: sequelize, url: 'https://sequelize.org/'},
    {techStack: 'Firebase', photo: firebase, url: 'https://firebase.google.com/'}
  ]

  return (
    <section className="overflow-y-auto min-h-96 ml-4">
      <h1 className="text-4xl font-bold">Languages</h1>
      <div className="max-w-screen flex flex-wrap h-40 overflow-y-auto mt-10">
        {languages.map((language) => <TechStack techstack={language} />)}
      </div>
      <div className="divider"/>
      <h1 className="text-4xl font-bold">Frontend Tech Stack</h1>
      <div className="max-w-screen flex flex-wrap h-80 overflow-y-auto mt-10">
        {frontend.map((techstack) => <TechStack techstack={techstack} />)}
      </div>
      <div className="divider"/>
      <h1 className="text-4xl font-bold">Backend Tech Stack</h1>
      <div className="max-w-screen flex flex-wrap h-80 overflow-y-auto mt-10">
        {backend.map((techstack) => <TechStack techstack={techstack} />)}
      </div>
    </section>
  )
}

export default Skills
