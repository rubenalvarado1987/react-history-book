# React History Book

Aplicación construida con React + TypeScript + Vite para visualizar y explorar componentes de interfaz.

## Requisitos

- Node.js 18 o superior (recomendado: versión LTS)
- npm 9 o superior

## Instalación

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd react-history-book
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

## Ejecución en desarrollo

Inicia el servidor local con recarga en caliente (HMR):

```bash
npm run dev
```

Después, abre la URL mostrada en consola (normalmente `http://localhost:5173`).

## Build de producción

Genera los archivos optimizados en `dist/`:

```bash
npm run build
```

## Vista previa del build

Sirve localmente el build generado:

```bash
npm run preview
```

## Pruebas y verificación

Actualmente el proyecto no incluye tests automatizados (por ejemplo, `npm test`).

Puedes validar calidad y estado del código con:

```bash
# Revisión estática con ESLint
npm run lint

# Verificación de tipos + build de producción
npm run build
```

Si quieres agregar pruebas unitarias o de integración en el futuro, una opción común es incorporar Vitest y React Testing Library.
