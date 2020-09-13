// @ts-check
import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHttp } from '../hooks/http.hook';
import { Loader } from '../components/Loader';
import { LinkCard } from '../components/LinkCard';

export const DetailPage = () => {
  const { request, loading } = useHttp();
  const [ link, setLink ] = useState(null);
  const linkId = useParams().id;

  const getLink = useCallback(async () => {
    try {

      const fetchedLink = await request(`/api/link/${linkId}`);
      setLink(fetchedLink);

    } catch (err) {}
  }, [ linkId, request ]);

  useEffect(() => {
    getLink()
  }, [ getLink ]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      { !loading && link && <LinkCard link={link} /> }
    </>
  );
};
