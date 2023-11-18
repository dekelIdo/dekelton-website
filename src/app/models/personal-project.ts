export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  githubLink: string;
  projectLink: string;
  technologies: Technology[];
}

type Technology =
  | 'angular'
  | 'aws'
  | 'rxjs'
  | 'express'
  | 'nodejs'
  | 'sass'
  | 'typescript'
  | 'react'
  | 'mongo'
  | 'redux';
