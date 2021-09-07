import { Episode } from './episode';
import { EpisodeListComponent } from './episode-list/episode-list.component';

describe('Episode', () => {
  it('should create an instance', () => {
    // expect(new Episode(0, "test", "1/1/00", "test ep", ["Rick"], "testurl", "testcreated")).toBeTruthy();
    let ep: Episode={info:{count:0, pages:5, next:"test1", prev:"test0"},results:{id:0, name:"test", air_date:"1/1/00", episode:"test ep", characters:["Rick"], url:"testurl", created:"testcreated"}};
    expect(ep).toBeTruthy();
    expect(ep.results.id).toBe(0);
  });
});
