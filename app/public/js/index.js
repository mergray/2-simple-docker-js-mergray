// const SomeApp = {
//   data() {
//     return {
//       students: [],
//       selectedStudent: null,
//       offers: [],
//       offerForm: {}
//     }
//   },
//   computed: {},
//   methods: {
//       prettyData(d) {
//           return dayjs(d)
//           .format('D MMM YYYY')
//       },
//       prettyDollar(n) {
//           const d = new Intl.NumberFormat("en-US").format(n);
//           return "$ " + d;
//       },
//       selectStudent(s) {
//           if (s == this.selectedStudent) {
//               return;
//           }
//           this.selectedStudent = s;
//           this.offers = [];
//           this.fetchOfferData(this.selectedStudent);
//       },
//       fetchUserData(){
//         fetch('https://randomuser.me/api')
//         .then( 
//           function(response) {
//             return response.json()
//           })

//           .then((json) => {
//               console.log(json);
//               this.result = json.results[0];
//           })
          
//         .catch( (error) =>{
//           console.error(error);

//         });
//       }
//     },

//       fetchStudentData() {
//           fetch('/api/student/')
//           .then( response => response.json() )
//           .then( (responseJson) => {
//               console.log(responseJson);
//               this.students = responseJson;
//           })
//           .catch( (err) => {
//               console.error(err);
//           })
//       },
//       fetchOfferData(s) {
//           console.log("Fetching offer data for ", s);
//           fetch('/api/offer/?student=' + s.id)
//           .then( response => response.json() )
//           .then( (responseJson) => {
//               console.log(responseJson);
//               this.offers = responseJson;
//           })
//           .catch( (err) => {
//               console.error(err);
//           })
//           .catch( (error) => {
//               console.error(error);
//           });
//       },
//       postNewOffer(evt) {
//         this.offerForm.studentId = this.selectedStudent.studentId;

//         console.log("Posting:", JSON.stringify(this.offerForm));
        
//         fetch('api/offer/create.php', {
//             method:'POST',
//             body: JSON.stringify(this.offerForm),
//             headers: {
//               "Content-Type": "application/json; charset=utf-8"
//             }
//           })
//           .then( response => response.json() )
//           .then( json => {
//             console.log("Returned from post:", json);
//             // TODO: test a result was returned!
//             this.offers.push(json[0]);

//             this.offerForm = {};
//           });
//       }
//   },
//   created() {
//       this.fetchStudentData();
//   }

// }

// Vue.createApp(SomeApp).mount('#offerApp');

const Offer = {
  data() {
    return {
          "students": [],
          "offers": [],
          "selectedStudent": null
      }
  },
  computed: {
      // prettyBirthday() {
      //     return dayjs(this.person.dob.date)
      //     .format('D MMM YYYY');
      // }
  },
  methods: {
      selectStudent(s) {
          console.log("Clicked", s);
          if (this.selectedStudent == s) {
              return;
          }

          this.selectedStudent = s;
          this.offers = [];
          this.fetchOfferData(s);
      },
      fetchStudentData() {
          fetch('/api/student/')
          .then(response => response.json())
          .then((parsedJson) => {
              console.log(parsedJson);
              this.students = parsedJson
          })
          .catch( err => {
              console.error(err)
          })
      },
      fetchOfferData(s) {
          console.log("Fetching offers for", s);
          fetch('/api/offer/?student=' + s.id)
          .then(response => response.json())
          .then((parsedJson) => {
              console.log(parsedJson);
              this.offers = parsedJson
          })
          .catch( err => {
              console.error(err)
          })
      }
  },
  created() {
      this.fetchStudentData();
  }
}

Vue.createApp(Offer).mount('#offerApp');
