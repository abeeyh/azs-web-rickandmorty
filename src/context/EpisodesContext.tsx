/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { createContext, useReducer, useContext, useEffect } from 'react';

interface Episode {
  id: number;
  name: string;
  air_date: string;
  characters: { id: number; name: string }[];
  imagem?: string;
  favorite: boolean;
  watched: boolean;
}

interface State {
  episodes: Episode[];
  isLoading: boolean;
  showFavorites: boolean;
  searchTitle: string;
}

const initialState: State = {
  episodes: [],
  isLoading: true,
  showFavorites: false,
  searchTitle: '',
};

const EpisodesContext = createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const episodesReducer = (state: State, action: any) => {
  switch (action.type) {
    case 'FETCH_EPISODES':
      return { ...state, episodes: action.payload, isLoading: false };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        episodes: state.episodes.map((episode) =>
          episode.id === action.payload
            ? { ...episode, favorite: !episode.favorite }
            : episode
        ),
      };
    case 'TOGGLE_WATCHED':
      return {
        ...state,
        episodes: state.episodes.map((episode) =>
          episode.id === action.payload
            ? { ...episode, watched: !episode.watched }
            : episode
        ),
      };
    case 'SET_SHOW_FAVORITES':
      return { ...state, showFavorites: action.payload };
    case 'SET_SEARCH_TITLE':
      return { ...state, searchTitle: action.payload };
    default:
      return state;
  }
};

export const EpisodesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(episodesReducer, initialState);

  useEffect(() => {
    // TODO: implementar apollo client
    const fetchEpisodes = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: `query {
                        episodes {
                            results {
                                id
                                name
                                air_date
                                characters {
                                    id
                                    name
                                }
                            }
                        }
                    }`,
          }),
        });

        const { data } = await response.json();
        const episodesWithFavorite = data.episodes.results.map(
          (episode: Episode) => ({
            ...episode,
            favorite: false,
            watched: false,
          })
        );
        dispatch({ type: 'FETCH_EPISODES', payload: episodesWithFavorite });
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  return (
    <EpisodesContext.Provider value={{ state, dispatch }}>
      {children}
    </EpisodesContext.Provider>
  );
};

export const useEpisodes = () => useContext(EpisodesContext);
