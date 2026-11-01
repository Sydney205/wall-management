import App, { routePaths } from "../src/App";

export default App;

export function getStaticPaths() {
  return {
    paths: routePaths.map((path) => ({
      params: { route: path === "/" ? [] : path.slice(1).split("/") },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const segments = params.route || [];
  return { props: { path: segments.length ? `/${segments.join("/")}` : "/" } };
}
