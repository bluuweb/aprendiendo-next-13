This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Notas:

- "use client": Solo declarar componentes como funciones asignadas a variables, no como `export default function xxx(){}`.
- "use client" es un comentario que indica que el código que sigue es código que se ejecuta en el cliente, no en el servidor.
- Los componentes anidados no necesitan el comentario "use client" porque ya están dentro de un componente principal.
- Siempre las page.tsx tienen que ser exportaciones por defecto. (comando "rafce")

```tsx
"use client";

import { useState } from "react";
import ButtonCounter from "./ButtonCounter";

const Counter = function () {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <ButtonCounter
        setCount={setCount}
        count={count}
      />
    </div>
  );
};

export default Counter;
```

## meta data

Con esto en las page.tsx puedes añadir metadatos a las páginas.

```tsx
export const metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};
```
