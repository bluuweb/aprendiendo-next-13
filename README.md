# Mi primer proyecto con Next 13 + Tutorial

## Recursos

- [doc oficial next 13 beta](https://beta.nextjs.org/docs/getting-started)
- [extensiones de VSCode](https://bluuweb.dev/00-started/vscode.html)

## Crear proyecto

Hasta este momento Next 13 está en beta, por ende puede ser que este comando cambie en el corto plazo.

```bash
npx create-next-app@latest --experimental-app
```

## page.tsx

Cada ruta pública tiene que tener un archivo page.tsx. En este archivo se define el componente que se va a renderizar en esa ruta.

src\app\dashboard\settings\page.tsx

```tsx
const PageSettings = () => {
  return <div>PageSettings</div>;
};
export default PageSettings;
```

## use client

Los componentes de cliente le permiten agregar interactividad del lado del cliente a su aplicación. En Next.js, se procesan previamente en el servidor y se hidratan en el cliente. pages/Puede pensar en los componentes del cliente como la forma en que siempre han funcionado los componentes del directorio Next.js.

"use client se encuentra" entre el código de solo servidor y el de cliente. Se coloca en la parte superior de un archivo, por encima de las importaciones, para definir el punto de corte donde cruza el límite de la parte del servidor a la parte del cliente.

Una vez que "use client" se define en un archivo, todos los demás módulos importados en él, incluidos los componentes secundarios, se consideran parte del paquete del cliente.

### Notas

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

### ¿Cuándo utilizar "use client"?

Para simplificar la decisión entre los componentes del servidor y del cliente, recomendamos usar los componentes del servidor (predeterminados en el appdirectorio) hasta que necesite usar un componente del cliente.

- [Esta tabla resume los diferentes casos de uso para los componentes de servidor y cliente](https://beta.nextjs.org/docs/rendering/server-and-client-components#when-to-use-server-vs-client-components)

## meta data

Con esto en las page.tsx puedes añadir metadatos a las páginas.

```tsx
export const metadata = {
  title: "Dashboard",
  description: "Dashboard page",
};
```

## not-found.tsx

Este archivo se ejecuta cuando no se encuentra la ruta que se está buscando. Es importante que el nombre del archivo sea: `not-found.tsx`

src\app\not-found.tsx

```tsx
export default function NotFound() {
  return (
    <>
      <h2>Not Found 🤐</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
```

## Link y useRouter

El componente Link de next.js es el equivalente a un `<a href="...">` pero con la diferencia de que no recarga la página, sino que hace un cambio de ruta sin recargar la página.

También se puede utilizar el hook useRouter para hacer el cambio de ruta de forma programática.

src\components\Navbar.tsx

```tsx
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogin = () => {
    console.log("login");
    // verifican que la cuenta exista...??

    // si existe, se redirecciona a dashboard
    router.push("/dashboard");
  };

  return (
    <div>
      <Link
        href="/"
        className="bg-gray-500 text-white py-2 px-4 rounded-md"
      >
        Inicio
      </Link>
      <Link
        href="/dashboard"
        className="bg-gray-500 text-white py-2 px-4 rounded-md"
      >
        dashboard
      </Link>
      <Link
        href="/dashboard/settings"
        className="bg-gray-500 text-white py-2 px-4 rounded-md"
      >
        settings
      </Link>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Navbar;
```

## Grupo de rutas

solo tienes que colocar la carpta principal entre parentesis y dentro de ella colocar los archivos page.tsx

- src\app\(public)\about\page.tsx
- src\app\(public)\contact\page.tsx
