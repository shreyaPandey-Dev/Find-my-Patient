import { Spinner } from "reactstrap";
/**
 * Loader
 * Displays spinner while data fetching
 */
export const Loader = (loading) => {
  return (
    <Spinner color="primary" type="grow">
      Loading...
    </Spinner>
  );
};
