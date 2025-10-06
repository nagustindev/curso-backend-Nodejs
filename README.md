# back-proyecto

Proyecto de ejemplo del curso de BackEnd con NodeJS de Talento Tech que consume la API pública https://fakestoreapi.com para listar productos o consultar un producto por su id.

## Requisitos

- Node.js 18+ (o la versión que tengas instalada que soporte fetch nativo)

## Instalación

1. Clona o descarga el repositorio.
2. Desde la carpeta del proyecto instala dependencias (si las hubiera):

```powershell
npm install
```

## Uso

El archivo principal es `index.js`.

- Para listar todos los productos:

```powershell
node .\index.js
```

- Para obtener un producto por id (ejemplo id = 3):

```powershell
node .\index.js 3
```