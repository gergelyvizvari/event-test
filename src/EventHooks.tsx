import { useEffect } from 'react';

export function useListener<T>(eventName: string, callback: (data: T) => void) {
  useEffect(() => {
    console.log('useListener', eventName);
    const cb = (e: CustomEvent<T>) => callback(e.detail);
    window.addEventListener(eventName as any, cb);
    return () => window.removeEventListener(eventName as any, cb);
  }, [eventName, callback]);
}

export function useDispatch<T>(eventName: string) {
  const dispatch = (data?: T) => {
    console.log('useDispatch', eventName, data)
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  };
  return dispatch;
}

export function useEffectDispatch<T>(eventName: string, data?: T) {
  useEffect(() => {
    console.log('useEffectDispatch', eventName, data)
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
  }, []);
}
