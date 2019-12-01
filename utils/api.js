import { AsyncStorage } from 'react-native';
import { decks } from './_DATA';

const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

export function getDecksOld() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatDeckResults);
}

function formatDeckResults(results) {
  return results === null ? decks : JSON.parse(results);
}

export async function getDecks() {
  try {
    const storeResults = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    
    if (storeResults === null) {
      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    }
    
    return storeResults === null ? desks : JSON.parse(storeResults);
  } catch (err) {
    console.log(err);
  }
}

export function getData() {
  return decks;
}