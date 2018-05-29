import TrelloNodeAPI from 'trello-node-api';

export class Trello {
  apiKey: string;
  oauthToken: string;
  trelloNodeApi: TrelloNodeAPI;

  constructor(apiKey: string, oauthToken: string) {
    this.apiKey = apiKey;
    this.oauthToken = oauthToken;
    this.trelloNodeApi = new TrelloNodeAPI();
    this.trelloNodeApi.setApiKey(this.apiKey);
    this.trelloNodeApi.setOauthToken(this.oauthToken);
  }

  public isValidConfigTrello() {
    return (
      !(
        this.apiKey === undefined ||
        this.apiKey === null ||
        this.apiKey == ''
      ) ||
      !(
        this.oauthToken === undefined ||
        this.oauthToken === null ||
        this.oauthToken == ''
      )
    );
  }

  public async obtenirLesInformationDUnBoard(boardId: string) {
    if (this.isValidConfigTrello()) {
      return await this.trelloNodeApi.board.search(boardId).catch(error => {
        if (error) {
          console.log('error ', error);
        }
      });
    }
  }
}

export default Trello;
