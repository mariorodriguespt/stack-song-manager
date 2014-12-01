SongManager = {
  songId: null,
  dep: null,

  init: function(songId){
    this.dep = new Tracker.Dependency;
    if(songId){
      this.setSongId(songId);
    }
  },
  getSongId: function(){

    this.dep.depend();
    return this.songId;
  },
  setSongId: function(arg){
    if(arg){
      this.songId = arg;
      this.dep.changed();
    }
  },
}



if (Meteor.isClient) {

  SongManager.init("Test ID"); //Works

  Meteor.startup(function(){
    //SongManager.init("Test ID"); DOESN'T WORK
  });

  Template.home.helpers({
    songId: function(){
      return SongManager.getSongId();
    },
  });

  Template.home.rendered = function(){
    //SongManager.init("Test ID"); DOESN'T WORK
  }

  Template.home.created = function(){
    //SongManager.init("Test ID"); //Works
  }

}
