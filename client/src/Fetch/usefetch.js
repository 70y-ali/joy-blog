import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // const url = 'http://localhost:8000/blog'
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          // console.log('res=>', res)
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        // when switch browser, then load all page due to we use abort controller
        .catch((err) => {
          if (err.name === "AbortError") {
            // console.log('fetch aborted')
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);

    return () => abortCont.abort();
  }, [url]); /*url*/

  return { data, isPending, error };
  // after finish the all exexuting we clean up all action
};

export default useFetch;
