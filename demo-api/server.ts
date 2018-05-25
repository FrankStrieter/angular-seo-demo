import * as express from 'express';
import { join } from 'path';
import * as cors from 'cors';
const app = express();
app.use(cors());
app.use(
  '*.*',
  express.static(join(process.cwd(), 'articles.json'), {
    maxAge: '1y',
  })
);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`api running on http://localhost:${PORT}`);
});
