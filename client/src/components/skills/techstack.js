import js from '../../assets/js.png';
import nosql from '../../assets/nosql.png';
import sql from '../../assets/sql.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import python from '../../assets/python.png';
import java from '../../assets/java.png';
import react from '../../assets/react.png';
import axios from '../../assets/axios.png';
import reactRouter from '../../assets/react_router.png';
import webpack from '../../assets/webpack.png';
import tailwindcss from '../../assets/tailwindcss.png';
import daisyui from '../../assets/daisyui.png';
import redux from '../../assets/redux.png';
import vite from '../../assets/vite.png';
import nextjs from '../../assets/nextjs.png';
import reactQuery from '../../assets/react_query.png';
import express from '../../assets/express.png';
import node from '../../assets/node.png';
import mongodb from '../../assets/mongodb.png';
import mongoose from '../../assets/mongoose.png';
import mysql from '../../assets/mysql.png';
import sqlite from '../../assets/sqlite.png';
import sequelize from '../../assets/sequelize.png';
import firebase from '../../assets/firebase.png';
import nodemailer from '../../assets/nodemailer.png';

const languages = [
  {techstack: 'JS', photo: js, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
  {techstack: 'HTML', photo: html, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
  {techstack: 'CSS', photo: css, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
  {techstack: 'NoSQL', photo: nosql, url: 'https://en.wikipedia.org/wiki/NoSQL'},
  {techstack: 'SQL', photo: sql, url: 'https://en.wikipedia.org/wiki/SQL'},
  {techstack: 'Python', photo: python, url: 'https://docs.python.org/3/'},
  {techstack: 'Java', photo: java, url: 'https://dev.java/'}
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
  {techStack: 'Firebase', photo: firebase, url: 'https://firebase.google.com/'},
  {techStack: 'Nodemailer', photo: nodemailer, url: 'https://nodemailer.com/'}
]

export { languages, frontend, backend };