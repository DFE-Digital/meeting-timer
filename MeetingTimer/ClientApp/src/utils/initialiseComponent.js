import { useEffect, useRef } from 'react';
import { initAll } from 'govuk-frontend';

const useGovUKFrontend = () => {
    const inputEl = useRef(null);
    useEffect(() => {
      if (inputEl.current) {
        initAll({
          scope: inputEl.current,
        });
      }
    });
    return inputEl
}
export default useGovUKFrontend