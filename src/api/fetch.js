import React from "react";

export function useFetch(url) {
    const [data, setData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
 
    React.useEffect(() => {

       let cancelled = false;
 
       setIsLoading(true);
       setData(null);
       setError(null);
       fetch(url)
          .then((res) => res.json())
          .then((respData) => {
             if (!cancelled) setData(respData);
          })
          .catch((e) => {
             if (!cancelled) setError(e);
          })
          .finally(() => {
             if (!cancelled) setIsLoading(false);
          });
 
       return () => {

          cancelled = true;
       };
    }, [url]);
 
    return [data, isLoading, error];
 }