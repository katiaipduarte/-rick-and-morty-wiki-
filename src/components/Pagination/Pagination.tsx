import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { Info } from '../../interfaces/info';
import ApiProvider from '../../lib/api-provider';
import { GlobalState } from '../../store/store';

import { PaginationContainer } from './Pagination.style';

type Props = {
  pagination: Info;
};

const Pagination = (props: Props): JSX.Element => {
  const { pagination } = props;
  const { getCharacters } = ApiProvider();
  const searchTerm = useSelector((state: GlobalState) => state.charactersState).searchTerm;

  const getNewPage = (page: number): void => {
    getCharacters(searchTerm, page);
  };
  console.log(pagination);
  return (
    <PaginationContainer>
      <ul>
        <li className={pagination.nextPage === 2 ? 'disabled' : ''} onClick={() => getNewPage(1)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </li>
        <li
          className={(pagination.nextPage as number) === 1 ? 'disabled' : ''}
          onClick={() => getNewPage(pagination.nextPage as number)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
