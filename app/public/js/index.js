const someApp = {
    data() {
      return {
        result: undefined,
          list:[0,1,2],
          message:"Waiting..."
      }
    },

    computed: {
      prettyBirthday() {
       return dayjs(this.result.dob.date)
       .format('D MMM YYYY')
    
      }

    },

    methods:{ 
      fetchUserData(){
        
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

    },

      created() {
       
        this.fetchUserData();

      } 
  }
  
  Vue.createApp(someApp).mount('#someApp');
