import { Router } from 'express';

import { fluzzBloppGenerator } from './fluzzblopp';
import { Message, Status, response } from './response';

const router = Router();

router.get('/fluzzblopp/', (req, res) => {
  const { start = 1, end = 100 } = req.query;

  if (isNaN(+start) || isNaN(+end))
    return res.send(response([], Status.error, Message.nan));

  try {
    const generator = fluzzBloppGenerator(+start, +end);
    const results: (string | number)[] = [];

    for (let result of generator) {
      results.push(result);
    }

    res.send(response(results, Status.success));
  } catch (err) {
    res.send(response([], Status.error));
  }
});

export default router;
