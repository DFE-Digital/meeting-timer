import { useEffect, useRef } from 'react';
import { initAll } from 'govuk-frontend';

const useGovUKFrontend = () => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      initAll({
        scope: ref.current,
      });
    }
  }, []);
  return ref;
};

export default useGovUKFrontend;
