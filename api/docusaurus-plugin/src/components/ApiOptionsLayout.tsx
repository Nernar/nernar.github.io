import { useCallback, useContext } from 'react';
import { ApiOptionsContext } from './ApiOptionsContext';

export default function ApiOptionsLayout({ className }: { className: string }) {
  const {
    hideInherited, setHideInherited,
    hideInternal, setHideInternal,
    hideDeprecated, setHideDeprecated,
  } = useContext(ApiOptionsContext);
  const handleHideInherited = useCallback(() => {
    setHideInherited(!hideInherited);
  }, [hideInherited, setHideInherited]);
  const handleHideInternal = useCallback(() => {
    setHideInternal(!hideInternal);
  }, [hideInternal, setHideInternal]);
  const handleHideDeprecated = useCallback(() => {
    setHideDeprecated(!hideDeprecated);
  }, [hideDeprecated, setHideDeprecated]);

  return (
    <>
      <div className={className}>
        <div><b>Page Options</b></div>
        <label>
          <input checked={hideInherited} type="checkbox" onChange={handleHideInherited} />
          <span>Hide Inherited</span>
        </label>
        <div />
        <label>
          <input checked={hideInternal} type="checkbox" onChange={handleHideInternal} />
          <span>Hide Internal</span>
        </label>
        <div />
        <label>
          <input checked={hideDeprecated} type="checkbox" onChange={handleHideDeprecated} />
          <span>Hide Deprecated</span>
        </label>
        <div />
      </div>
    </>
  );
}
