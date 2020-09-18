import { v4 as uuidv4 } from 'uuid';
import { jobs } from './_data';

export function get(req, res, next) {
  res.end(JSON.stringify(jobs));
}

export function post(req, res, next) {
  const { title, salary, details } = req.body
  const id = uuidv4()

  jobs.push({title, salary, details, id})

  res.end(JSON.stringify(jobs));
}
