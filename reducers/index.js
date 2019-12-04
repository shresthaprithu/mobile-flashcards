import {
  RECEIVE_DECKS,
  ADD_DECK,
  REMOVE_DECK,
  ADD_CARD
} from '../actions/index';

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      const { title } = action;
      return {
        ...state,
        [title]: {
          title,
          questions: []
        }
      };
    case REMOVE_DECK:
      const { id } = action;
      const { [id]: value, ...remainingDecks } = state;
      return remainingDecks;
    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          questions: [...state[deckId].questions].concat(card)
        }
      };
    default:
      return state;
  }
}