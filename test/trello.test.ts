import Trello from '../src/trello';

let trello = new Trello('', '');
const apiKey = process.env.TRELLO_API_KEY || 'YOUR_API_KEY';
const oauthToken = process.env.TRELLO_OAUTH_TOKEN || 'OAUTH_TOKEN';
const boardId = 'BUZH8tDs';

describe('Trello', () => {
  describe('le constructeur', () => {
    test('est invalide', () => {
      expect(trello.isValidConfigTrello()).toEqual(false);
    });
    test('est valide', () => {
      trello = new Trello(apiKey, oauthToken);
      expect(trello.isValidConfigTrello()).toEqual(true);
    });
  });
  describe('un board', () => {
    test('on recupere un board', async () => {
      await expect(
        trello.obtenirLesInformationDUnBoard(boardId)
      ).resolves.not.toBeNull();
    });
  });
});
