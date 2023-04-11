import { data } from '../database/db.js';

export const getRecordByCNJ = (request, response) => {
  const records = data;

  const { cnj } = request.query;

  if (!cnj) {
    response.send(records);
  } else {
    const findRecord = records.find((record) => record.cnj === cnj);
    if (!findRecord) {
      return response
        .status(404)
        .send({ error: true, msg: `Record doesn't exist`});
    } else {
      response.send(findRecord);
    }
  }
};

export const getRecordsByCourt = (request, response) => {
  const records = data;

  const { tr } = request.query;

  const findRecord = records.filter((record) => record.tribunalOrigem === tr);
  if (!findRecord) {
    return response
      .status(404)
      .send({ error: true, msg: `List doesn't exist` });
  } else {
    response.send(findRecord);
  }
};

export const getAllCourts = (request, response) => {
  const records = data;

  const courts = [
    ...records.reduce((acc, cur) => acc.add(cur.tribunalOrigem), new Set()),
  ];

  if (!courts) {
    return response
      .status(404)
      .send({ error: true, msg: `List doesn't exist` });
  } else {
    response.send(courts);
  }
};