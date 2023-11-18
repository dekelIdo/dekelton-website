export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  githubLink: string;
  projectLink: string;
  technologies: Technology[];
}

type Technology =
  | 'react'
  | 'angular'
  | 'nodejs'
  | 'sass'
  | 'typescript'
  | 'rxjs'
  | 'express'
  | 'mongo'
  | 'aws'
  | 'redux';
