const someApp = {
    data() {
      return {
        result: undefined,
         students: [],
         selectedStudent: null,
         offers: [],
         offerForm{},
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

          selectStudent(s) {
            if (s==this.selectedStudemt) {
              return;
            }
            this.selectedStudent = s;
            this.offers= [];
            this.fetchOfferData(this.selectedStudent);
          },

          fetchStudentData() {
            fetch('api/student/')
            .then( response => response.json() )
            .then( (responseJson) =>) {
              console.log(responseJson);
              this.offers = responseJson;
      
            })

            .catch( (err) => {
              console.error(err);
            })
          }

          fetchOfferData(s) {
            console.log("Fetching offer data for ", s)
            fetch('api/student/')
            .then( response => response.json() )
            .then( (responseJson) =>) {
              console.log(responseJson);
              this.offers = responseJson;
      
            })

            .catch( (err) => {
              console.error(err);
            })
          }

        });
        

      }

    },

    postNewOffer(evt) {
      this.offerForm.studentId= this.selectedStudent.studentId;
      console.log("Posting:", this.offerForm);
      
      alert("Posting!");
    }

      created() {
       
        this.fetchUserData();

      } 
  }
  
  Vue.createApp(someApp).mount('#someApp');
