import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    delate(post){
      const respuesta = confirm('desea borrar el post');
      if(respuesta){
        post.destroyRecord();
      }
    }
  }
});
