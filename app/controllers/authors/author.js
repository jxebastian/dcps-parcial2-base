import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    delete(post){
      const respuesta = confirm('desea eliminar el post');
      if(respuesta){

        post.deleteRecord();
        //post.destroyRecord();
        post.get('IS DELETE');
        post.save();
      }
    }
  }
});
