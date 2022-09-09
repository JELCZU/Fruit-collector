export class config{
  constructor(){
  this.gravity=0.1;
  this.fruitsMaxRespawnTime=1000//in ms
  this.fruitsMinRespawnTime=1000    //in ms
  this.playerStartScore=20;
  this.fruitsTypes = [
    {
        name : "Apple",
        score : 10,
        graphicSource:""
    },
    {
      name : "Banana",
      score : 20,
      graphicSource:""
    },
    {
      name : "Orange",
      score : 30,
      graphicSource:""
    },
]
  }
}