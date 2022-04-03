import { Request } from 'itty-router';
import { missing, json } from 'itty-router-extras';

const status = (request: Request) => {
  const id = request.params?.id;
  if (!id) {
    return missing()
  }
  return json({})
};

export default status;
