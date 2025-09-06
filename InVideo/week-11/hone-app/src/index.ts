import { Hono } from 'hono'

const app = new Hono()

const words: String[] = [
  'apple', 'banana', 'cherry', 'dragonfruit', 'elephant', 'forest',
  'galaxy', 'harmony', 'island', 'jungle', 'kangaroo', 'lemon',
  'mountain', 'nebula', 'ocean', 'penguin', 'quantum', 'river',
  'sunshine', 'tiger', 'umbrella', 'volcano', 'whale', 'xenon', 'yeti', 'zebra'
];

async function Middleware(c: any, next: any) {
  const body = await c.req.json();
  if (body.pass == 123) {
    await next();
  } else {
    return c.text("nope")
  }
}

// app.use(Middleware)

app.post('/', Middleware, async (c) => {
  //body, heaeders, query parameters, midlewares, connecting to a database
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text("Hono")
})

app.get("/ss", async (c) => {
  return c.text("sjdkjsd")
})

app.get("/rw", async (c) => {
  const body = await c.req.json();
  const fun = yup(body.num)

  return c.json({
    response: fun
  })
});

function yup(numb: number): any {
  let neww: String[] = [];
  for (let index = 0; index < numb; index++) {

    neww.push(words[Math.floor(Math.random() * 4)])

  }
  return neww;
}

export default app
