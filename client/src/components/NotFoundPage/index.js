import React from 'react';
import { HomeLink, Wrapper } from './NotFound.styles';

export const PageNotFound = () => {
   return (
      <Wrapper>
         <img src="https://fakeimg.pl/300x300/?text=error img" alt="page-not-found-img" width="200" height="200" />
         <h1>Page not Found</h1>
         <HomeLink href="/home">
            Return to Home
         </HomeLink>
      </Wrapper>
   );
};