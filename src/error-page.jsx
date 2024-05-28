import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  let error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oh no! Something went wrong</h1>
      <p>Sorry, an unexpected error has ocurred</p>
      <pre>{error.statusText || error.message}</pre>
    </div>
  );
}
