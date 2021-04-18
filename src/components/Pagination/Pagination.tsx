import React from 'react';
import { Info } from '../../interfaces/info';

import { PaginationContainer } from './Pagination.style';

type Props = {
  pagination: Info;
};

const Pagination = (props: Props): JSX.Element => {
  const { pagination } = props;
  console.log(pagination);

  return <PaginationContainer></PaginationContainer>;
};

export default Pagination;
