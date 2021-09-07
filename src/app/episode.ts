export interface Episode {

  info:{
    count: number;
    pages: number;
    next: string;
    prev: string;

  }
  results:{
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
  }


  // constructor(id: number, name:string, air_date:string, episode: string, charaters: string[], url: string, created: string){
  //   this.id=id;
  //   this.name=name;
  //   this.air_date=air_date;
  //   this.episode=episode;
  //   this.characters=charaters;
  //   this.url=url;
  //   this.created=created;
  // }
}


