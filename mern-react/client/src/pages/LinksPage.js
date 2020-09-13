// @ts-check
import React, { useState, useCallback, useEffect } from 'react';
import { useHttp } from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { LinksList } from '../components/LinksList';

export const LinksPage = () => {
  const { request, loading } = useHttp();
  const [ links, setLinks ] = useState([]);

  const getLinks = useCallback(async () => {
    try {

      const fetchedLinks = await request(`/api/link`);
      setLinks(fetchedLinks);

    } catch (err) {}
  }, [ request ]);

  useEffect(() => {
    getLinks()
  }, [ getLinks ]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      { !loading && <LinksList links={links} /> }
    </>
  );
};
