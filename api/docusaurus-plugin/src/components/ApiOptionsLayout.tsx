import { useCallback, useContext } from 'react';
import { ApiOptionsContext } from './ApiOptionsContext';
import clsx from 'clsx';

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
    <div className={clsx(className, 'tsd-api-options-container')}>
      <label className={clsx('tsd-api-option-toggle', !hideInherited && 'active')}>
        <input checked={hideInherited} type="checkbox" onChange={handleHideInherited} />
        Inherited
      </label>
      <label className={clsx('tsd-api-option-toggle', !hideInternal && 'active')}>
        <input checked={hideInternal} type="checkbox" onChange={handleHideInternal} />
        Internal
      </label>
      <label className={clsx('tsd-api-option-toggle', !hideDeprecated && 'active')}>
        <input checked={hideDeprecated} type="checkbox" onChange={handleHideDeprecated} />
        Deprecated
      </label>
    </div>
  );
}
