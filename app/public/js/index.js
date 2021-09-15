const someApp = {
    data() {
      return {
        result: {},
          list:[0,1,2],
          message:"Waiting..."
      }
    },


      created() {
        fetch('https://randomuser.me/api')
        
        .then( 
          function(response) {
            return response.json()
          })

          .then((json) => {
              console.log(json);
              this.result = json.results[0];

          })

        .catch( (error) =>{
          console.error(error);

        });

      } 
  }
  
  Vue.createApp(someApp).mount('#someApp');
