const Offer = {
  data() {
    return {
          "students": [],
          "offers": [],
          "books":[],
          "offerForm": {},
          "selectedStudent": null,
          selectedOffer: null
      }
  },
  computed: {},
  methods: {
      


    postNewOffer(evt) {
        this.offerForm.studentId = this.selectedStudent.id;        
        console.log("Posting!", this.offerForm);
        alert("Posting"),

        fetch('api/books/create.php', {

            method:'POST',

            body: JSON.stringify(this.offerForm),

            headers: {

              "Content-Type": "application/json; charset=utf-8"

            }

          })

          .then( response => response.json() )

          .then( json => {

            console.log("Returned from post:", json);

            // TODO: test a result was returned!

            this.books = json;
            // reset the form

            this.offerForm = {};

          });

        

      selectStudent(s) {
          console.log("Clicked", s);
          if (this.selectedStudent == s) {
              return;
          }

          this.selectedStudent = s;
          this.offers = [];
          this.restOfferForm();
          this.fetchOfferData(s);
      },

      selectOffer(o){
          this.selectedOffer= 0;
          this.offerForm= this.selectedOffer;

      },

      resetOffer(){
        this.selectedOffer= null;
        this.offerForm{};
      }
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
