import React from 'react';

const GoogleMap = () => {
  return (
    <iframe
      className='w-full max-w-[690px] h-96 '
      scrolling='no'
      src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Cruyslei 54A, Antwerp, Belgium, 2100&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
    />
  );
};

export default GoogleMap;
