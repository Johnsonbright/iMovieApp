import {useCallback, useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCharacters} from '../store/slice/characterSlice';
import {store} from '../store/store';
import {Character, Info, IStateTree} from '../typings/store';

interface IUseCharacters {
  characters: Character[];
  loading: boolean;
  error: string | null;
  fetchData: (page: number) => void;
  infos: Info | any;
}

const useCharacters = (page: number): IUseCharacters => {
  const dispatch = useDispatch();

  const characters = store.getState().characters.characters;

  const infos = store.getState().characters.info;

  const loading = useSelector(state => state.characters.loading);

  const error = store.getState().characters.error;

  const fetchData = useCallback(
    (page: number) => dispatch<any>(fetchCharacters(page)),
    [page],
  );

  useEffect(() => {
    fetchData(page);
  }, [page]);

  return {characters, loading, error, fetchData, infos};
};

export default useCharacters;
