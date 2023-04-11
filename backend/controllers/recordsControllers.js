import { data } from '../database/db.js';

export const getRecordByCNJ = (request, response) => {
  const { cnj } = request.query;

  if (!cnj) {
    return response.send(data);
  }

  try {
    const record = data.find((record) => record.cnj === cnj);

    if (!record) {
      throw new Error(`Record with CNJ ${cnj} not found`);
    }

    response.send(record);
  } catch (error) {
    response.status(404).send({ error: true, msg: error.message });
  }
};
export const getRecordsByCourt = (request, response) => {
  const { tr } = request.query;

  try {
    const records = filterRecordsByTribunalOrigem(tr);

    if (records.length === 0) {
      throw new Error(`No records found for tribunal ${tribunalOrigem}`);
    }

    response.send(records);
  } catch (error) {
    response.status(404).send({ error: true, msg: error.message });
  }
};

function filterRecordsByTribunalOrigem(tribunalOrigem) {
  return tribunalOrigem
    ? data.filter((record) => record.tribunalOrigem === tribunalOrigem)
    : data;
}

export const getAllCourts = (request, response) => {
  try {
    const courts = getCourts();

    if (courts.length === 0) {
      throw new Error(`No courts found`);
    }

    response.send(courts);
  } catch (error) {
    response.status(404).send({ error: true, msg: error.message });
  }
};

function getCourts() {
  return [...new Set(data.map((record) => record.tribunalOrigem))];
}