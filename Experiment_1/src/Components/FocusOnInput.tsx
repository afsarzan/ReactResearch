import { useLayoutEffect, useRef } from "react";
import { useId } from 'react';

export default function FocusOnInput() {
    const intRef = useRef<HTMLInputElement>(null)
    const id = useId();
    useLayoutEffect( () => {
        intRef.current?.focus();
    },[]);

  return <>
  <span>useId: {id}</span>
  <input type="text" ref={intRef}/ >;
  </>
}
